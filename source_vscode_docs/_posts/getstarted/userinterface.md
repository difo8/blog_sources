---
title: userinterface
date: 2021-11-29 21:26:39
tags:
---
# User Interface——用户界面

At its heart, Visual Studio Code is a code editor. Like many other code editors, VS Code adopts a common user interface and layout of an explorer on the left, showing all of the files and folders you have access to, and an editor on the right, showing the content of the files you have opened.

本质上，VSCode是一个代码编辑器。像其他代码编辑器一样，VSCode采用了一个通用的用户界面和左侧资源管理器布局（展示了所有的你可以访问的文件和文件夹），右侧的编辑器（展示了你已经打开的文件的内容）。

![code basics hero](hero.png)

## Basic Layout——基本布局

VS Code comes with a simple and intuitive layout that maximizes the space provided for the editor while leaving ample room to browse and access the full context of your folder or project. The UI is divided into five areas:

VSCode带有简单且直观的布局，可以最大化的给编辑器提供空间，同时给浏览和访问文件夹或工程的完整上下文留下足够的空间。UI分为了5个区域：

* **Editor** - The main area to edit your files. You can open as many editors as you like side by side vertically and horizontally.
  **编辑器** - 编辑文件的主要区域。你可以同时竖直地活着水平地打开任意你想打开数量的编辑器。
* **Side Bar** - Contains different views like the Explorer to assist you while working on your project.
  **侧边栏** - 包含了类似于资源管理器的不同的视图,在处理你的项目时来帮助你。
* **Status Bar** - Information about the opened project and the files you edit.
  **状态栏** - 关于打开的工程和你编辑的文件的信息。
* **Activity Bar** -  Located on the far left-hand side, this lets you switch between views and gives you additional context-specific indicators, like the number of outgoing changes when Git is enabled.
  **活动栏** - 位于最左侧，这使你可以在视图之间切换并提供额外的指定上下文的指示器，如当Git开启时显示出来的修改数量。
* **Panels** - You can display different panels below the editor region for output or debug information, errors and warnings, or an integrated terminal. Panel can also be moved to the right for more vertical space.
  **面板** - 你可以在编辑器区域的底部显示不同的面板，来显示输出或调试信息（错误和警告）或集成终端。面板也可以移动到右边来获取更多竖直空间。

Each time you start VS Code, it opens up in the same state it was in when you last closed it. The folder, layout, and opened files are preserved.

每次打开VSCode时，将打开你最后一次关闭时的状态。文件夹，布局和打开的文件会被保存。

