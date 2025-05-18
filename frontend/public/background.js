// Chrome Extension Background Service Worker 

console.log('[TabSyncer] background.js loaded');

function updateContextMenus(isLoggedIn) {
  chrome.contextMenus.removeAll(() => {
    if (isLoggedIn) {
      chrome.contextMenus.create({
        id: 'save_snapshot',
        title: '保存快照',
        contexts: ['action']
      });
      chrome.contextMenus.create({
        id: 'open_snapshots',
        title: '打开快照',
        contexts: ['action']
      });
      chrome.contextMenus.create({
        id: 'logout',
        title: '退出',
        contexts: ['action']
      });
    } else {
      chrome.contextMenus.create({
        id: 'login',
        title: '登录',
        contexts: ['action']
      });
    }
    if (chrome.contextMenus.refresh) chrome.contextMenus.refresh();
  });
}

// 初始化菜单
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.local.get(['token'], ({ token }) => {
    updateContextMenus(!!token);
  });
});

// 监听 token 变化，动态更新菜单
chrome.storage.onChanged.addListener((changes, area) => {
  if (area === 'local' && 'token' in changes) {
    updateContextMenus(!!changes.token.newValue);
  }
});

function saveSnapshot(token) {
  chrome.windows.getAll({ populate: true, windowTypes: ['normal'] }, (windows) => {
    const currentWindow = windows.find(w => w.focused) || windows[0];
    const tabs = currentWindow.tabs.map(t => ({
      title: t.title,
      url: t.url,
      favIconUrl: t.favIconUrl
    }));
    fetch('http://localhost:3000/api/snapshot/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        windowId: currentWindow.id,
        tabs,
        createdAt: new Date().toISOString()
      })
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error('Network response was not ok');
      }
    })
    .then(() => {
      if (chrome.notifications && chrome.notifications.create) {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon-128.png',
          title: '快照已保存',
          message: '当前窗口所有标签页已保存到云端'
        });
      }
    })
    .catch((err) => {
      if (chrome.notifications && chrome.notifications.create) {
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon-128.png',
          title: '保存失败',
          message: '快照保存失败，请检查网络或重新登录'
        });
      } else {
        console.error('[TabSyncer] chrome.notifications API is undefined', err);
      }
    });
  });
}

chrome.action.onClicked.addListener(async () => {
  chrome.storage.local.get(['token'], ({ token }) => {
    if (!token) {
      chrome.tabs.create({ url: chrome.runtime.getURL('index.html#/login') });
      return;
    }
    saveSnapshot(token);
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  chrome.storage.local.get(['token'], ({ token }) => {
    if (info.menuItemId === 'login') {
      chrome.tabs.create({ url: chrome.runtime.getURL('index.html#/login') });
      return;
    }
    if (!token && (info.menuItemId === 'save_snapshot' || info.menuItemId === 'open_snapshots')) {
      chrome.tabs.create({ url: chrome.runtime.getURL('index.html#/login') });
      return;
    }
    if (info.menuItemId === 'save_snapshot') {
      saveSnapshot(token);
      return;
    }
    if (info.menuItemId === 'open_snapshots') {
      chrome.tabs.create({
        url: chrome.runtime.getURL('index.html#/main')
      });
    } else if (info.menuItemId === 'logout') {
      chrome.storage.local.remove('token', () => {
        // 关闭所有插件相关页面
        chrome.tabs.query({}, (tabs) => {
          const urls = [
            chrome.runtime.getURL('index.html#/main'),
            chrome.runtime.getURL('index.html#/login')
          ];
          tabs.forEach(tab => {
            if (tab.url && urls.some(u => tab.url.startsWith(u))) {
              chrome.tabs.remove(tab.id);
            }
          });
        });
        // 通知用户
        chrome.notifications.create({
          type: 'basic',
          iconUrl: 'icon-128.png',
          title: '已退出',
          message: '您已退出登录'
        });
        // 可选：自动打开登录页
        chrome.tabs.create({
          url: chrome.runtime.getURL('index.html#/login')
        });
      });
    }
  });
}); 
// 监听来自前端页面的消息，打开所有页面
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'openTabs' && Array.isArray(message.tabs)) {
    const urls = message.tabs.map(t => t.url).filter(Boolean);
    if (urls.length) {
      chrome.windows.create({ url: urls, focused: true });
    }
  }
});