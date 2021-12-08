---
title: linux
date: 2021-11-16 19:23:22
tags:
---
# Visual Studio Code on Linux——Linux上的VSCode

## Installation——安装

See the [Download Visual Studio Code](https://code.visualstudio.com/download) page for a complete list of available installation options.

查看可用的安装选项的完整列表页[下载VSCode](https://code.visualstudio.com/download)

By downloading and using Visual Studio Code, you agree to the [license terms](https://code.visualstudio.com/license) and [privacy statement](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409).

通过下载和使用VSCode，你必须同意[许可项](https://code.visualstudio.com/license)和[隐私说明](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409)

### Snap

Visual Studio Code is officially distributed as a Snap package in the [Snap Store](https://snapcraft.io/store):
VSCode在[Snap商店](https://snapcraft.io/store)官方分发Snap包。

[![从Snap商店获取](snap-store.png)](https://snapcraft.io/code)

You can install it by running:
你可以通过运行以下命令来安装：

```bash
sudo snap install --classic code # or code-insiders
```

Once installed, the Snap daemon will take care of automatically updating VS Code in the background. You will get an in-product update notification whenever a new update is available.

一旦安装，Snap守护进程将在后台维护好VSCode的自动更新。无论何时当有可用的更新时，你将获得一个内置的更新通知。

**Note:** If `snap` isn't available in your Linux distribution, please check the following [Installing snapd guide](https://docs.snapcraft.io/installing-snapd), which can help you get that set up.

**注意:** 如果“snap”不能在你的Linux发行版中使用，请检查以下[snapd安装指导](https://docs.snapcraft.io/installing-snapd)，这可以帮助你安装。

Learn more about snaps from the [official Snap Documentation](https://docs.snapcraft.io).

更多的了解snaps[Snap官方文档](https://docs.snapcraft.io)

### Debian and Ubuntu based distributions——基于Debian和Ubuntu的发行版

The easiest way to install Visual Studio Code for Debian/Ubuntu based distributions is to download and install the [.deb package (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760868), either through the graphical software center if it's available, or through the command line with:

在基于Debian/Ubuntu的发行版中安装VSCode的最简单的方式是下载并安装[64位.deb包](https://go.microsoft.com/fwlink/?LinkID=760868)，或者通过图形化的软件中心(如果可用的话)，或者命令行：

```bash
sudo apt install ./<file>.deb

# 如果你是一个更老的Linux发行版，你需要运行这些来代替：
# sudo dpkg -i <file>.deb
# sudo apt-get install -f # Install dependencies
```

Note that other binaries are also available on the [VS Code download page](https://code.visualstudio.com/Download).

注意，其他的二进制文件也可以用在[VSCode下载页](https://code.visualstudio.com/Download)。

Installing the .deb package will automatically install the apt repository and signing key to enable auto-updating using the system's package manager. Alternatively, the repository and key can also be installed manually with the following script:

安装.deb包将自动安装apt仓库和签名key，使得能够用系统的包管理来自动更新。或者，仓库和key也能用以下脚本手动安装：

```bash
wget -qO- https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /etc/apt/trusted.gpg.d/
sudo sh -c 'echo "deb [arch=amd64,arm64,armhf signed-by=/etc/apt/trusted.gpg.d/packages.microsoft.gpg] https://packages.microsoft.com/repos/code stable main" > /etc/apt/sources.list.d/vscode.list'
rm -f packages.microsoft.gpg
```

Then update the package cache and install the package using:

之后更新package cache并用以下命令安装包：

```bash
sudo apt install apt-transport-https
sudo apt update
sudo apt install code # or code-insiders
```

### RHEL, Fedora, and CentOS based distributions——基于RHEL、Fedora和CentOS的发行版

We currently ship the stable 64-bit VS Code in a yum repository, the following script will install the key and repository:

现在我们在yum仓库里部署了稳定版的64位VSCode，下面的脚本将安装key和仓库：

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/yum.repos.d/vscode.repo'
```

Then update the package cache and install the package using `dnf` (Fedora 22 and above):

之后用'dnf'更新package cache并安装VSCode包(Fedora 22及以上版本)：

```bash
dnf check-update
sudo dnf install code
```

Or on older versions using `yum`:

或者用'yum'安装更老的版本：

```bash
yum check-update
sudo yum install code
```

Due to the manual signing process and the system we use to publish, the yum repo may lag behind and not get the latest version of VS Code immediately.

由于手动签名过程和我们用来发布的系统，yum仓库可能延迟，继而不能立即获得最新版的VSCode。

### openSUSE and SLE-based distributions——基于openSUSE和SUSE企业版的发行版

The yum repository above also works for openSUSE and SLE-based systems, the following script will install the key and repository:

上面的yum仓库也能在openSUSE和SUSE企业版中起作用，下面的脚本将安装key和仓库：

```bash
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
sudo sh -c 'echo -e "[code]\nname=Visual Studio Code\nbaseurl=https://packages.microsoft.com/yumrepos/vscode\nenabled=1\ntype=rpm-md\ngpgcheck=1\ngpgkey=https://packages.microsoft.com/keys/microsoft.asc" > /etc/zypp/repos.d/vscode.repo'
```

Then update the package cache and install the package using:

之后更新package cache并安装VSCode包：

```bash
sudo zypper refresh
sudo zypper install code
```

### AUR package for Arch Linux Arch——Linux的AUR包

There is a community-maintained [Arch User Repository package for VS Code](https://aur.archlinux.org/packages/visual-studio-code-bin).

有一个社区维护的[VSCode Arch用户仓库包](https://aur.archlinux.org/packages/visual-studio-code-bin)。

To get more information about the installation from the AUR, please consult the following wiki entry:
[Install AUR Packages](https://wiki.archlinux.org/index.php/Arch_User_Repository#Build_and_install_the_package).

要获得更多关于从AUR安装的信息，请查阅以下wiki条目：
[安装AUR包](https://wiki.archlinux.org/index.php/Arch_User_Repository#Build_and_install_the_packag)。

### Nix package for NixOS (or any Linux distribution using Nix package manager)——NixOS的Nix包(或者任何使用Nix包管理的Linux发行版)

There is a community maintained [VS Code Nix package](https://github.com/NixOS/nixpkgs/blob/master/pkgs/applications/editors/vscode/default.nix) in the nixpkgs repository. In order to install it using Nix, set `allowUnfree` option to true in your `config.nix` and execute:

有一个社区维护的在nixpkgs仓库中的[VSCode Nix包](https://github.com/NixOS/nixpkgs/blob/master/pkgs/applications/editors/vscode/default.nix)。要用Nix安装，需要在'config.nix'中设置‘allowunfree’选项为true并执行：

```bash
nix-env -i vscode
```

### Installing .rpm package manually——手动安装.rpm包

The [VS Code .rpm package (64-bit)](https://go.microsoft.com/fwlink/?LinkID=760867) can also be manually downloaded and installed, however, auto-updating won't work unless the repository above is installed. Once downloaded it can be installed using your package manager, for example with `dnf`:

[VSCode 64位.rpm包](https://go.microsoft.com/fwlink/?LinkID=760867)也可以被手动下载和安装，但是自动更新将不起作用，除非安装上面的仓库。一旦用包管理器下载安装，比如'dnf'：

```bash
sudo dnf install <file>.rpm
```

Note that other binaries are also available on the [VS Code download page](https://code.visualstudio.com/Download).
注意其他二进制包也可以在[VSCode下载页](https://code.visualstudio.com/Download)获得。

## Updates——更新

VS Code ships monthly and you can see when a new release is available by checking the [release notes](https://code.visualstudio.com/docs/setup/linux#:~:text=by%20checking%20the-,release%20notes,-.%20If%20the%20VS). If the VS Code repository was installed correctly, then your system package manager should handle auto-updating in the same way as other packages on the system.

VSCode每月发布一次，当新版本可用时，你可以通过检查[发布记录](https://code.visualstudio.com/docs/setup/linux#:~:text=by%20checking%20the-,release%20notes,-.%20If%20the%20VS)来查看。如何VSCode仓库被正确安装，那么你的系统包管理器处理自动更新和系统上其他的包一样。

**Note:** Updates are automatic and run in the background for the [Snap package](#Snap).
**注意：** 对[Snap包](#Snap)更新是自动的并且运行在后台。

## Node.js

Node.js is a popular platform and runtime for easily building and running JavaScript applications. It also includes [npm](https://www.npmjs.com/), a Package Manager for Node.js modules. You'll see Node.js and npm mentioned frequently in our documentation and some optional VS Code tooling requires Node.js (for example, the VS Code [extension generator](/vscode_api/get-started/your-first-extension)).

Node.js是一个构建简单和运行JavaScript应用的流行平台和运行时。它也包含了[npm](https://www.npmjs.com/)，这是一个Node.js模块的包管理。你将频繁的看到在我们的文档里提及Node.js和npm，并且一些可选的VSCode工具要求Node.js(比如，VSCode[扩展生成器](/vscode_api/get-started/your-first-extension))。

If you'd like to install Node.js on Linux, see [Installing Node.js via package manager](https://nodejs.org/en/download/package-manager) to find the Node.js package and installation instructions tailored to your Linux distribution. You can also install and support multiple versions of Node.js by using the [Node Version Manager](https://github.com/creationix/nvm).

如果你想在Linux上安装Node.js，查看[通过包管理器安装Node.js](https://nodejs.org/en/download/package-manager)来找到适合你的Linux发行版的Node.js包和安装说明。你也能通过使用[Node版本管理](https://github.com/creationix/nvm)来安装和支持多版本的Node.js。

To learn more about JavaScript and Node.js, see our [Node.js tutorial](/vscode_docs/nodejs/nodejs-tutorial), where you'll learn about running and debugging Node.js applications with VS Code.

要了解更多NavaScript和Node.js，查看我们的[Node.js指南](/vscode_docs/nodejs/nodejs-tutorial)，在这里你将了解到用VSCode运行和调试Node.js应用。

## Setting VS Code as the default text editor——设置VSCode作为默认的文本编辑器

### xdg-open

You can set the default text editor for text files (`text/plain`) that is used by `xdg-open` with the following command:

你可以用以下命令设置'xdg-open'使用的text files('text/plain')的默认文本编辑器：

```bash
xdg-mime default code.desktop text/plain
```

### Debian alternatives system——Debian可替代系统

Debian-based distributions allow setting a default **editor** using the [Debian alternatives system](https://wiki.debian.org/DebianAlternatives), without concern for the MIME type. You can set this by running the following and selecting code:

基于Debian的发行版允许使用[Debian可替代系统](https://wiki.debian.org/DebianAlternatives)设置默认的编辑器，而不用关系MIME type。你可以通过运行以下可选代码来设置：

```bash
sudo update-alternatives --set editor /usr/bin/code
```

If Visual Studio Code doesn't show up as an alternative to `editor`, you need to register it:

如果VSCode不能作为'editor'的可替代出现，你需要注册它：

```bash
sudo update-alternatives --install /usr/bin/editor editor $(which code) 10
```

## Windows as a Linux developer machine——作为Linux开发者机器的Windows

Another option for Linux development with VS Code is to use a Windows machine with the [Windows Subsystem for Linux](https://docs.microsoft.com/windows/wsl/install-win10) (WSL).

另一个Linux开发者使用VSCode的选项是使用Windows机器，使用[Windows Linux子系统](https://docs.microsoft.com/windows/wsl/install-win10)（WSL）。

### Windows Subsystem for Linux——Windows上的Linux子系统

With WSL, you can install and run Linux distributions on Windows. This enables you to develop and test your source code on Linux while still working locally on a Windows machine. WSL supports Linux distributions such as Ubuntu, Debian, SUSE, and Alpine available from the Microsoft Store.

使用WSL，你能够在Windows上安装和运行Linux发行版。这使你能够在Linux上开发和测试你的源代码，而你仍然在本地的Windows机器上工作。WSL支持的Linux发行版，如Ubuntu、Debian、SUSE、和Alpine，可以从Micrisoft Store获得。

When coupled with the [Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl) extension, you get full VS Code editing and debugging support while running in the context of a Linux distro on WSL.

当和扩展[Remote - WSL](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-wsl)结合时，在WSL上的Linux发行版环境中运行时你可以获得完整的VSCode编辑和调试支持。

See the [Developing in WSL](/vscode_docs/remote/wsl) documentation to learn more or try the [Working in WSL](/vscode_docs/remote/wsl-tutorial) introductory tutorial.

查看[在WSL中开发](/vscode_docs/remote/wsl)文档来了解更多或者尝试[在WSL中工作](/vscode_docs/remote/wsl-tutorial)介绍指南。

## Next steps——下一步

Once you have installed VS Code, these topics will help you learn more about it:

一旦你安装了VSCode，这些主题将帮助你了解更多：

* [Additional Components](/vscode_docs/setup/additional-components) - Learn how to install Git, Node.js, TypeScript, and tools like Yeoman.
  [附加组件](/vscode_docs/setup/additional-components) - 学习如何安装Git、Node.js、TypeScript和一些工具，如Yeoman。

* [User Interface](/vscode_docs/getstarted/userinterface) - A quick orientation to VS Code.
  [用户界面](/vscode_docs/getstarted/userinterface) - VSCode快速向导。

* [User/Workspace Settings](/vscode_docs/getstarted/settings) - Learn how to configure VS Code to your preferences through settings.
  [用户/工作空间 设置](/vscode_docs/getstarted/settings) - 学习如何通过设置来配置你的VSCode偏好。

## Common questions——一般问题

### Azure VM Issues——Azure虚拟机问题

I'm getting a "Running without the SUID sandbox" error?

我正获得一个“Running without the SUID sandbox”错误？

You can safely ignore this error.

你可以安全的忽略这个错。

### Debian and moving files to trash——Debian和移动文件到垃圾箱

If you see an error when deleting files from the VS Code Explorer on the Debian operating system, it might be because the trash implementation that VS Code is using is not there.

当你在Debian操作系统上从VSCode浏览器中删除文件时，如果你看到了这个错误，这可能是因为VSCode使用的垃圾箱的实现不存在。

Run these commands to solve this issue:

运行这些命令来解决问题：

```bash
sudo apt-get install gvfs-bin
```

### Conflicts with VS Code packages from other repositories——和来自其它仓库的VSCode包的冲突

Some distributions, for example [Pop!\_OS](https://pop.system76.com) provide their own `code` package. To ensure the official VS Code repository is used, create a file named `/etc/apt/preferences.d/code` with the following content:

一些发行版，比如[Pop!\_OS](https://pop.system76.com)提供了它们自己的`code`包。为了保障官方VSCode仓库可用，需要创建一个名为`/etc/apt/preferences.d/code`的文件，内容如下：

```
Package: code
Pin: origin "packages.microsoft.com"
Pin-Priority: 9999
```

### "Visual Studio Code is unable to watch for file changes in this large workspace"(error ENOSPC)——“VSCode在这个大型工作空间中不能识别文件的变化（错误 ENOSPC）”

When you see this notification, it indicates that the VS Code file watcher is running out of handles because the workspace is large and contains many files. Before adjusting platform limits, make sure that potentially large folders, such as Python `.venv`, are added to the `files.watcherExclude` setting (more details below). The current limit can be viewed by running:

当你看到这个通知时，它表示VSCode文件监视器失控了，因为这个工作空间大且包含了很多文件。在调整平台限制前，确保潜在的大文件夹，如Python `.venv`，被添加到`files.watcherExclude`设置中（更多详细信息在下方）。当前的上限可以通过运行如下来查看：

```bash
cat /proc/sys/fs/inotify/max_user_watches
```

The limit can be increased to its maximum by editing `/etc/sysctl.conf` (except on Arch Linux, read below) and adding this line to the end of the file:

这个限制能够通过编辑`/etc/sysctl.conf`(除了Arch Linux，请阅读下方内容)和将这一行添加到文件末尾增加到它的最大值：

```bash
fs.inotify.max_user_watches=524288
```

The new value can then be loaded in by running `sudo sysctl -p`.

这个新的值能在执行`sudo sysctl -p`后被加载。

While 524,288 is the maximum number of files that can be watched, if you're in an environment that is particularly memory constrained, you may want to lower the number. Each file watch [takes up 1080 bytes](https://stackoverflow.com/a/7091897/1156119), so assuming that all 524,288 watches are consumed, that results in an upper bound of around 540 MiB.

尽管524288是可以被查看的文件数量的最大值，如果你处于一个特殊的内存限制的环境，你可能想降低这个数字。每个文件的查看[占据1080字节](https://stackoverflow.com/a/7091897/1156119)，所以假设全部524288个文件查看都被消耗掉，结论是有一个大约540MB的上限。

[Arch](https://www.archlinux.org/)-based distros (including Manjaro) require you to change a different file; follow [these steps](https://gist.github.com/tbjgolden/c53ca37f3bc2fab8c930183310918c8c) instead.

基于[Arch](https://www.archlinux.org/)的发行版（包括Manjaro）要求你修改一个不同的文件；遵循[这些步骤](https://gist.github.com/tbjgolden/c53ca37f3bc2fab8c930183310918c8c)来代替。

Another option is to exclude specific workspace directories from the VS Code file watcher with the `files.watcherExclude` [setting](/docs/getstarted/settings.md). The default for `files.watcherExclude` excludes `node_modules` and some folders under `.git`, but you can add other directories that you don't want VS Code to track.

另一个选项是使用`files.watcherExclude` [设置](/vscode_docs/getstarted/settings)来从VSCode文件查看器排除特定工作空间目录。默认的`files.watcherExclude`排除了`node_modules`和一些在`.git`下的文件夹，但是你能够添加其他的你不想让VSCode跟踪的目录。

```json
"files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/node_modules/*/**": true
  }
```

### I can't see Chinese characters in Ubuntu——我不能在Ubuntu中查看中文字符

We're working on a fix. In the meantime, open the application menu, then choose **File** > **Preferences** > **Settings**. In the **Text Editor** > **Font** section, set "Font Family" to `Droid Sans Mono, Droid Sans Fallback`. If you'd rather edit the `settings.json` file directly, set `editor.fontFamily` as shown:

我们正在努力修复。同时，打开应用菜单，然后选择**File** > **Preferences** > **Settings**。在**Text Editor** > **Font**区域，设置"Font Family" 为 `Droid Sans Mono, Droid Sans Fallback`，如下展示：

```json
    "editor.fontFamily": "Droid Sans Mono, Droid Sans Fallback"
```

### Package git is not installed——git包没有安装

This error can appear during installation and is typically caused by the package manager's lists being out of date. Try updating them and installing again:

这个错出现在安装期间，且通常是由于包管理的列表过时导致的。试着更新并重新安装：

```bash
# For .deb
sudo apt-get update

# For .rpm (Fedora 21 and below)
sudo yum check-update

# For .rpm (Fedora 22 and above)
sudo dnf check-update
```

### The code bin command does not bring the window to the foreground on Ubuntu——在Ubuntu上code二进制命令不会将窗口显示在前台

Running `code .` on Ubuntu when VS Code is already open in the current directory will not bring VS Code into the foreground. This is a feature of the OS which can be disabled using `ccsm`.

在Ubuntu上，当VSCode已经在当前目录打开时，若运行`code .`不会将VSCode显示在前台。这是操作系统的一个特点，可以用`ccsm`禁止掉。

```bash
# Install
sudo apt-get update
sudo apt-get install compizconfig-settings-manager

# Run
ccsm
```

Under **General** > **General Options** > **Focus & Raise Behaviour**, set "Focus Prevention Level" to "Off". Remember this is an OS-level setting that will apply to all applications, not just VS Code.

在**General** > **General Options** > **Focus & Raise Behaviour**下，设置"Focus Prevention Level" 为 "Off"。记住这是一个系统级别的设置，它将适用于所有的应用，不仅仅是VSCode。

### Cannot install .deb package due to "/etc/apt/sources.list.d/vscode.list: No such file or directory"——由于"/etc/apt/sources.list.d/vscode.list: No such file or directory"，不能安装.deb包：

This can happen when `sources.list.d` doesn't exist or you don't have access to create the file. To fix this, try manually creating the folder and an empty `vscode.list` file:

当`sources.list.d`不存在时或者你没有权限创建文件时，会发生这个错。要修复这，试试手动创建文件夹和一个空的 `vscode.list`文件：

```bash
sudo mkdir /etc/apt/sources.list.d
sudo touch /etc/apt/sources.list.d/vscode.list
```

### Cannot move or resize the window while X forwarding a remote window——不能移动window或改变window的大小,X forwarding是一个远程窗口

If you are using X forwarding to use VS Code remotely, you will need to use the native title bar to ensure you can properly manipulate the window. You can switch to using it by setting `window.titleBarStyle` to `native`.

如果你正在使用X forwarding来远程使用VSCode，你需要使用本地的标题栏来保证你能正确的操作窗口。你可以通过设置`window.titleBarStyle` 为 `native`来使用。

### Using the custom title bar——使用自定义的标题栏

The custom title bar and menus were enabled by default on Linux for several months. The custom title bar has been a success on Windows, but the customer response on Linux suggests otherwise. Based on feedback, we have decided to make this setting opt-in on Linux and leave the native title bar as the default.

在Linux上默认能够自定义标题栏和菜单已经几个月了。自定义标题栏在Windows上已经成功了，但是Linux上用户的回应表明不一样。基于反馈，我们决定在Linux上加入此设置并且使原生标题栏为默认设置。

The custom title bar provides many benefits including great theming support and better accessibility through keyboard navigation and screen readers. Unfortunately, these benefits do not translate as well to the Linux platform. Linux has a variety of desktop environments and window managers that can make the VS Code theming look foreign to users. For users needing the accessibility improvements, we recommend enabling the custom title bar when running in accessibility mode using a screen reader. You can still manually set the title bar with the **Window: Title Bar Style** (`window.titleBarStyle`) setting.

自定义标题栏包括了很多好处，比如大型主题的支持和更好的无障碍键盘导航和屏幕阅读。不幸的是，这些好处并没有和好的移植到Linux平台。Linux有各种各样的桌面环境和窗口管理器，这使得对用户来说VSCode的主题样式看起来很陌生。对于需要无障碍改善的用户，我们建议在使用无障碍模式屏幕阅读时，开启自定义标题栏。你仍然能够用设置**Window: Title Bar Style** (`window.titleBarStyle`) 手动设置标题栏。

### Broken cursor in editor with display scaling enabled——显示缩放开启时编辑器中光标出错

Due to an upstream [issue #14787](https://github.com/electron/electron/issues/14787) with Electron, the mouse cursor may render incorrectly with scaling enabled. If you notice that the usual text cursor is not being rendered inside the editor as you would expect, try falling back to the native menu bar by configuring the setting `window.titleBarStyle` to `native`.

由于Electron的上游[问题 #14787](ttps://github.com/electron/electron/issues/14787)，鼠标指针可能在缩放开启时渲染不正确。如果你注意到通常的文本光标并没有如你期望一样被渲染在编辑器内，试着通过配置`window.titleBarStyle`这项设置为`native`来回退到原生的菜单栏。

### Repository changed its origin value——仓库改变了它的初始值

If you receive an error similar to the following:

如果你收到了一个类似于下面的错误：

```
E: Repository '...' changed its 'Origin' value from '...' to '...'
N: This must be accepted explicitly before updates for this repository can be applied. See apt-secure(8) manpage for details.
```

Use `apt` instead of `apt-get` and you will be prompted to accept the origin change:

使用`apt`代替`apt-get`，然后你会被提示接收初始的改变。

```bash
sudo apt update
```