Open files in each editor are displayed with tabbed headers (Tabs) at the top of the editor region. To learn more about tabbed headers, see the [Tabs](/vscode_docs/getstarted/userinterface#tabs) section below.

每个编辑器中打开的文件显示都带有编辑器顶部区域的标签。了解更多的标签可以查看[标签](/vscode_docs/getstarted/userinterface#tabs)。

>**Tip:** You can move the Side Bar to the right hand side (**View** > **Move Side Bar Right**) or toggle its visibility (`⌘B`).

>**提示** 你可以移动侧边栏到右侧（**视图** > **移动侧边栏到右边**）或者切换是否显示（`⌘B`）。

## Side by side editing——并列编辑

You can open as many editors as you like side by side vertically and horizontally. If you already have one editor open, there are multiple ways of opening another editor to the side of the existing one:

你可以竖直地和水平地同时打开任意数量的编辑器。如果你已经打开了一个编辑器，有多种方法可以在已存在的编辑器侧边打开另一个。

* `Alt` click on a file in the Explorer.
  `Alt` 在资源管理器中点击文件。
* `⌘\` to split the active editor into two.
  `⌘\` 将活跃的编辑器一分为二。
* **Open to the Side** (`⌃Enter`) from the Explorer context menu on a file.
  **打开到侧边**（`⌃Enter`）来自于文件的资源管理器上下文菜单。
* Click the **Split Editor** button in the upper right of an editor.
  点击编辑器右上角的*划分编辑器*按钮。
* Drag and drop a file to any side of the editor region.
  拖动文件放到编辑器区域的任意侧边。
* `Ctrl+Enter` (macOS: `Cmd+Enter`) in the **Quick Open** (`⌘P`) file list.
  在**快速打开**（`⌘P`）文件列表中，`Ctrl+Enter` (macOS: `Cmd+Enter`)

![并列编辑](sidebyside.png)

Whenever you open another file, the editor that is active will display the content of that file. So if you have two editors side by side and you want to open file 'foo.cs' into the right-hand editor, make sure that editor is active (by clicking inside it) before opening file 'foo.cs'.

无论何时打开又一个文件，活跃的编辑器将显示那个文件的内容。所以如果你有并列的两个编辑器，且你想打开`foo.cs`文件到右侧，确保在打开`foo.cs`文件前编辑器是活跃的（通过在其中点击）。

By default editors will open to the right-hand side of the active one. You can change this behavior through the setting `workbench.editor.openSideBySideDirection` and configure to open new editors to the bottom of the active one instead.

编辑器默认打开在活跃编辑器的右侧。你可以通过设置`workbench.editor.openSideBySideDirection`来修改这个行为，配置为打开新编辑器到活跃编辑器的底部。

When you have more than one editor open you can switch between them quickly by holding the `Ctrl` (macOS: `Cmd`) key and pressing `1`, `2`, or `3`.

当你有超过1个打开的编辑器时，你可以通过按住`Ctrl` (macOS: `Cmd`) 并按`1`, `2`, or `3`在它们之间快速切换。

>**Tip:** You can resize editors and reorder them. Drag and drop the editor title area to reposition or resize the editor.
>**提示** 你可以调整编辑器大小并重新排序。拖动并放置编辑器标题区域来重新定位或调整编辑器大小。

## Minimap——小地图

A Minimap (code outline) gives you a high-level overview of your source code, which is useful for quick navigation and code understanding. A file's minimap is shown on the right side of the editor. You can click or drag the shaded area to quickly jump to different sections of your file.

小地图（代码概览）提供一个源代码的高级总览，这对于快速导航和理解代码有用。一个文件的小地图展示在编辑器的右侧。你可以点击或拖动阴影区域来快速跳转到文件的不同部分。

![小地图](minimap.png)

>**Tip:** You can move the minimap to the left hand side or disable it completely by respectively setting `"editor.minimap.side": "left"` or `"editor.minimap.enabled": false` in your user or workspace [settings](/vscode_docs/getstarted/settings).

>**提示：** 你可以分别在用户或工作空间[设置](/vscode_docs/getstarted/settings)中分别设置`"editor.minimap.side": "left`或`"editor.minimap.enabled": false`，来移动小地图到左侧或者完全禁止它。

### Indent Guides——缩进引导

The image above also shows indentation guides (vertical lines) which help you quickly see matching indent levels. If you would like to disable indent guides, you can set `"editor.renderIndentGuides": false` in your user or workspace [settings](/vscode_docs/getstarted/settings).

上面的图片也展示了索引引导（竖直线），这可以帮助你快速查看匹配的缩进等级。如果你想禁止缩进引导，你可以在用户或者工作空间[设置](/vscode_docs/getstarted/settings)中设置`"editor.renderIndentGuides": false`。

## Breadcrumbs——面包屑

The editor has a navigation bar above its contents called [Breadcrumbs](https://en.wikipedia.org/wiki/Breadcrumb_(navigation)). It shows the current location and allows you to quickly navigate between folders, files, and symbols.

编辑器上面有一个导航栏，它的内容叫做[面包屑](https://en.wikipedia.org/wiki/Breadcrumb_(navigation))。它展示了当前的位置并允许你快速在文件夹、文件和符号之间跳转。

![面包屑](breadcrumbs.png)

Breadcrumbs always show the file path and if the current file type has language support for symbols, the symbol path up to the cursor position. You can disable breadcrumbs with the **View** > **Show Breadcrumbs** toggle command. For more information about the breadcrumbs feature, such as how to customize their appearance, see the [Breadcrumbs](/vscode_docs/setup/editingevolved#breadcrumbs) section of the [Code Navigation](/vscode_docs/setup/editingevolved) article.

面包屑总是展示文件路径，如果当前的文件类型有语言符号支持，这些符号路径指到了光标的位置。你可以使用**视图** > **展示面包屑**切换命令来禁止面包屑。对于更多关于面包屑功能的信息，如怎么自定义外观，查看[代码导航](/vscode_docs/setup/editingevolved)文章中的[面包屑](/vscode_docs/setup/editingevolved#breadcrumbs)部分。

## Explorer——资源管理器

The Explorer is used to browse, open, and manage all of the files and folders in your project. VS Code is file and folder based - you can get started immediately by opening a file or folder in VS Code.

资源管理器用于浏览，打开和管理工程里的所有文件和文件夹。VSCode是基于文件和文件夹的——你可以通过在VSCode中打开文件或文件夹立即开始。

After opening a folder in VS Code, the contents of the folder are shown in the Explorer. You can do many things from here:

在VSCode中打开文件夹后，文件夹的内容会展示在资源管理器中。你可以参考这里做许多事情：

* Create, delete, and rename files and folders.
  创建、删除和重命名文件和文件夹。
* Move files and folders with drag and drop.
  使用拖放来移动文件和文件夹。
* Use the context menu to explore all options.
  使用上下文菜单来浏览所有的选项。

>**Tip:** You can drag and drop files into the Explorer from outside VS Code to copy them (if the explorer is empty VS Code will open them instead)

>**提示：** 你可以从VSCode外部拖放文件到资源管理器中以复制它们（如果资源管理器你是空的，VSCode将用打开来代替）

![资源管理器菜单](explorer_menu.png)

VS Code works very well with other tools that you might use, especially command-line tools. If you want to run a command-line tool in the context of the folder you currently have open in VS Code, right-click the folder and select **Open in Command Prompt** (or **Open in Terminal** on macOS or Linux).

VSCode在使用其他的你可能使用的工具时非常好用，尤其是命令行工具。如果你想在当前在VSCode中打开的文件夹的上下文中运行命令行工具，在文件夹中右键并选择**在命令提示符中打开**（macOS或Linux上为**在终端中打开**）。

You can also navigate to the location of a file or folder in the native Explorer by right-clicking on a file or folder and selecting **Reveal in Explorer** (or **Reveal in Finder** on macOS or **Open Containing Folder** on Linux).

你也可以跳到本地资源管理器中文件或文件夹的位置，方法是在文件或文件夹上右击并选择**Reveal in explorer**（或macOS上的**Reveal in Finder**或Linux上的**Open Containing Folder**）。

>**Tip:** Type `⌘P` (**Quick Open**) to quickly search and open a file by its name.

>**提示：** 输入`⌘P`（**快速打开**）来通过名字快速搜索并打开一个文件。

By default, VS Code excludes some folders from the Explorer (for example. `.git`). Use the `files.exclude` [setting](/vscode_docs/getstarted/settings) to configure rules for hiding files and folders from the Explorer.

VSCode默认排除一些来自资源管理器的文件夹（如`.git`）。使用`files.exclude`[设置](/vscode_docs/getstarted/settings)来配置隐藏来自资源管理器的文件和文件夹的规则。

>**Tip:** This is really useful to hide derived resources files, like `\*.meta` in Unity, or `\*.js` in a TypeScript project. For Unity to exclude the `\*.cs.meta` files, the pattern to choose would be: `"**/*.cs.meta": true`. For TypeScript, you can exclude generated JavaScript for TypeScript files with: `"**/*.js": {"when": "$(basename).ts"}`.

>**提示：** 这对于隐藏派生的资源文件特别有用，如Unity中的`\*.meta`或TypeScript工程中的`\*.js`。对于Unity要排除`\*.cs.meta`文件，选择的模式应为：`"**/*.cs.meta": true`。对于TypeScript，你可以使用：`"**/*.js": {"when": "$(basename).ts"}`来排除TypeScript生成的JavaScript。

### Multi-selection——多重选择

You can select multiple files in the **File Explorer** and **OPEN EDITORS** view to run actions (Delete, Drag and Drop, Open to the Side) on multiple items. Use the `Ctrl/Cmd` key with `click` to select individual files and `Shift` + `click` to select a range. If you select two items, you can now use the context menu **Compare Selected** command to quickly diff two files.

你可以在**文件资源管理器**和**打开编辑器**视图中选择多个文件来在多个条目上执行动作（删除、拖放、打开到侧边）。使用`Ctrl/Cmd`加`click`选择单独的文件，使用`Shift` + `click`可选择一个范围。如果你选择了两个条目，现在你可以使用上下文菜单**比较所选**命令来快速比较两个文件。

**Note:** In earlier VS Code releases, clicking with the `Ctrl/Cmd` key pressed would open a file in a new Editor Group to the side. If you would still like this behavior, you can use the `workbench.list.multiSelectModifier` setting to change multi-selection to use the `Alt` key.

**注意：** 在早期的VSCode版本中，按`Ctrl/Cmd`键加点击将打开新编辑器组中的文件到侧边。如果你仍然想要这种行为，你可以使用`workbench.list.multiSelectModifier`设置来修改多重选择为使用`Alt`键。

```json
"workbench.list.multiSelectModifier": "alt"
```

### Filtering the document tree——过滤文档树

You can type to filter the currently visible files in the **File Explorer**. With the focus on the **File Explorer** start to type part of the file name you want to match. You will see a filter box in the top-right of the **File Explorer** showing what you have typed so far and matching file names will be highlighted. When you press the cursor keys to move up and down the file list, it will jump between matching files or folders.

你可以在**文件资源管理器**中输入以过滤当前可见的文件。聚焦于**文件资源管理器**，同时开始输入你想要匹配的文件名的一部分。你将在**文件资源管理器**的右上角看到一个过滤盒，展示了迄今为止你输入的内容，且匹配的文件名将高亮显示。当你按光标键来向上或向下移动文件列表时，它将在匹配的文件或文件夹之间跳转。

Hovering over the filter box and selecting **Enable Filter on Type** will show only matching files/folders. Use the 'X' **Clear** button to clear the filter.

悬停在过滤盒上并选择**开启类型过滤**将只展示匹配的文件/文件夹。使用'X'**清除**按钮来清除过滤。

![在文件资源管理器中过滤文件](file-explorer-filter.png)

### Outline view——大纲视图

The Outline view is a separate section in the bottom of the File Explorer. When expanded, it will show the symbol tree of the currently active editor.

大纲视图是文件资源管理器底部单独的部分。当展开时，它将展示当前活动的编辑器的符号树。

![大纲视图](outline-view.png)

The Outline view has different **Sort By** modes, optional cursor tracking, and supports the usual open gestures. It also includes an input box which finds or filters symbols as you type. Errors and warnings are also shown in the Outline view, letting you see at a glance a problem's location.

大纲视图有不同的**排序**模式，可选的光标追踪，支持常见打开姿态。它也包括一个输入框，可以在你输入时发现或过滤符号。错误和警告也被展示在大纲视图中，使得你可以快速定位问题。

For symbols, the view relies on information computed by your installed extensions for different file types. For example, the built-in Markdown support returns the Markdown header hierarchy for a Markdown file's symbols.

对于符号，这个视图依赖于你安装的扩展对于不同的文件类型所计算的信息。比如，内置的Markdown支持返回Markdown头的层级来支持Markdown文件的符号。

![Markdown大纲视图](markdown-outline-view.png)

There are several Outline view [settings](/vscode_docs/getstarted/settings) which allow you to enable/disable icons and control the errors and warnings display (all enabled by default):

一些大纲视图[设置]()允许你开启/关闭图标，开启/关闭控制错误和警告的显示（所有都默认开启）：

* `outline.icons` - Toggle rendering outline elements with icons.
  `outline.icons` - 开关显示带图标的大纲元素。
* `outline.problems.enabled` - Show errors and warnings on outline elements.
  `outline.problems.enabled` - 展示大纲元素中的错误和警告。
* `outline.problems.badges` - Toggle using badges for errors and warnings.
  `outline.problems.badges` - 开关使用错误和警告的徽章。
* `outline.problems.colors` - Toggle using colors for errors and warnings.
  `outline.problems.colors` - 开关使用错误和警告的颜色。

## Open Editors——打开编辑器

At the top of the Explorer is a view labeled **OPEN EDITORS**. This is a list of active files or previews. These are files you previously opened in VS Code that you were working on. For example, a file will be listed in the **OPEN EDITORS** view if you:

在资源管理器顶部有一个标记为**打开编辑器**的视图。

* Make a change to a file.
* Double-click a file's header.
* Double-click a file in the Explorer.
* Open a file that is not part of the current folder.

Just click an item in the **OPEN EDITORS** view, and it becomes active in VS Code.

Once you are done with your task, you can remove files individually from the **OPEN EDITORS** view, or you can remove all files by using the **View: Close All Editors** or **View: Close All Editors in Group** actions.

## Views

The File Explorer is just one of the Views available in VS Code. There are also Views for:

* **Search** - Provides global search and replace across your open folder.
* **Source Control** - VS Code includes Git source control by default.
* **Run** - VS Code's Run and Debug View displays variables, call stacks, and breakpoints.
* **Extensions** - Install and manage your extensions within VS Code.
* **Custom views** - Views contributed by extensions.

> **Tip:** You can open any view using the **View: Open View** command.

![views](images/userinterface/views.png)

You can show or hide views from within the main view and also reorder them by drag and drop.

![view management](images/userinterface/view-management.png)

### Activity Bar

The **Activity Bar** on the left lets you quickly switch between Views. You can also reorder Views by dragging and dropping them on the **Activity Bar** or remove a View entirely (right click **Hide from Activity Bar**).

![activity bar context menu](images/userinterface/activity-bar-context-menu.png)

## Command Palette

VS Code is equally accessible from the keyboard. The most important key combination to know is `kb(workbench.action.showCommands)`, which brings up the **Command Palette**. From here, you have access to all of the functionality of VS Code, including keyboard shortcuts for the most common operations.

![Command Palette](images/userinterface/commands.png)

The **Command Palette** provides access to many commands. You can execute editor commands, open files, search for symbols, and see a quick outline of a file, all using the same interactive window. Here are a few tips:

* `kb(workbench.action.quickOpen)` will let you navigate to any file or symbol by typing its name
* `kb(workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup)` will cycle you through the last set of files opened
* `kb(workbench.action.showCommands)` will bring you directly to the editor commands
* `kb(workbench.action.gotoSymbol)` will let you navigate to a specific symbol in a file
* `kb(workbench.action.gotoLine)` will let you navigate to a specific line in a file

Type `?` into the input field to get a list of available commands you can execute from here:

![Quick Open Help](images/userinterface/quickopenhelp.png)

## Configuring the editor

VS Code gives you many options to configure the editor. From the **View** menu, you can hide or toggle various parts of the user interface, such as the **Side Bar**, **Status Bar**, and **Activity Bar**.

### Hide the Menu Bar (Windows, Linux)

You can hide the Menu Bar on Windows and Linux by changing the setting `window.menuBarVisibility` from `classic` to `toggle`. A setting of `toggle` means that a single press of the `kbstyle(Alt)` key will show the Menu Bar again.

You can also hide the Menu Bar on Windows and Linux with the **View** > **Toggle Menu Bar** command. This command sets `window.menuBarVisibility` from `classic` to `compact`, resulting in the Menu Bar moving into the Activity Bar. To return the Menu Bar to the `classic` position, you can execute the **View** > **Toggle Menu Bar** command again.

### Settings

Most editor configurations are kept in settings which can be modified directly. You can set options globally through user settings or per project/folder through workspace settings. Settings values are kept in a `settings.json` [file](/docs/getstarted/settings.md#settings-file-locations).

* Select **File** > **Preferences** > **Settings** (or press `kb(workbench.action.openSettings)`) to edit the user `settings.json` file.
* To edit workspace settings, select the **WORKSPACE SETTINGS** tab to edit the workspace `settings.json` file.

>**Note for macOS users:** The **Preferences** menu is under **Code** not **File**. For example, **Code** > **Preferences** > **Settings**.

![workspace settings](images/userinterface/workspace-settings.png)

You will see the VS Code [Default Settings](/docs/getstarted/settings.md#default-settings) in the left window and your editable `settings.json` on the right. You can easily filter settings in the `Default Settings` using the search box at the top. Copy a setting over to the editable `settings.json` on the right by clicking on the edit icon to the left of the setting. Settings with a fixed set of values allow you to pick a value as part of their edit icon menu.

After editing your settings, type `kb(workbench.action.files.save)` to save your changes. The changes will take effect immediately.

>**Note:** Workspace settings will override User settings and are useful for sharing project specific settings across a team.

### Zen Mode

Zen Mode lets you focus on your code by hiding all UI except the editor (no Activity Bar, Status Bar, Side Bar and Panel), going to full screen and centering the editor layout. Zen mode can be toggled using **View** menu, **Command Palette** or by the shortcut `kb(workbench.action.toggleZenMode)`. Double `kbstyle(Esc)` exits Zen Mode. The transition to full screen can be disabled via `zenMode.fullScreen`. Zen Mode can be further tuned by the following settings: `zenMode.hideStatusBar`, `zenMode.hideTabs`, `zenMode.fullScreen`, `zenMode.restore`, and `zenMode.centerLayout`.

### Centered editor layout

Centered editor layout allows you to center align the editor area. This is particularly useful when working with a single editor on a large monitor. You can use the sashes on the side to resize the view (hold down the `Alt` key to independently move the sashes).

## Tabs

Visual Studio Code shows open items with Tabs (tabbed headings) in the title area above the editor.

When you open a file, a new Tab is added for that file.

![tabs hero](images/userinterface/tabs-hero.png)

Tabs let you quickly navigate between items and you can Drag and Drop Tabs to reorder them.

When you have more open items than can fit in the title area, you can use the **Show Opened Editors** command (available through the `...` More button) to display a dropdown list of tabbed items.

If you don't want to use Tabs, you can disable the feature by setting the `workbench.editor.showTabs` [setting](/docs/getstarted/settings.md) to false:

```json
    "workbench.editor.showTabs": false
```

See the section below to optimize VS Code when [working without Tabs](/docs/getstarted/userinterface.md#working-without-tabs).

### Tab ordering

By default, new Tabs are added to the right of the existing Tabs but you can control where you'd like new Tabs to appear with the `workbench.editor.openPositioning` setting.

For example, you might like new tabbed items to appear on the left:

```json
    "workbench.editor.openPositioning": "left"
```

## Preview mode

When you single-click or select a file in the Explorer, it is shown in a preview mode and reuses an existing Tab. This is useful if you are quickly browsing files and don't want every visited file to have its own Tab. When you start editing the file or use double-click to open the file from the Explorer, a new Tab is dedicated to that file.

Preview mode is indicated by italics in the Tab heading:

![preview mode](images/userinterface/preview-tab.png)

If you'd prefer to not use preview mode and always create a new Tab, you can control the behavior with these settings:

* `workbench.editor.enablePreview` to globally enable or disable preview editors
* `workbench.editor.enablePreviewFromQuickOpen` to enable or disable preview editors when opened from **Quick Open**

## Editor Groups

When you split an editor (using the **Split Editor** or **Open to the Side** commands), a new editor region is created which can hold a group of items. You can open as many editor regions as you like side by side vertically and horizontally.

You can see these clearly in the **OPEN EDITORS** section at the top of the Explorer view:

![tabs editor groups](images/userinterface/tabs-editor-groups.png)

You can Drag and Drop editor groups on the workbench, move individual Tabs between groups and quickly close entire groups (**Close All**).

>**Note:** VS Code uses editor groups whether or not you have enabled Tabs.  Without Tabs, editor groups are a stack of your open items with the most recently selected item visible in the editor pane.

## Grid editor layout

By default, editor groups are laid out in vertical columns (for example when you split an editor to open it to the side). You can easily arrange editor groups in any layout you like, both vertically and horizontally:

![Grid Editor Layout](images/userinterface/grid-layout.gif)

To support flexible layouts, you can create empty editor groups. By default, closing the last editor of an editor group will also close the group itself, but you can change this behavior with the new setting `workbench.editor.closeEmptyGroups: false`:

![Grid Empty](images/userinterface/grid-empty.png)

There are a predefined set of editor layouts in the new **View** > **Editor Layout** menu:

![Grid Editor Layout Menu](images/userinterface/grid-layout-menu.png)

Editors that open to the side (for example by clicking the editor toolbar **Split Editor** action) will by default open to the right-hand side of the active editor. If you prefer to open editors below the active one, configure the new setting `workbench.editor.openSideBySideDirection: down`.

There are many keyboard commands for adjusting the editor layout with the keyboard alone, but if you prefer to use the mouse, drag and drop is a fast way to split the editor into any direction:

![Grid Editor Drag and Drop](images/userinterface/grid-dnd.gif)

>**Pro Tip**: If you press and hold the `Alt` key while hovering over the toolbar action to split an editor, it will offer to split to the other orientation. This is a fast way to split either to the right or to the bottom.

![Grid Alt Click](images/userinterface/grid-alt.gif)

### Keyboard shortcuts

Here are some handy keyboard shortcuts to quickly navigate between editors and editor groups.

>If you'd like to modify the default keyboard shortcuts, see [Key Bindings](/docs/getstarted/keybindings.md) for details.

* `kb(workbench.action.nextEditor)` go to the right editor.
* `kb(workbench.action.previousEditor)` go to the left editor.
* `kb(workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup)` open the previous editor in the editor group MRU list.
* `kb(workbench.action.focusFirstEditorGroup)` go to the leftmost editor group.
* `kb(workbench.action.focusSecondEditorGroup)` go to the center editor group.
* `kb(workbench.action.focusThirdEditorGroup)` go to the rightmost editor group.
* `kb(workbench.action.closeActiveEditor)` close the active editor.
* `kb(workbench.action.closeEditorsInGroup)` close all editors in the editor group.
* `kb(workbench.action.closeAllEditors)` close all editors.

## Working without Tabs

If you prefer not to use Tabs (tabbed headings), you can disable Tabs (tabbed headings) entirely by setting `workbench.editor.showTabs` to false.

### Disable Preview mode

Without Tabs, the **OPEN EDITORS** section of the File Explorer is a quick way to do file navigation.  With [preview editor mode](/docs/getstarted/userinterface.md#preview-mode), files are not added to the **OPEN EDITOR** list nor editor group on single-click open. You can disable this feature through the `workbench.editor.enablePreview` and `workbench.editor.enablePreviewFromQuickOpen` settings.

### Ctrl+Tab to navigate in entire editor history

You can change keybindings for `kbstyle(Ctrl+Tab)` to show you a list of all opened editors from the history independent from the active editor group.

Edit your [keybindings](/docs/getstarted/keybindings.md) and add the following:

```json
{ "key": "ctrl+tab", "command": "workbench.action.openPreviousEditorFromHistory" },
{ "key": "ctrl+tab", "command": "workbench.action.quickOpenNavigateNext", "when": "inQuickOpen" },
```

### Close an entire group instead of a single editor

If you liked the behavior of VS Code closing an entire group when closing one editor, you can bind the following in your [keybindings](/docs/getstarted/keybindings.md).

macOS:

```json
{ "key": "cmd+w", "command": "workbench.action.closeEditorsInGroup" }
```

Windows/Linux:

```json
{ "key": "ctrl+w", "command": "workbench.action.closeEditorsInGroup" }
```

## Window management

VS Code has some options to control how windows (instances) should be opened or restored between sessions.

The settings `window.openFoldersInNewWindow` and `window.openFilesInNewWindow` are provided to configure opening new windows or reusing the last active window for files or folders and possible values are `default`, `on` and `off`.

If configured to be `default`, we will make the best guess about reusing a window or not based on the context from where the open request was made. Flip this to `on` or `off` to always behave the same. For example, if you feel that picking a file or folder from the **File** menu should always open into a new window, set this to `on`.

Note: There can still be cases where this setting is ignored (for example, when using the `-new-window` or `-reuse-window` command-line option).

The `window.restoreWindows` setting tells VS Code how to restore the opened windows of your previous session. By default, VS Code will restore all windows you worked on during your previous session (setting: `all`). Change this setting to `none` to never reopen any windows and always start with an empty VS Code instance. Change it to `one` to reopen the last opened window you worked on or `folders` to only restore windows that had folders opened.

## Next steps

Now that you know the overall layout of VS Code, start to customize the editor to how you like to work by looking at the following topics:

* [Changing the Theme](/docs/getstarted/themes.md) - Set a Color and/or File Icon theme to your preference.

## Common questions

### How can I change the color of the indent guides?

The indent guide colors are customizable as are most VS Code UI elements. To [customize](/docs/getstarted/theme-color-reference.md) the indent guides color for your active color theme, use the `workbench.colorCustomizations` [setting](/docs/getstarted/settings.md) and modify the `editorIndentGuide.background` value.

For example, to make the indent guides bright blue, add the following to your `settings.json`:

```json
"workbench.colorCustomizations": {
    "editorIndentGuide.background": "#0000ff"
}
```

### Can I hide the OPEN EDITORS section in the Explorer?

Yes, you can hide the **OPEN EDITORS** list with the `explorer.openEditors.visible` [setting](/docs/getstarted/settings.md), which declares how many items to display before a scroll bar appears. Setting `"explorer.openEditors.visible": 0` will hide **OPEN EDITORS** when you have an open folder. The list will still be displayed if you are using VS Code to view individual loose files, since they won't be displayed in the folder pane.
