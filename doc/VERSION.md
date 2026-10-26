
[View in Chinese](VERSION.zh.md) | [View in English](VERSION.md)
# TabSyncer Version Introduction

# Version v0.7.0

### Highlights

- Redesigned NewTab search to improve URL handling, keyword searches, and search suggestions
- Added support for creating empty snapshots on the Web and improved saving and retry behavior for snapshots with empty tabs
- Added snapshot deduplication and improved the merge flow for more efficient snapshot organization
- Improved snapshot name recognition and shortcut associations for a smoother snapshot management experience
- Improved home-page snapshot recommendations and candidate loading for better relevance, responsiveness, and stability
- Optimized on-demand page resource loading to improve the experience across the home page, NewTab, and snapshot management pages
- Remembered the most recently used sign-in method to reduce repeated setup

### Fixes & Improvements

- Improved sign-in state persistence and automatic renewal to reduce interruptions and repeated sign-ins
- Improved navigation consistency across the extension and Web versions
- Improved synchronization of snapshot creation, opening, and favorite states
- Improved recommendation and search interaction handling for a more reliable experience in edge cases
- Improved handling of empty snapshots and duplicate content for more stable snapshot operations

---

# Version v0.6.5

### Highlights

- Added recovery for recently closed windows and tabs, with previews before restoring work
- Improved snapshot merging with selectable primary snapshots and synchronized names, groups, shortcuts, and related state
- Improved home-page snapshot recommendations and candidate selection for more relevant results
- Improved snapshot collection state detection and synchronization, including compatibility with historical collection data
- Improved snapshot management with paginated trash snapshots and clearer time display in snapshot lists

### Fixes & Improvements

- Improved automatic login-state renewal to reduce authentication errors and repeated sign-ins caused by concurrent requests
- Fixed recommendation service errors being incorrectly treated as expired login sessions
- Fixed inconsistent behavior when opening recommended snapshots with Ctrl/Command and other modifier keys
- Fixed collection state refresh and concurrent update synchronization issues
- Fixed shortcut associations being lost after merging snapshots

---

## Version v0.6.0 

### Highlights

- Improved Tabout with a clearer distinction between the tab-based Keep area and content-based Collections
- Added support for collapsing the right-side organization panel and improved search, highlighting, duplicate detection, and closing actions
- Redesigned the extension popup with quick actions for saving different tab ranges and opening the workspace, tab organizer, or snapshot manager
- Added customizable popup shortcuts, with sign-in and quick trial options for signed-out users
- Improved the “Continue directly” sign-in flow so users can start immediately after switching to it

### Fixes & Improvements

- Strengthened close protection for the current extension page, pinned tabs, and retained tabs
- Fixed state synchronization after tabs are opened, closed, or reopened
- Improved restoration of unfinished organization sessions and real-time tab updates
- Improved cross-window duplicate detection and “Close others” behavior
- Fixed New Tab shortcuts being lost after merging snapshots
- Improved context menu actions, localization, and operation feedback
- 
## Version 0.5.5

### Highlights
- **Brand-new Resource Discovery page** for browsing curated themes and resources
- Added workspace entry on the home page with improved two-way navigation between newtab and home
- Settings and user account entries moved into the NavBar dropdown menu for a cleaner interface
- Extension-only features in the web version now show a disabled tooltip to reduce accidental interactions
- Added version changelog view so users can review update history at any time

### Fixes and Improvements
- Improved GitHub login redirect feedback — failed login now correctly navigates to the error page with complete i18n copy
- Enhanced interaction experience for expanding snapshot tab lists
- Unified navigation routing logic under NavBar management for improved stability

---

## Version 0.5.0

### Hightlights

- Optimized new tab search suggestions with quick search engine switching and smoother search engine interaction
- Tabout tab organizer now identifies the current page, automatically marks it, and prevents accidental closure
- Reduced bundle size

### Fixes and Improvements

- Fixed new tab page white screen on startup and redundant full-index sync for search
- Improved search suggestion display and URL parsing accuracy
- Enhanced backend API consistency and stability

## Version 0.4.5
### Hightlights
- Custom icons are supported for quick access on the new tab page.
- The snapshot feature has been enhanced with a notes function.
- Improved UI effects on the page.
- Fixed known issues.

---

## Version 0.4.0
### Highlights
- Added support for saving arbitrary links and opening them from shortcuts, making NewTab more useful for daily websites and work entries.
- Added support for saving intranet icon URLs, so internal systems, private services, and local tools can use more accurate shortcut icons.

