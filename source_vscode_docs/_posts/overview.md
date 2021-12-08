---
title: overview
date: 2021-11-09 11:58:59
tags:
---
# Getting Started——开始
Visual Studio Code is a lightweight but powerful source code editor which runs on your desktop and is available for Windows, macOS and Linux. It comes with built-in support for JavaScript, TypeScript and Node.js and has a rich ecosystem of extensions for other languages (such as C++, C#, Java, Python, PHP, Go) and runtimes (such as .NET and Unity). Begin your journey with VS Code with these [introductory videos](https://code.visualstudio.com/docs/getstarted/introvideos).

VSCode是一个可用于Windows、macOS和Linux桌面端的轻量且强大的源代码编辑器。它内置支持JavaScript、TypeScript和Node.js，并且有丰富的扩展生态来支持其他语言（如：C++、C#、Java、Python、PHP、Go）和运行时（如.NET和Unity）。用VSCode开始你的旅程：[介绍视频](https://code.visualstudio.com/docs/getstarted/introvideos)。

# Visual Studio Code in Action——VSCode实战
<link rel="stylesheet" href="https://unpkg.com/swiper@6.8.4/swiper-bundle.css">
<script src="https://unpkg.com/swiper@6.8.4/swiper-bundle.js"> </script>
<style>
.swiper-container {
    height: 580px;
}
</style>
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">
            {% asset_img 1.png %}
            <h3>Intelligent Code Completion 智能代码补全</h3>
            <span>Code smarter with <a href="https://code.visualstudio.com/docs/editor/intellisense">IntelliSense</a> - completions for variables, methods, and imported modules.</span>
            <br/><br/>
            <span>更聪明的代码 <a href="https://code.visualstudio.com/docs/editor/intellisense">IntelliSense</a> - 变量补全、方法补全、导入模块补全。</span>
        </div>
        <div class="swiper-slide">
            {% asset_img 2.png %}
            <h3>Streamlined Debugging 简化调试</h3>
            <span>Print debugging is a thing of the past. <a href="https://code.visualstudio.com/docs/editor/debugging">Debug</a> in VS Code with your terminal tools.</span>
            <br/><br/>
            <span>打印调试已成为过去式。在VSCode中用终端进行<a href="https://code.visualstudio.com/docs/editor/debugging">调试</a>。</span>
        </div>
        <div class="swiper-slide">
            {% asset_img 3.png %}
            <h3>Fast, Powerful Editing 快速、强大的编辑</h3>
            <span><a href="https://code.visualstudio.com/docs/languages/javascript#_linters">Linting</a>, <a href="https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor">multi-cursor editing</a>, <a href="https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features">parameter hints</a>, and other powerful editing features.</span>
            <br/><br/>
            <span><a href="https://code.visualstudio.com/docs/languages/javascript#_linters">静态分析</a>、<a href="https://code.visualstudio.com/docs/editor/codebasics#_multiple-selections-multicursor">多光标编辑</a>、<a href="https://code.visualstudio.com/docs/editor/intellisense#_intellisense-features">参数提示</a>，和其它强大的编辑特点。</span>
        </div>
        <div class="swiper-slide">
            {% asset_img 4.png %}
            <h3>Code Navigation and Refactoring 代码跳转和重构</h3>
            <span>Browse your source code quickly using <a href="https://code.visualstudio.com/docs/editor/editingevolved#_peek">peek</a> and <a href="https://code.visualstudio.com/docs/editor/editingevolved#_go-to-definition">navigate to definition</a>.</span>
            <br/><br/>
            <span>用<a href="https://code.visualstudio.com/docs/editor/editingevolved#_peek">peek</a>和<a href="https://code.visualstudio.com/docs/editor/editingevolved#_go-to-definition">navigate to definition</a>快速浏览你的源代码。</span>
        </div>
        <div class="swiper-slide">
            {% asset_img 5.png %}
            <h3>In-Product Source Control 产品内源代码控制</h3>
            <span>Speed up your release cycle with <a href="https://code.visualstudio.com/docs/editor/versioncontrol">SCM support</a> inside your editor, including rich Git integration.</span>
            <br/><br/>
            <span>编辑器内支持<a href="https://code.visualstudio.com/docs/editor/versioncontrol">SCM</a>，包括丰富的git整合以加快你的发布周期。</span>
        </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
<script>        
  var mySwiper = new Swiper ('.swiper-container', {
    autoplay: {
      delay: 2000,//1秒切换一次
    },
    direction: 'horizontal', // 垂直切换选项
    grabCursor : true,
    loop: true, // 循环模式选项
    pagination: { // 分页器
      el:
      '.swiper-pagination'
    },
  });
</script>

# Top Extensions——顶流扩展
Enable additional languages, themes, debuggers, commands, and more. VS Code's growing community shares their secret sauce to improve your workflow.

启用额外的语言、主题、调试器、命令等等。成长越来越好的VSCode社区分享密决改善工作流程。
{% asset_img top_extensions.png %}

<p class="text-right">
<a href="https://marketplace.visualstudio.com/vscode" target="_blank">See more in the Marketplace</a>
</p>

# First Steps——初始步骤
To get the most out of Visual Studio Code, start by reviewing a few introductory topics:
为了最有效利用VSCode，可以从查看几个介绍主题开始。

[Intro Videos](https://code.visualstudio.com/docs/getstarted/introvideos) - Begin your journey with VS Code through these introductory videos.
[介绍视频](https://code.visualstudio.com/docs/getstarted/introvideos) - 通过这些介绍视频开始你的VSCode旅程。

[Setup](https://code.visualstudio.com/docs/setup/setup-overview) - Install VS Code for your platform and configure the tool set for your development needs.
[安装](https://code.visualstudio.com/docs/setup/setup-overview) - 为你的平台安装VSCode，为你的开发需要配置工具集。

[User Interface](https://code.visualstudio.com/docs/getstarted/userinterface) - Introduction to the basic UI, commands, and features of the VS Code editor.
[用户界面](https://code.visualstudio.com/docs/getstarted/userinterface) - 介绍基本的UI、命令和VSCode编辑器的特点。

[Settings](https://code.visualstudio.com/docs/getstarted/settings) - Customize VS Code for how you like to work.
[设置](https://code.visualstudio.com/docs/getstarted/settings) - 以你喜欢的工作方式自定义VSCode。

[Languages](https://code.visualstudio.com/docs/languages/overview) - Learn about VS Code's support for your favorite programming languages.
[语言](https://code.visualstudio.com/docs/languages/overview) - 了解VSCode对你最喜欢的语言的支持。

[Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) - This tutorial gets you quickly running and debugging a Node.js web app.
[Node.js](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial) - 这个指南使你快速运行和调试Node.js web app。

[Tips and Tricks](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) - Jump right in with Tips and Tricks to become a VS Code power user.
[技巧和诀窍](https://code.visualstudio.com/docs/getstarted/tips-and-tricks) - 直接进入技巧和诀窍成为一个VSCode高级用户。

[Azure](https://code.visualstudio.com/docs/azure/extensions) - VS Code is great for deploying your web applications to the cloud.
[Azure](https://code.visualstudio.com/docs/azure/extensions) - VSCode非常适合部署web应用到云上。

[Extension API](https://code.visualstudio.com/api) - Learn how to write a VS Code extension.
[扩展API](https://code.visualstudio.com/api) - 了解如何写VSCode扩展。

[Why VS Code?](https://code.visualstudio.com/docs/editor/whyvscode) - Read about the design philosophy and architecture of VS Code.
[为什么选择VSCode？](https://code.visualstudio.com/docs/editor/whyvscode) - 阅读了解VSCode的设计哲学和结构。

# Keyboard Shortcuts——快捷键
Increase your productivity with VS Code's keyboard shortcuts.
用VSCode快捷键提升你的生产效率。

[Keyboard Shortcut Reference Sheet](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference) - Learn the commonly used keyboard shortcuts.
[快捷键参考单](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-reference) - 了解常用的快捷键。

[Keymap Extensions](https://code.visualstudio.com/docs/getstarted/keybindings#_keymap-extensions) - Change VS Code's keyboard shortcuts to match another editor.
[快捷键映射扩展](https://code.visualstudio.com/docs/getstarted/keybindings#_keymap-extensions) - 改变VSCode快捷键来匹配其他的编辑器。

[Customize Keyboard Shortcuts](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-editor) - Modify the default keyboard shortcuts.
[自定义快捷键](https://code.visualstudio.com/docs/getstarted/keybindings#_keyboard-shortcuts-editor) - 修改默认快捷键。

# Downloads——下载
[Download VS Code](https://code.visualstudio.com/download) - Quickly find the appropriate install for your platform (Windows, macOS and Linux)

[下载VSCode](https://code.visualstudio.com/download) - 为你的平台（Windows, macOS and Linux）快速发现合适的安装。

# Privacy——隐私
By default, VS Code auto-updates to new versions, and collects usage data and crash report information. You may opt out of these defaults by disabling them as instructed below:

默认情况下，VSCode自动更新到新版本，且收集使用数据和崩溃报告信息。你可以按照下面的指示来禁用这些默认设置：

[How do I disable auto update?](https://code.visualstudio.com/docs/supporting/faq#_how-do-i-opt-out-of-vs-code-autoupdates)
[我该如何禁用自动更新？](https://code.visualstudio.com/docs/supporting/faq#_how-do-i-opt-out-of-vs-code-autoupdates)

[How do I disable crash reporting?](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-crash-reporting)
[我该如何禁用崩溃报告？](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-crash-reporting)

[How do I disable usage reporting?](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting)
[我该如何禁用使用报告？](https://code.visualstudio.com/docs/supporting/faq#_how-to-disable-telemetry-reporting)