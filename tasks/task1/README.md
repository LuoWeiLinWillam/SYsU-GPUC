# 实验一：词法分析

本次实验的实验内容是实现一个简单的词法分析器。下面通过一个简单的例子来说明该实验的主要内容。

例如使用 clang 处理过的输入代码：

```cpp
void __global__ hello() {
  return;
}
  
```

在同学们完成实验一的词法分析器后。将上面这段代码输入词法分析器之后，会得到如下内容（词法分析的结果）：

```
void 'void'	 [StartOfLine]	Loc=<main.cc:1:1>
identifier '__global__'	 [LeadingSpace]	Loc=<main.cc:1:6>
identifier 'hello'	 [LeadingSpace]	Loc=<main.cc:1:17>
l_paren '('		Loc=<main.cc:1:22>
r_paren ')'		Loc=<main.cc:1:23>
l_brace '{'	 [LeadingSpace]	Loc=<main.cc:1:25>
return 'return'	 [StartOfLine] [LeadingSpace]	Loc=<main.cc:2:5>
semi ';'		Loc=<main.cc:2:11>
r_brace '}'	 [StartOfLine]	Loc=<main.cc:3:1>
eof ''		Loc=<main.cc:3:2>
```

为了简化编写词法分析器的复杂度，我们提供了 flex 和 antlr 两个工具来简化这个任务。


