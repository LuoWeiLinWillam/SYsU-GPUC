## Flex 实现

这一部分是使用 Flex 实现词法分析器的相关内容，文件结构如下：

```plain
-- flex/
    |- CMakeLists.txt
    |- README.md
    |- main.cc
    |- token.h  // token 相关的内容
    |- lexer.l  // flex 描述文件
```

你需要在 `lexer.l` 中编写的 flex 描述文件以实现 `lexer`，同时你需要在 `token.h` 中定义 token 的类型等相关内容，并最终在 `main.cc` 文件中实现程序的入口。