### Experience Improvements
- Improved NewTab shortcut interactions for smoother access to frequent links and snapshot entries.
- Refined the quick-open dialog and add-entry dialog effects on the new tab page.

### Fixes and Improvements
- Fixed state cleanup issues in the tab organization drawer for a more stable Tabout workflow.
- Fixed an issue where users migrated to UUID accounts could not sign in with a password.

---

## Version 0.3.5
### Highlights
- Brand new UUID account system that provides a lighter and clearer login and account management experience.
- Automatic following of browser language support, with the option to manually select language in settings.
- Optimized stability of Tabout group sorting and consistency of waterfall flow display.
- New users will have the new tab workspace enabled by default.

### Fixes and Improvements
- Fixed issues related to snapshots, grouping, sidebar counts, and graph filtering.
- Strengthened data operation permission protection and interface parameter verification.
- Improved the stability of tag organization, snapshot management, and page state synchronization.

---

## Version 0.3.0
### Highlights
- Added support for importing Chrome bookmarks
- Added support for exporting snapshots to local files
- Other optimizations

---

## Version 0.2.5
### Highlights
- NewTab now lets you continue unfinished grouping work and restore tabs that were closed during the previous session
- Snapshot shortcuts can detect the same page that is already open and provide direct "Opened / Jump to" actions
- The relationship graph can now be displayed directly on the home page for smoother snapshot revisit workflows
- Improved multi-language support across NewTab, Tabout, and the relationship graph

---

## Version 0.2.0
TabSyncer v0.2.0 was a major update. It was no longer just a snapshot list tool, but a more complete workflow built around current browser work, long-term snapshots, and contextual relationships.

### Highlights
- Added the NewTab home entry and turned the new tab page into the TabSyncer workspace
- Added Tabout for managing currently open browser tabs
- Added a richer home snapshot list and grouped views for long-term organization and retrieval
- Added the knowledge graph / relationship graph to explore contextual links between snapshots and pages
- Added GitHub sign-in as a foundation for the account system, data sync, and multi-device workflows

---

## Version 0.0.3
### Major Optimizations
- Interaction experience and snapshot list feature upgrades

### Feature & Experience Upgrades
- **Merge Snapshot Default Name Optimization**: When merging multiple snapshots, the merge dialog's name input will auto-fill with the first named snapshot, making the operation more convenient.
- **Improved Snapshot Renaming**: After renaming a snapshot, the list updates the name locally without a full refresh for a smoother experience.
- **Delete Tab Confirmation**: Added a confirmation dialog when deleting tabs within a snapshot to prevent accidental deletion, with multi-language support.
- **Enhanced Multi-language Support**: New dialogs (such as delete tab confirmation) now support Chinese, English, Russian, etc.
- **Snapshot List Loading Animation Optimization**: On refresh or first load, the snapshot list area shows a loading animation consistent with the empty state style. The animation supports custom images and fun tips for a better waiting experience.
- **Less Prominent 'Load More' Button**: The 'Load More' button is visually lighter, less distracting but still clickable, avoiding competition with main content. The 'Loading' button matches the style and is less prominent but still recognizable when disabled.

---

## Version 0.0.2
### New Features
- **Snapshot Search**
  - Support searching snapshots by name, tag, or URL for quick access

### UI Improvements
- Improved interaction experience

### Bug Fixes
- Fixed known issues

---

## Version 0.0.1
### New Features
- **Snapshot Configuration**
  - Added snapshot saving configuration options
  - Enhanced snapshot management flexibility

### UI Improvements
- **Snapshot Dialog**
  - Optimized snapshot saving dialog style
  - Improved user interaction experience

### Bug Fixes
- Fixed known issues
- Enhanced overall stability

---

## Version 0.0.0

### Core Features
- **Tab Snapshot System**
  - One-click save for all open tabs
  - Support for current tab, current window, and all windows
  - Cloud synchronization across devices
  - Automatic backup and recovery

### Management Features
- **Smart Grouping System**
  - Custom group creation and management
  - Recycle bin for deleted snapshots
  - Batch operations support
  - Flexible snapshot organization

### User Experience
- **Cross-Platform Support**
  - Multi-device synchronization
  - Web-based management interface
  - Chrome extension integration
  - Email-based authentication

### Technical Highlights
- **Advanced Features**
  - Complete i18n support
  - Batch operations for efficiency
  - Smart recovery system
  - Cloud-based synchronization

### Security & Privacy
- **Account System**
  - Email verification
  - Secure cloud storage
  - Privacy-focused design
  - Data encryption

### Accessibility
- **User-Friendly Interface**
  - Intuitive management system
  - Quick access to features
  - Clear visual feedback
  - Responsive design

---
