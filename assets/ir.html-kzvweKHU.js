import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as i,o as n}from"./app-D4QNsgVA.js";const s={};function l(r,e){return n(),a("div",null,e[0]||(e[0]=[i(`<h1 id="中间代码生成" tabindex="-1"><a class="header-anchor" href="#中间代码生成"><span>中间代码生成</span></a></h1><p>在完成了词法分析、语法分析和语义分析后，我们最终得到的抽象语法图（ASG），有了 ASG 就可以开始利用 LLVM 工具链来实现最终到可执行代码的转换了。为此我们需要从 ASG 生成中间代码，即LLVM IR。</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><p>中间代码的生成可以通过递归下降的方式来进行，由于已经获得了 ASG 结构，所以可以通过递归的调用图上每个节点的中间代码生成子程序来生成 LLVM IR。对于每个节点来说，其生成中间代码所需要的信息也是不同的，同时一写节点间存在上下文关联，但是 LLVM 提供了 IRBuilder 类来辅助生成 LLVM IR。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><p>我们希望学生能够利用 LLVM 提供的工具从输入的 ASG 中生成类似于下的 LLVM IR。当然我们鼓励学生自主设计自己生成方式或者设计自己的 IR。</p><div class="language-llvm line-numbers-mode" data-highlighter="shiki" data-ext="llvm" data-title="llvm" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>define dso_local noundef double @test() #1 {</span></span>
<span class="line"><span>  %1 = alloca double, align 8</span></span>
<span class="line"><span>  store f64 0.00000e+00, ptr %1, align 8</span></span>
<span class="line"><span>  ret f64 0</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7)]))}const d=t(s,[["render",l],["__file","ir.html.vue"]]),c=JSON.parse('{"path":"/task3/ir.html","title":"中间代码生成","lang":"zh-CN","frontmatter":{"description":"中间代码生成 在完成了词法分析、语法分析和语义分析后，我们最终得到的抽象语法图（ASG），有了 ASG 就可以开始利用 LLVM 工具链来实现最终到可执行代码的转换了。为此我们需要从 ASG 生成中间代码，即LLVM IR。 原理 中间代码的生成可以通过递归下降的方式来进行，由于已经获得了 ASG 结构，所以可以通过递归的调用图上每个节点的中间代码生成...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/SYsU-GPUC/task3/ir.html"}],["meta",{"property":"og:site_name","content":"SYsU-GPC 实验文档"}],["meta",{"property":"og:title","content":"中间代码生成"}],["meta",{"property":"og:description","content":"中间代码生成 在完成了词法分析、语法分析和语义分析后，我们最终得到的抽象语法图（ASG），有了 ASG 就可以开始利用 LLVM 工具链来实现最终到可执行代码的转换了。为此我们需要从 ASG 生成中间代码，即LLVM IR。 原理 中间代码的生成可以通过递归下降的方式来进行，由于已经获得了 ASG 结构，所以可以通过递归的调用图上每个节点的中间代码生成..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-22T11:33:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-22T11:33:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"中间代码生成\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-22T11:33:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LuoWeiLinWillam\\",\\"url\\":\\"https://github.com/LuoWeiLinWillam\\"}]}"]]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1729596781000,"updatedTime":1729596781000,"contributors":[{"name":"Yurzi","email":"yurzi@foxmail.com","commits":1}]},"readingTime":{"minutes":0.95,"words":285},"filePathRelative":"task3/ir.md","localizedDate":"2024年10月22日","autoDesc":true}');export{d as comp,c as data};