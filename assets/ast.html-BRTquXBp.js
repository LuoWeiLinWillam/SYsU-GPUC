import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,b as n,o as t}from"./app-D4QNsgVA.js";const l={};function e(h,s){return t(),a("div",null,s[0]||(s[0]=[n(`<h1 id="语法与语义分析" tabindex="-1"><a class="header-anchor" href="#语法与语义分析"><span>语法与语义分析</span></a></h1><p>语法分析与语义分析的目的在于将 Token 流解析为一个语法与语义单元，这节实验的最终的目标是生成一棵语义正确的抽象语法（AST），并生成抽象语法图（ASG）用于下游任务。</p><h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理"><span>原理</span></a></h2><p>对于上下文无关文法，实现语法分析的方法一般递归下降法或者 LALR 法，前者利用递归调用子程序的方法来解析语法，而后者根据事先构建的状态机来解析语法。语法分析的过程会检查出程序中的语法错误，例如错误的表达式写法，错误的函数定义等。</p><p>单纯的对程序进行语法分析并不能保证程序的语义正确，所以还需要进行语义分析，语义分析一般在 AST 上进行，检查变量的错误类型，检查变量的未定义等问题，对于不同的关注点可以运行多遍的语义检查，也可以在一遍里进行。</p><p>此外在语法与语义检查的过程中，需要进行错误的收集和处理，如何尽可能的在一遍运行中给出程序中的错误，也是语法与语义分析实现过程中的难点。</p><h2 id="实现" tabindex="-1"><a class="header-anchor" href="#实现"><span>实现</span></a></h2><p>为了方便语法与语义分析的实现，我们采用 Bison 和 anltr 来辅助实现。当然我们鼓励学生自主的实现语法与语义分析器。最终我们期望语法与语义分析器给出类似于这样的输出：</p><div class="language-json line-numbers-mode" data-highlighter="shiki" data-ext="json" data-title="json" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">{</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;id&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;0x1c9f45b1338&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;kind&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;FunctionDecl&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;loc&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;offset&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;file&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;.</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">\\\\</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">main.cu&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;line&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;col&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;tokLen&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;range&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;begin&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;offset&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;col&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;tokLen&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;end&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;offset&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">25</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;line&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;col&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">      &quot;tokLen&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;name&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;mangledName&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;test&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;type&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">    &quot;qualType&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;double ()&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  },</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">  &quot;inner&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: [</span><span style="--shiki-light:white;--shiki-dark:#FFFFFF;">...</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9)]))}const d=i(l,[["render",e],["__file","ast.html.vue"]]),r=JSON.parse('{"path":"/task2/ast.html","title":"语法与语义分析","lang":"zh-CN","frontmatter":{"description":"语法与语义分析 语法分析与语义分析的目的在于将 Token 流解析为一个语法与语义单元，这节实验的最终的目标是生成一棵语义正确的抽象语法（AST），并生成抽象语法图（ASG）用于下游任务。 原理 对于上下文无关文法，实现语法分析的方法一般递归下降法或者 LALR 法，前者利用递归调用子程序的方法来解析语法，而后者根据事先构建的状态机来解析语法。语法分析...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/SYsU-GPUC/task2/ast.html"}],["meta",{"property":"og:site_name","content":"SYsU-GPC 实验文档"}],["meta",{"property":"og:title","content":"语法与语义分析"}],["meta",{"property":"og:description","content":"语法与语义分析 语法分析与语义分析的目的在于将 Token 流解析为一个语法与语义单元，这节实验的最终的目标是生成一棵语义正确的抽象语法（AST），并生成抽象语法图（ASG）用于下游任务。 原理 对于上下文无关文法，实现语法分析的方法一般递归下降法或者 LALR 法，前者利用递归调用子程序的方法来解析语法，而后者根据事先构建的状态机来解析语法。语法分析..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-10-22T11:33:01.000Z"}],["meta",{"property":"article:modified_time","content":"2024-10-22T11:33:01.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"语法与语义分析\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-10-22T11:33:01.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"LuoWeiLinWillam\\",\\"url\\":\\"https://github.com/LuoWeiLinWillam\\"}]}"]]},"headers":[{"level":2,"title":"原理","slug":"原理","link":"#原理","children":[]},{"level":2,"title":"实现","slug":"实现","link":"#实现","children":[]}],"git":{"createdTime":1729596781000,"updatedTime":1729596781000,"contributors":[{"name":"Yurzi","email":"yurzi@foxmail.com","commits":1}]},"readingTime":{"minutes":1.51,"words":454},"filePathRelative":"task2/ast.md","localizedDate":"2024年10月22日","autoDesc":true}');export{d as comp,r as data};
