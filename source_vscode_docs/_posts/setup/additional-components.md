---
title: additional-components
date: 2021-11-29 16:59:22
tags:
---
# Additional components and tools——附加组件和工具

Visual Studio Code is a small download by design and only includes the minimum number of components shared across most development workflows. Basic functionality like the editor, file management, window management, and preference settings are included. A JavaScript/TypeScript language service and Node.js debugger are also part of the base install.

VSCode是一个设计为下载体积小，仅包含大多数开发工作流共有的最小数量的组件的软件。包含基本的功能比如编辑、文件管理、窗口管理和偏好设置。JavaScript/TypeScript语言服务和Node.js调试器也是基础安装的一部分。

If you are used to working with larger, monolithic development tools (IDEs), you may be surprised that your scenarios aren't completely supported out of the box.  For example, there isn't a **File** > **New Project** dialog with pre-installed project templates.  Most VS Code users will need to install additional components depending on their specific needs.

如果以前经常使用更大的完整的开发工具（IDEs），你可能会惊讶你的使用场景不能被完全的支持开箱即用。比如，不存在带有原装工程模板的**文件** > **新工程**对话框。大多VSCode用户需要根据他们特定的需求安装额外的组件。

## Commonly used components——常用组件

Here are a few commonly installed components:

这是一些常用组件：

- [Git](https://git-scm.com/download) - VS Code has built-in support for source code control using Git but requires Git to be installed separately.
  [Git](https://git-scm.com/download) - VSCode内置支持Git来做源代码控制，但是需要独立安装Git。
- [Node.js (includes npm)](https://nodejs.org/) - A cross platform runtime for building and running JavaScript applications.
  [Node.js (包含 npm)](https://nodejs.org/) - 一个跨平台运行时，用于构建和运行JavaScript应用。
- [TypeScript](https://www.typescriptlang.org) - The TypeScript compiler, `tsc`, for transpiling TypeScript to JavaScript.
  [TypeScript](https://www.typescriptlang.org) - TypeScript 编译器 'tsc'，用于将 TypeScript 转译为 JavaScript。

You'll find the components above mentioned often in our documentation and walkthroughs.

你将发现上面提到的组件在我们的文档和演练中出现。

## VS Code extensions——VSCode扩展

You can extend the VS Code editor itself through [extensions](/vscode_docs/user-guide/extension-marketplace). The VS Code community has built hundreds of useful extensions available on the VS Code [Marketplace](https://marketplace.visualstudio.com/VSCode).

你可以通过[扩展](/vscode_docs/user-guide/extension-marketplace)来增强VSCode编辑器本身。VSCode社区构建了数百种有用的扩展，可以在VSCode[市场](/vscode_docs/user-guide/extension-marketplace)中获得。

{% asset_img top_extensions.png %}

The extensions shown above are the current most popular on Marketplace. Click on an extension tile above to read the description and reviews of the extension.

上面展示的扩展是市场里最流行的扩展。单击上面的扩展模块磁贴，阅读扩展程序的说明和评论。

## Additional tools——附加工具

Visual Studio Code integrates with existing tool chains.  We think the following tools will enhance your development experiences.

VSCode集成了现存的工具链。我们认为下面的工具将提升你的开发体验。

- [Yeoman](https://yeoman.io/) - An application scaffolding tool, a command line version of **File** > **New Project**.
  [Yeoman](https://yeoman.io/) - 应用程序脚手架工具，是**文件** > **新工程**的命令行版本。
- [generator-hottowel](https://github.com/johnpapa/generator-hottowel) - A Yeoman generator for quickly creating AngularJS applications.
  [generator-hottowel](https://github.com/johnpapa/generator-hottowel) - Yeoman生成器，用于快速创建AngularJS应用。
- [Express](https://expressjs.com/) - An application framework for Node.js applications using the Pug template engine.
  [Express](https://expressjs.com/) - 使用Pug模板引擎的Node.js应用程序框架。
- [Gulp](https://gulpjs.com/) - A streaming task runner system which integrates easily with VS Code tasks.
  [Gulp](https://gulpjs.com/) - 流式任务运行系统，能轻松集成VSCode任务。
- [Mocha](https://mochajs.org/) - A JavaScript test framework that runs on Node.js.
  [Mocha](https://mochajs.org/) - 运行在Node.js的JavaScript测试框架。
- [Yarn](https://yarnpkg.com/) - A dependency manager and alternative to npm.
  [Yarn](https://yarnpkg.com/) - 依赖管理器，或者用npm代替。

>**Note:** Most of these tools require Node.js and the npm package manager to install and use.
>**注意:** 大多数这些工具要求Node.js和npm包管理器来安装和使用。

## Next steps——下一步

* [User Interface](/vscode_docs/getstarted/userinterface) - A quick orientation around VS Code.
  [用户界面](/vscode_docs/getstarted/userinterface) - 围绕VSCode的快速向导。
* [User/Workspace Settings](/vscode_docs/getstarted/settings) - Learn how to configure VS Code to your preferences through settings.
  [User/Workspace Settings](/vscode_docs/getstarted/settings) - 了解如何通过设置按你的偏好配置VSCode。
* [Languages](/vscode_docs/languages/overview) - VS Code supports many programming languages out-of-the-box as well as many more through community created extensions.
  [Languages](/vscode_docs/languages/overview) - VS Code 支持许多开箱即用的编程语言，以及更多通过社区创造的扩展支持的语言。
