# 中间代码生成

在完成了词法分析、语法分析和语义分析后，我们最终得到的抽象语法图（ASG），有了 ASG 就可以开始利用 LLVM 工具链来实现最终到可执行代码的转换了。为此我们需要从 ASG 生成中间代码，即LLVM IR。

## 原理

中间代码的生成可以通过递归下降的方式来进行，由于已经获得了 ASG 结构，所以可以通过递归的调用图上每个节点的中间代码生成子程序来生成 LLVM IR。对于每个节点来说，其生成中间代码所需要的信息也是不同的，同时一写节点间存在上下文关联，但是 LLVM 提供了 IRBuilder 类来辅助生成 LLVM IR。

## 实现

我们希望学生能够利用 LLVM 提供的工具从输入的 ASG 中生成类似于下的 LLVM IR。当然我们鼓励学生自主设计自己生成方式或者设计自己的 IR。

```llvm
define dso_local noundef double @test() #1 {
  %1 = alloca double, align 8
  store f64 0.00000e+00, ptr %1, align 8
  ret f64 0
}
```

