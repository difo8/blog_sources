---
title: network
date: 2021-11-29 22:07:59
tags:
---
# Network Connections in Visual Studio Code——VSCode网络连接

Visual Studio Code is built on top of [Electron](https://electron.atom.io/) and benefits from all the networking stack capabilities of [Chromium](https://www.chromium.org/). This also means that VS Code users get much of the networking support available in [Google Chrome](https://www.google.com/chrome/index.html).

VSCode构建于[Electron](https://electron.atom.io/)之上且得益于[Chromium](https://www.chromium.org/)的所有网络栈能力。这也意味着VSCode用户可获得[Google Chrome](https://www.google.com/chrome/index.html)的很多可用的网络支持。

## Common hostnames——一般主机名

A handful of features within VS Code require network communication to work, such as the auto-update mechanism, querying and installing extensions, and telemetry. For these features to work properly in a proxy environment, you must have the product correctly configured.

VSCode的少数功能要求网络通信来运行，比如自动更新机制，查询和安装扩展和遥测。这些功能要正确的工作在代理环境你必须正确的配置这些产品。

If you are behind a firewall that needs to allow specific domains used by VS Code, here's the list of hostnames you should allow communication to go through:

如果你处于一个防火墙之后，这个防火墙需要允许VSCode使用的特定域名，这有一个你应该允许通过来通信的主机名列表：

* `update.code.visualstudio.com` - Visual Studio Code download and update server
  `update.code.visualstudio.com` - VSCode下载和更新服务

* `code.visualstudio.com` - Visual Studio Code documentation
  `code.visualstudio.com` - VSCode文档

* `go.microsoft.com` - Microsoft link forwarding service
  `go.microsoft.com` - 微软链接转发服务

* `vscode.blob.core.windows.net` - Visual Studio Code blob storage, used for remote server
  `vscode.blob.core.windows.net` - 用于远程服务的VSCode blob（binary large object）存储

* `marketplace.visualstudio.com` - Visual Studio Marketplace
  `marketplace.visualstudio.com` - VS市场

* `*.gallery.vsassets.io` - Visual Studio Marketplace
  `*.gallery.vsassets.io` - VS市场

* `*.gallerycdn.vsassets.io` - Visual Studio Marketplace
  `*.gallerycdn.vsassets.io` - VS市场

* `rink.hockeyapp.net` - Crash reporting service
  `rink.hockeyapp.net` - 崩溃报告服务

* `bingsettingssearch.trafficmanager.net` - In-product settings search
  `bingsettingssearch.trafficmanager.net` - 内置设置搜索

* `vscode.search.windows.net` - In-product settings search
  `vscode.search.windows.net` - 内置设置搜索

* `raw.githubusercontent.com` - GitHub repository raw file access
  `raw.githubusercontent.com` - GitHub仓库原始文件访问

* `vsmarketplacebadge.apphb.com` - Visual Studio Marketplace badge service
  `vsmarketplacebadge.apphb.com` - VS市场徽章服务

* `az764295.vo.msecnd.net` - Visual Studio Code download CDN
  `az764295.vo.msecnd.net` - VSCode下载CDN

* `download.visualstudio.microsoft.com` - Visual Studio download server, provides dependencies for some VS Code extensions (C++, C#)
  `download.visualstudio.microsoft.com` - VS下载服务，给某些VSCode扩展(C++, C#)提供依赖

* `vscode-sync.trafficmanager.net` - Visual Studio Code Settings Sync service
  `vscode-sync.trafficmanager.net` - VSCode设置同步服务

* `vscode-sync-insiders.trafficmanager.net` - Visual Studio Code Settings Sync service (Insiders)
  `vscode-sync-insiders.trafficmanager.net` - VSCode设置同步服务(内部人士)

## Proxy server support——代理服务支持

VS Code has exactly the same proxy server support as Google Chromium. Here's a snippet from [Chromium's documentation](https://www.chromium.org/developers/design-documents/network-settings):

VSCode的确有和Google Chromium一样的代理服务支持。这是来自[Chromium 文档](https://www.chromium.org/developers/design-documents/network-settings)的一个片段。

```
"The Chromium network stack uses the system network settings so that users and administrators can control the network settings of all applications easily. The network settings include:

Chromium网络栈使用系统网络设置以至于用户和管理员能够轻松控制所有应用的网络设置。这些网络设置包括：

 - proxy settings
   代理设置
 - SSL/TLS settings
   SSL/TLS设置
 - certificate revocation check settings
   证书吊销检查设置
 - certificate and private key stores"
   证书和私钥存储
```

This means that your proxy settings should be picked up automatically.

这意味着你的代理设置应该被自动获取。

Otherwise, you can use the following command-line arguments to control your proxy settings:

否则，你可以使用下面的命令行参数来控制你的代理设置：

```bash
# Disable proxy——禁止代理
--no-proxy-server

# Manual proxy address——手动代理地址
--proxy-server=<scheme>=<uri>[:<port>][;...] | <uri>[:<port>] | "direct://"

# Manual PAC address——手动PAC地址
--proxy-pac-url=<pac-file-url>

# Disable proxy per host——禁止每个主机的代理
--proxy-bypass-list=(<trailing_domain>|<ip-address>)[:<port>][;...]
```

To learn more about these command-line arguments, see [Chromium Network Settings](https://www.chromium.org/developers/design-documents/network-settings).

要了解更多命令行参数，查看[Chromium网络设置](https://www.chromium.org/developers/design-documents/network-settings)。

### Authenticated proxies——认证代理

Authenticated proxies should work seamlessly within VS Code with the addition of [PR #22369](https://github.com/microsoft/vscode/pull/22369).

随着[PR #22369](https://github.com/microsoft/vscode/pull/22369)的添加，认证过的代理应该在VSCode中无缝工作。

The authentication methods supported are:

验证方法支持：

* Basic
* Digest
* NTLM
* Negotiate

When using VS Code behind an authenticated HTTP proxy, the following authentication popup should appear:

在经过身份验证的 HTTP 代理后面使用 VS Code 时，应显示以下身份验证弹出窗口：

![proxy](proxy.png)

Note that SOCKS5 proxy authentication support isn't implemented yet; you can follow the [issue in Chromium's issue tracker](https://bugs.chromium.org/p/chromium/issues/detail?id=256785).

注意对SOCKS5代理验证支持还没有实现；你可以跟踪一下[Chromium问题追踪](https://bugs.chromium.org/p/chromium/issues/detail?id=256785)。

See [Chromium HTTP authentication](https://www.chromium.org/developers/design-documents/http-authentication) to read more about HTTP proxy authentication within VS Code.

查看[Chromium HTTP验证](https://www.chromium.org/developers/design-documents/http-authentication)了解更多关于VSCode中HTTP代理验证的信息。

### SSL certificates——SSL验证

Often HTTPS proxies rewrite SSL certificates of the incoming requests. Chromium was designed to reject responses which are signed by certificates which it doesn't trust. If you hit any SSL trust issues, there are a few options available for you:

通常，HTTPS 代理会重写传入请求的 SSL 证书。Chromium被设计为会拒绝它不信任的证书所签名的响应。如果你遇到任何SSL信任问题，这有一些可用的选项：

* Since Chromium uses the OS's certificate trust infrastructure, the preferred option is to add your proxy's certificate to your OS's trust chain. See the [Chromium Root Certificate Policy](https://www.chromium.org/Home/chromium-security/root-ca-policy) documentation to learn more.
  因为Chromium使用了操作系统的证书信任设施，所有首要选项是将你的代理证书增加到操作系统的信任链中。查看[Chromium根证书策略](https://www.chromium.org/Home/chromium-security/root-ca-policy)文档来了解更多。

* If your proxy runs in `localhost`, you can always try the [--allow-insecure-localhost](https://peter.sh/experiments/chromium-command-line-switches/#allow-insecure-localhost) command-line flag.
  如果你的代理运行在`localhost`，你始终可以试试[--allow-insecure-localhost](https://peter.sh/experiments/chromium-command-line-switches/#allow-insecure-localhost)命令行标志。

* If all else fails, you can tell VS Code to ignore all certificate errors using the [--ignore-certificate-errors](https://peter.sh/experiments/chromium-command-line-switches/#ignore-certificate-errors) command-line flag. **Warning:** This is **dangerous** and **not recommended**, since it opens the door to security issues.
  如果是任何其他的错误，你可以用[--ignore-certificate-errors](https://peter.sh/experiments/chromium-command-line-switches/#ignore-certificate-errors)命令行标志告诉VSCode忽略所有的证书错误。**警告**这是**危险**和**不建议的**，因为它打开了安全问题之门。

## Legacy proxy server support——传统代理服务支持

Extensions don't benefit yet from the same proxy support that VS Code supports. You can follow this issue's development in [GitHub](https://github.com/microsoft/vscode/issues/12588).

扩展还没有从VSCode支持的相同的代理支持中获益。你可以在[GitHub](https://github.com/microsoft/vscode/issues/12588)中跟踪问题的发展。

Similarly to extensions, a few other VS Code features don't yet fully support proxy networking, namely the CLI interface. The CLI interface is what you get when running `code --install-extension vscodevim.vim` from a command prompt or terminal. You can follow this issue's development in [GitHub](https://github.com/microsoft/vscode/issues/29910).

和扩展类似，一些其他的VSCode功能还不能完全支持代理网络，即是CLI接口。CLI接口是在运行`code --install-extension vscodevim.vim`时从命令行提示符或终端中获得的。你可以在[GitHub](https://github.com/microsoft/vscode/issues/29910)中跟踪这个问题的发展。

Due to both of these constraints, the `http.proxy`, `http.proxyStrictSSL` and `http.proxyAuthorization` variables are still part of VS Code's settings, yet they are only respected in these two scenarios.

由于所有的这些约束，`http.proxy`, `http.proxyStrictSSL` 和 `http.proxyAuthorization`变量仍然是VSCode设置中的一部分，但是他们只在这两个场景下被遵从。

## Troubleshooting——故障排除

Here are some helpful links that might help you troubleshoot networking issues in VS Code:

这是一些有帮助的链接，可以帮助你在VSCode中排除网络问题：

* [Network Settings](https://www.chromium.org/developers/design-documents/network-settings)
  [网络设置](https://www.chromium.org/developers/design-documents/network-settings)
* [Debugging problems with the network proxy](https://www.chromium.org/developers/design-documents/network-stack/debugging-net-proxy)
  [用网络代理调试问题](https://www.chromium.org/developers/design-documents/network-stack/debugging-net-proxy)
* [Configuring a SOCKS proxy server in Chrome](https://www.chromium.org/developers/design-documents/network-stack/socks-proxy)
  [在Chrome中配置SOCKS代理服务](https://www.chromium.org/developers/design-documents/network-stack/socks-proxy)
* [Proxy settings and fallback (Windows)](https://www.chromium.org/developers/design-documents/network-stack/proxy-settings-fallback)
  [代理设置和回退（Windows）](https://www.chromium.org/developers/design-documents/network-stack/proxy-settings-fallback)
