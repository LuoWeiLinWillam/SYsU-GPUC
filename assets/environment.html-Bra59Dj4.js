import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,b as t,o as a}from"./app-D4QNsgVA.js";const r={};function n(l,e){return a(),s("div",null,e[0]||(e[0]=[t('<h1 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备"><span>环境准备</span></a></h1><p>本实验的主要目的在于确保每位学生都能够配置好实验环境。学生首先需要在自己的设备上安装 VS Code 和 Docker，并配置 Docker 使其能够访问设备显卡。</p><h2 id="docker-配置" tabindex="-1"><a class="header-anchor" href="#docker-配置"><span>Docker 配置</span></a></h2><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><h3 id="配置-wsl" tabindex="-1"><a class="header-anchor" href="#配置-wsl"><span>配置 WSL</span></a></h3><p>对于 Windows 10/11 系统，首先需要在系统安装 WSL 来为安装 Docker 提供先决环境。可以使用以下命令一键安装 WSL。</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">wsl </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">--</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">install</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在安装结束后，将打开 Linux 用户名和密码设置的界面，请输入自己喜欢的用户名和密码。</p><h3 id="安装-docker-desktop" tabindex="-1"><a class="header-anchor" href="#安装-docker-desktop"><span>安装 Docker Desktop</span></a></h3><p>对于 Windows 10/11 系统，可以从官网下载 Docker Desktop 安装包来安装，或者使用下面的命令通过包管理器 <code>winget</code> 安装。</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">winget install Docker.DockerDesktop</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="vs-code-配置" tabindex="-1"><a class="header-anchor" href="#vs-code-配置"><span>VS Code 配置</span></a></h2><h3 id="安装-1" tabindex="-1"><a class="header-anchor" href="#安装-1"><span>安装</span></a></h3><p>对于使用 Windows 10/11 系统，可以直接通过<a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">官网下载</a> VS Code 安装包，或者使用下面的命令通过包管理器 <code>winget</code> 安装。</p><div class="language-powershell line-numbers-mode" data-highlighter="shiki" data-ext="powershell" data-title="powershell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">winget install Microsoft.VisualStudioCode</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><p>在 VS Code 的拓展页面，安装「Remote Development」拓展包，以配置远程开发环境。</p>',17)]))}const h=i(r,[["render",n],["__file","environment.html.vue"]]),c=JSON.parse('{"path":"/task0/environment.html","title":"环境准备","lang":"zh-CN","frontmatter":{"description":"环境准备 本实验的主要目的在于确保每位学生都能够配置好实验环境。学生首先需要在自己的设备上安装 VS Code 和 Docker，并配置 Docker 使其能够访问设备显卡。 Docker 配置 安装 配置 WSL 对于 Windows 10/11 系统，首先需要在系统安装 WSL 来为安装 Docker 提供先决环境。可以使用以下命令一键安装 WSL...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/SYsU-GPUC/task0/environment.html"}],["meta",{"property":"og:site_name","content":"SYsU-GPC 实验文档"}],["meta",{"property":"og:title","content":"环境准备"}],["meta",{"property":"og:description","content":"环境准备 本实验的主要目的在于确保每位学生都能够配置好实验环境。学生首先需要在自己的设备上安装 VS Code 和 Docker，并配置 Docker 使其能够访问设备显卡。 Docker 配置 安装 配置 WSL 对于 Windows 10/11 系统，首先需要在系统安装 WSL 来为安装 Docker 提供先决环境。可以使用以下命令一键安装 WSL..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-22T11:33:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-22T11:33:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"环境准备\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-22T11:33:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LuoWeiLinWillam\\",\\"url\\":\\"https://github.com/LuoWeiLinWillam\\"}]}"]]},"headers":[{"level":2,"title":"Docker 配置","slug":"docker-配置","link":"#docker-配置","children":[]},{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"配置 WSL","slug":"配置-wsl","link":"#配置-wsl","children":[]},{"level":3,"title":"安装 Docker Desktop","slug":"安装-docker-desktop","link":"#安装-docker-desktop","children":[]}]},{"level":2,"title":"VS Code 配置","slug":"vs-code-配置","link":"#vs-code-配置","children":[{"level":3,"title":"安装","slug":"安装-1","link":"#安装-1","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]}]}],"git":{"createdTime":1729596781000,"updatedTime":1729596781000,"contributors":[{"name":"Yurzi","email":"yurzi@foxmail.com","commits":1}]},"readingTime":{"minutes":0.92,"words":275},"filePathRelative":"task0/environment.md","localizedDate":"2024年10月22日","autoDesc":true}');export{h as comp,c as data};
