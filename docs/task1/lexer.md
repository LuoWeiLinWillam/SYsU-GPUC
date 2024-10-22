# 词法分析

词法分析的目的在于将输入的源代码字符流按照语言的规范解析为 Token 流， 以用于后续进一步的解析。同时词法分析还能在编译早期就检查一些格式错误。

## 原理

词法分析器一个字符一个字符的读入源码，然后基于设定好的状态机，将字符序列识别为指定类型的 Token, 在这个过程中，词法分析器还会给出 Token 所在源码中的位置，相关上下文等信息，用于后续的错误处理。

词法分析器可以在解析 Token 的过程中发现源码中的格式错误，包括：

- 非法的标识符
- 非法的字面量
- 非法的符号
- 等等

同时词法分析器一般不会发现一个错误就停止解析，而是会从错误状态恢复，从而在一遍运行中收集尽可能多的错误信息。

## 实现

为了方便词法分析器的实现，我们采用 flex 或 antlr 来辅助实现词法分析器，我们也鼓励从零实现词法分析器。最终我们期望词法分析器能输出类似下面的内容：

```plain
int 'int'        [StartOfLine]  Loc=<.\main.cu:1:1>
identifier '__host__'    [LeadingSpace] Loc=<.\main.cu:1:5>
identifier 'main'        [LeadingSpace] Loc=<.\main.cu:1:14>
l_paren '('             Loc=<.\main.cu:1:18>
r_paren ')'             Loc=<.\main.cu:1:19>
l_brace '{'      [LeadingSpace] Loc=<.\main.cu:1:21>
return 'return'  [StartOfLine] [LeadingSpace]   Loc=<.\main.cu:3:3>
numeric_constant '0'     [LeadingSpace] Loc=<.\main.cu:3:10>
semi ';'                Loc=<.\main.cu:3:11>
r_brace '}'      [StartOfLine]  Loc=<.\main.cu:4:1>
eof ''          Loc=<.\main.cu:4:2>
```

