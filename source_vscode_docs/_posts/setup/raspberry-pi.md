---
title: raspberry-pi
date: 2021-12-14 15:02:28
tags:
---
# Visual Studio Code on Raspberry Pi——树莓派上的VSCode

You can run Visual Studio Code on [Raspberry Pi](https://www.raspberrypi.org) devices.

你能够在[树莓派](https://www.raspberrypi.org)设备上运行VSCode。

[![树莓派商标](RPi-Logo-Landscape-Reg-SCREEN.png)](https://www.raspberrypi.org)

By downloading and using Visual Studio Code, you agree to the [license terms](https://code.visualstudio.com/license) and [privacy statement](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409).

通过下载和使用VSCode，既你同意了[许可证条款](ttps://code.visualstudio.com/license)和[隐私说明](https://go.microsoft.com/fwlink/?LinkID=528096&clcid=0x409)。

## Installation——安装

Visual Studio Code is officially distributed via the [Raspberry Pi OS](https://www.raspberrypi.org/software/operating-systems) (previously called Raspbian) APT repository, in both 32-bit and 64-bit variants.

VSCode通过[树莓派操作系统](https://www.raspberrypi.org/software/operating-systems)(以前叫Raspbian)APT仓库正式分发，包括32位和64位变体。

You can install it by running:

你能通过运行以下来安装：

```bash
sudo apt update
sudo apt install code
```

### Running VS Code——运行VSCode

After installing the VS Code package, you can run VS Code by typing `code` in a terminal or launching it via the **Programming** menu.

安装VSCode包后，可以在终端中输入`code`或者通过**编程**菜单来运行VSCode。

![树莓派编程菜单下的VSCode](vscode-under-programming.jpg)

## Updates——更新

Your Raspberry Pi should handle updating VS Code in the same way as other packages on the system:

你的树莓派应该以和系统上其他包一样的方式处理VSCode更新：

```bash
sudo apt update
sudo apt upgrade code
```

You can always check when a new release is available in our [Updates](https://code.visualstudio.com/updates) page.
你随时可以在我们的[更新](https://code.visualstudio.com/updates)页检查什么时候有新版可用。

## System requirements——系统要求

VS Code is supported on these Raspberry Pi models running a 32-bit or 64-bit version of Raspberry Pi OS:

VSCode支持这些跑在32位或者64位树莓派操作系统上的树莓派模块：

* Raspberry Pi 3 Model B/B+
* Raspberry Pi 4 Model B
* Raspberry Pi 400

While 1 GB of memory (RAM) meets the minimum system requirements, users will benefit from installing VS Code on a Raspberry Pi 4 with more memory.

尽管1GB的内存(RAM)满足了最小的系统要求，但用户将受益于在具有更多内存的 Raspberry Pi 4 上安装 VS Code。

First-generation Raspberry Pi modules and Raspberry Pi Zero are not supported as they only include an ARMv6 CPU.

第一代树莓派模块和树莓派Zero不被支持，因为它们只包含ARMv6 CPU。

## Next steps——下一步

Once you have installed VS Code, these topics will help you learn more about it:
一旦你安装了VSCode，这些主题会帮助你了解更多的：

* [Additional Components](/vscode_docs/setup/additional-components) - Learn how to install Git, Node.js, TypeScript, and tools like Yeoman.
  [附加组件](/vscode_docs/setup/additional-components) - 学习如何安装Git、Node.js、TypeScript和工具，比如Yeoman.

* [User Interface](/vscode_docs/getstarted/userinterface) - A quick orientation to VS Code.
  [用户界面](/vscode_docs/getstarted/userinterface) - VSCode快速引导。

* [User/Workspace Settings](/vscode_docs/getstarted/settings) - Learn how to configure VS Code to your preferences through settings.
  [用户/工作空间 设置](/vscode_docs/getstarted/settings) - 了解如何按你的偏好设置来配置VSCode。