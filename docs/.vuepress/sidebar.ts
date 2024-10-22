import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "lang_spec.md",
    {
      "text": "实验0 环境准备",
      "prefix": "/task0/",
      "collapsible": true,
      "children": [
        "environment.md",
      ],
    },
    {
      "text": "实验1 词法分析器",
      "prefix": "/task1/",
      "collapsible": true,
      "children": [
        "lexer.md"
      ]
    },
    {
      "text": "实验2 语法与语义分析",
      "prefix": "/task2/",
      "collapsible": true,
      "children": [
        "ast.md"
      ]
    },
    {
      "text": "实验3 中间代码生成",
      "prefix": "/task3/",
      "collapsible": true,
      "children": [
        "ir.md"
      ]
    },
    {
      "text": "实验4 中间代码优化",
      "prefix": "/task4/",
      "collapsible": true,
      "children": [
        "optimization.md"
      ]
    }
  ],
});
