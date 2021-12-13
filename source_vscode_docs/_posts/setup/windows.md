---
title: windows
date: 2021-11-16 19:23:32
tags:
---
# Visual Studio Code on Windows——Windows上的VSCode

## Installation——安装

1. Download the [Visual Studio Code installer](https://go.microsoft.com/fwlink/?LinkID=534107) for Windows.
   为Windows下载[VSCode](https://go.microsoft.com/fwlink/?LinkID=534107)。
2. Once it is downloaded, run the installer (VSCodeUserSetup-{version}.exe). This will only take a minute.
   一旦下载，运行安装包（VSCodeUserSetup-{版本}.exe）。这将只花1分钟。
3. By default, VS Code is installed under `C:\users\{username}\AppData\Local\Programs\Microsoft VS Code`.
   VSCode默认被安装在`C:\users\{username}\AppData\Local\Programs\Microsoft VS Code`。

Alternatively, you can also download a [Zip archive](https://code.visualstudio.com/docs/?dv=winzip), extract it and run Code from there.

或者，你也能下载[Zip压缩包](https://code.visualstudio.com/docs/?dv=winzip)，解压并运行Code。

>**Note:** .NET Framework 4.5.2 or higher is required for VS Code. If you are using Windows 7, make sure you have at least [.NET Framework 4.5.2](https://www.microsoft.com/download/details.aspx?id=42643) installed. You can check your version of .NET Framework using this command, `reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\full" /v version` from a command prompt.

**注意：** VSCode要求.NET Framework 4.5.2或更高版本。如果你在使用Windows 7，确保你安装了[.NET Framework 4.5.2](https://www.microsoft.com/download/details.aspx?id=42643)以上。你能在命令提示符用`reg query "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\NET Framework Setup\NDP\v4\full" /v version`这个命令检查.NET Framework版本。

>**Tip:** Setup will add Visual Studio Code to your `%PATH%`, so from the console you can type 'code .' to open VS Code on that folder. You will need to restart your console after the installation for the change to the `%PATH%` environmental variable to take effect.

>**提示：** 安装把VSCode添加到`%PATH%`，所以你可以从控制台中输入'code .'来在那个文件夹打开VSCode。在安装后你需要重启控制台来是改变`%PATH%`环境变量生效。

## User setup versus system setup——用户安装 VS 系统安装

VS Code provides both Windows user and system level setups. Installing the [user setup](https://go.microsoft.com/fwlink/?LinkID=534107) does not require Administrator privileges as the location will be under your user Local AppData (LOCALAPPDATA) folder. User setup also provides a smoother background update experience.

VSCode提供Windows用户设置和系统级别设置。安装[用户级别安装](https://go.microsoft.com/fwlink/?LinkID=534107)不要求管理员权限，因为位置是在你的用户本地应用数据(LOCALAPPDATA)文件夹。用户安装还提供一个流畅的后台更新体验。

The [system setup](https://go.microsoft.com/fwlink/?linkid=852157) requires elevation to Administrator privileges and will place the installation under Program Files. This also means that VS Code will be available to all users in the system.

[系统安装](https://go.microsoft.com/fwlink/?linkid=852157)要求提升至管理员权限，并将安装置于Program Files之下。这也意味着VSCode在系统中对所有用户都可用。

See the [Download Visual Studio Code](https://code.visualstudio.com/download) page for a complete list of available installation options.

查看[下载VSCode](https://code.visualstudio.com/download)页，有一个可用安装选项的完整列表。

## 32-bit versions——32位版本

If you need to run a 32-bit version of VS Code, both a 32-bit [Installer](https://go.microsoft.com/fwlink/?LinkId=723965) and [Zip archive](https://go.microsoft.com/fwlink/?LinkID=733265) are available.

如果你需要运行32位版本的VSCode，32位[安装包](https://go.microsoft.com/fwlink/?LinkId=723965)和[Zip包](https://go.microsoft.com/fwlink/?LinkID=733265)都可用。

## Updates——更新

VS Code ships monthly [releases](https://code.visualstudio.com/updates) and supports auto-update when a new release is available. If you're prompted by VS Code, accept the newest update and it will be installed (you won't need to do anything else to get the latest bits).

VSCode每月发布一次[release](https://code.visualstudio.com/updates)，且支持当新的release版可用时自动更新。如果你被VSCode提示，接受新版更新，然后它将被安装（你不需要做任何事来获得最新数据）。

>Note: You can [disable auto-update](/vscode_docs/setup/faq#How-do-I-opt-out-of-VS-Code-auto-updates?) if you prefer to update VS Code on your own schedule.

>注意： 如果你偏爱按自己的计划更新VSCode，你可以[禁止自动更新](/vscode_docs/setup/faq#How-do-I-opt-out-of-VS-Code-auto-updates?)。

## Windows Subsystem for Linux——Windows Linux子系统

Windows is a popular operating system and it can be a great cross-platform development environment. This section describes cross-platform features such as the [Windows Subsystem for Linux](https://docs.microsoft.com/windows/wsl/install-win10) (WSL) and the new Windows Terminal.

### Recent Windows build——最近的Windows版本

Make sure you are on a recent Windows 10 build. Check **Settings** > **Windows Update** to see if you are up-to-date.

确保你在最近的一个Win10版本。检查**Settings** > **Windows Update**来查看你是否是最新。

### Windows as a developer machine——Windows作为开发机

With WSL, you can install and run Linux distributions on Windows. This enables you to develop and test your source code on Linux while still working locally on your Windows machine.

使用WSL，你可以在Windows上安装并运行Linux发行版。这使你能够在Linux上开发和测试你的源代码，而你仍然工作在本地的Windows机器。

When coupled with the [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) extension, you get full VS Code editing and debugging support while running in the context of WSL.

当结合了[Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)扩展时，运行在WSL环境下时，你将获得完整的VSCode编辑和调试支持。

See the [Developing in WSL](/vscode_docs/remote/wsl) documentation to learn more or try the [Working in WSL](/vscode_docs/remote/wsl-tutorial) introductory tutorial.

查看[在WSL中开发](/vscode_docs/remote/wsl)文档来了解更多或尝试[在WSL中工作](/vscode_docs/remote/wsl-tutorial)介绍指南。

### New Windows Terminal——新的Windows终端

Available from the Microsoft Store, the [Windows Terminal (Preview)](https://www.microsoft.com/p/windows-terminal-preview/9n0dx20hk701?SilentAuth=1&wa=wsignin1.0&activetab=pivot%3Aoverviewtab) lets you easily open PowerShell, Command Prompt, and WSL terminals in a multiple tab shell.

可以从Microsoft Store中获得[Windows终端预览版](https://www.microsoft.com/p/windows-terminal-preview/9n0dx20hk701?SilentAuth=1&wa=wsignin1.0&activetab=pivot%3Aoverviewtab)，可以使你轻松在一个多标签的shell中打开PowerShell、命令提示符和WSL终端。

## Next steps——下一步

Once you have installed VS Code, these topics will help you learn more about VS Code:

一旦你安装了VSCode，这些主题帮助你了解更多VSCode：

* [Additional Components](/vscode_docs/setup/additional-components) - Learn how to install Git, Node.js, TypeScript, and tools like Yeoman.
  [附加组件](/vscode_docs/setup/additional-components) - 了解如何安装Git、Node.js、TypeScript和一些工具，比如Yeoman。
* [User Interface](/vscode_docs/getstarted/userinterface) - A quick orientation to VS Code.
  [用户界面](/vscode_docs/getstarted/userinterface) - VSCode快速导向。
* [User/Workspace Settings](/vscode_docs/getstarted/settings) - Learn how to configure VS Code to your preferences through settings.
  [用户/工作空间 设置](/vscode_docs/getstarted/settings) - 了解如何通过设置配置你的VSCode偏好。
* [Tips and Tricks](/vscode_docs/getstarted/tips-and-tricks) - Lets you jump right in and learn how to be productive with VS Code.
  [建议和窍门](/vscode_docs/getstarted/tips-and-tricks) - 直接进入并了解如何高效使用VSCode。

## Common questions——一般问题

### What command-line arguments are supported by the Windows Setup?——Windows安装包支持什么样的命令行参数？

VS Code uses [Inno Setup](https://www.jrsoftware.org/isinfo.php) to create its setup package
for Windows. Thus, all the [Inno Setup command-line switches](https://www.jrsoftware.org/ishelp/index.php?topic=setupcmdline) are available for use.

VSCode使用[Inno Setup](https://www.jrsoftware.org/isinfo.php)来创建Windows安装包。因此，所有的[Inno Setup命令行开关](https://www.jrsoftware.org/ishelp/index.php?topic=setupcmdline)可以获得使用。

Additionally, you can prevent the Setup from launching VS Code after completion with `/mergetasks=!runcode`.

另外，你可以防止在完成`/mergetasks=!runcode`后，安装包启动VSCode。

### Scrolling is laggy and not smooth——滚动是迟滞的，不流畅的。

On certain devices, editor scrolling is not smooth but laggy for an unpleasant experience. If you notice this issue, make sure you install the Windows 10 October 2018 update where this issue is fixed.

在某些设备上，编辑器滚动不流畅，滞后，带来了不愉快的体验。如果你注意到这个问题，确定你安装了Windows 10 October 2018更新，这个更新修复了这个问题。

### I'm having trouble with the installer——使用安装包有问题

Try using the [zip file](https://code.visualstudio.com/docs/?dv=winzip) instead of the installer.  To use this, unzip VS Code in your `AppData\Local\Programs` folder.

尝试使用[zip文件](https://code.visualstudio.com/docs/?dv=winzip)代替安装包。解压VSCode到`AppData\Local\Programs`文件夹来使用。

>**Note:** When VS Code is installed via a Zip file, you will need to manually update it for each [release](https://code.visualstudio.com/updates).
>**注意：** 当VSCode通过Zip文件安装后，你需要手动更新每次的[release](https://code.visualstudio.com/updates)。

### Icons are missing——图标消失了

I installed Visual Studio Code on my Windows 7 or 8 machine. Why are some icons not appearing in the workbench and editor?

我在我的Windows 7或者Windwos 8上安装了VSCode。为什么一些工作台和编辑器上的图标不出现了？

VS Code uses [SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics) icons and we have found instances where the .SVG file extension is associated with something other than `image/svg+xml`. We're considering options to fix it, but for now here's a workaround:

VSCode使用[SVG](https://en.wikipedia.org/wiki/Scalable_Vector_Graphics)图标，并且我们已经发现了一些场景，.SVG文件扩展和除了`image/svg+xml`之外的一些东西有关。我们正在考虑一些方法修复它，但是现在有一个变通方案：

Using the Command Prompt:

使用命令提示符：

1. Open an Administrator Command Prompt.
   打开一个管理员命令提示符。
2. Type `REG ADD HKCR\.svg /f /v "Content Type" /t REG_SZ /d image/svg+xml`.
   输入`REG ADD HKCR\.svg /f /v "Content Type" /t REG_SZ /d image/svg+xml`。

Using the Registry Editor (regedit):

使用注册编辑器(regedit)：

1. Start `regedit`.
   启动`regedit`。
2. Open the `HKEY_CLASSES_ROOT` key.
   打开`HKEY_CLASSES_ROOT`key。
3. Find the `.svg` key.
   找到`.svg` key。
4. Set its `Content Type` Data value to `image/svg+xml`.
   设置它的`Content Type`数据值为`image/svg+xml`。
5. Exit `regedit`.
   退出`regedit`。
