# TabSyncer

[查看中文版](README.md) | [View in English](doc/README.en.md)

[![官方网站](https://img.shields.io/badge/Official%20Website-Open-16A34A)](https://www.joker.blue/tab/website)
[![Chrome Web Store](https://img.shields.io/badge/Chrome%20Web%20Store-Install-4285F4?logo=googlechrome&logoColor=white)](https://chromewebstore.google.com/detail/tabsyncer/ngfhokcebemclkfagnkgfficddkmcoim?hl=zh-CN&utm_source=tabsyncer-readme)
[![Chrome Web Store Version](https://img.shields.io/chrome-web-store/v/ngfhokcebemclkfagnkgfficddkmcoim?label=version)](https://chromewebstore.google.com/detail/tabsyncer/ngfhokcebemclkfagnkgfficddkmcoim?hl=zh-CN&utm_source=tabsyncer-readme)
[![版本说明](https://img.shields.io/badge/Version%20Notes-View-64748B)](doc/VERSION.zh.md)

TabSyncer 是一套围绕浏览器工作现场的 Chrome 扩展工具。它不只是把标签页保存成快照，而是把「打开浏览器后的入口」「当前已打开 Tab 的整理」「历史快照的保存与维护」「跨设备继续工作」串成一个完整闭环。

核心使用路径是：在 NewTab 进入工作区，用 Tabout 整理当前已经打开的 Tab，把值得保留的上下文保存为快照，再到首页用快照列表和分组持续管理这些工作资料。

---

## 核心能力

1. **用 NewTab 承接每日工作入口**

   在新标签页集中放置常用链接、快照入口和继续工作提示，支持保存任意链接。还可以查看最近关闭的窗口和标签页，预览后快速恢复工作状态。

2. **整理当前打开的 Tab**

   通过 Tabout 查看、筛选和整理当前浏览器里的标签页，处理重复页面、相似域名和分组，再把整理结果保存下来。

3. **保存浏览器工作现场**

   支持保存当前标签页、当前窗口、所有窗口，或按窗口拆分保存，把临时打开的一组页面沉淀为可回访的快照。

4. **管理并持续维护快照**

   对快照进行分组、搜索、恢复和补充网页，让快照从一次性存档变成可持续维护的项目上下文。

5. **在多设备间继续工作上下文**

   登录同一账号后，让快照和工作上下文在办公室电脑、家里电脑、笔记本等设备间同步和继续使用。

## 产品工作流

### 1. 从 NewTab 进入工作现场

TabSyncer 可以接管 Chrome 新标签页，把常用链接、快照入口、继续工作提示、最近关闭记录和当前窗口整理入口集中在一起。你可以预览最近关闭的窗口或标签页，并快速恢复工作状态。常用网页和工作入口也可以保存为更清晰的快捷入口。

![NewTab 工作入口](resource/newtab.png)

### 2. 用 Tabout 整理当前打开的 Tab

当浏览器越用越乱时，可以从 NewTab 进入 Tabout，查看当前窗口和其他窗口中的标签页，按窗口、分组、相似域名和重复页面整理，再决定哪些需要保留。

![Tabout 当前 Tab 管理](resource/tabout.png)

### 3. 保存并管理快照

整理后的标签页可以保存为快照。保存之后，可以在首页按全部、临时、分组、垃圾箱查看，也可以搜索、重命名、合并、恢复，或者继续向已有快照补充网页。

![快照管理](resource/home.png)

## 辅助能力

- **导入 Chrome 书签**：把已有资料带入 TabSyncer，作为整理起点。
- **导出快照到本地**：用于备份、迁移和离线保存。
- **关联图谱回看历史**：从关系视角找回相关快照和上下文。
- **快捷入口增强**：为常用网页和工作入口配置更清晰的入口与图标。
- **垃圾箱恢复**：误删快照后支持单个或批量恢复。
- **多语言界面**：覆盖主要操作、弹窗和界面提示。

关联图谱示例：

![快照关联图谱](resource/contextgraph.png)

---

## 使用场景

1. **跨设备继续工作**

   在办公室保存一组工作标签页，回到家后登录同一账号即可恢复，不用重新逐个查找。

2. **保存项目资料现场**

   把文档、控制台、测试环境、代码仓库、设计稿保存为项目快照，后续继续补充和整理。

3. **每天从 NewTab 开始工作**

   把常用网页、项目快照和待继续的工作入口放到 NewTab，打开浏览器后更快回到工作状态。

4. **当前浏览器太乱**

   打开 NewTab 的 Tabout 整理当前已打开的标签页，关闭重复页，把值得保留的内容沉淀成快照。

5. **回看历史上下文**

   在首页按分组查找快照，或进入关联图谱，从关系视角找回过去保存的资料。

---

## 安装方式

### 方式一：Chrome Web Store 直接安装

推荐直接从 Chrome Web Store 添加：

[TabSyncer - Chrome Web Store](https://chromewebstore.google.com/detail/tabsyncer/ngfhokcebemclkfagnkgfficddkmcoim)

### 方式二：安装发布包

1. 打开仓库发布页或直接下载仓库中的 `TabSyncer.zip`
2. 解压 `TabSyncer.zip`
3. 在 Chrome 中打开 `chrome://extensions/`
4. 打开“开发者模式”
5. 选择“加载已解压的扩展程序”
6. 选择解压后的扩展目录

### 方式三：访问 Web 管理端

如果只是临时查看或管理快照，也可以直接访问：

[https://www.joker.blue/tab/main](https://www.joker.blue/tab/main)

---

## 反馈

如有问题、建议或使用反馈，欢迎提交 issue 或 PR。

---

## 版本说明

历史版本说明可见 [doc/VERSION.zh.md](doc/VERSION.zh.md)。

---

## 加入交流群

欢迎加入 TabSyncer QQ 交流群，一起交流使用体验、反馈问题和功能建议。群内也会提前同步 beta 版本体验信息，适合愿意一起打磨浏览器工作流的朋友。

![TabSyncer QQ 交流群](resource/qq.png)
