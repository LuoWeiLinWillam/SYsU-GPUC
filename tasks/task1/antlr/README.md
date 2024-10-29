## Antlr 实现

这一部分是关于使用 Antlr 来实现的词法分析器的内容。对于使用 Antlr 你只需要关注 `main.cc` 和 `lexer.g4` 文件就好了。

```plain
-- antlr/
    |- CMakeLists.txt
    |- README.md
    |- main.cc
    |- lexer.g4
```

其中 lexer.g4 是 Antlr 的描述文件，你需要在其中定义词法规则。main.cc 是程序的入口，你需要在其中调用 Antlr 进行词法分析。
