# 语言设定

为了简便和充分的利用现有的 Clang/LLVM 工具链，SYsU-GPUC 将基于 CUDA C，并在这之上做出自己的简化和修改。

## 编程范式与模型

SYsU-GPUC 将使用过程式编程范式和简化沿用 CUDA C 的 CUDA 编程模型。具体的说，SYsU-GPUC 中的基本编程单元只有函数，同时只支持编写 CUDA 编程模型中的核函数（kernel）和设备函数（device）。

再者，SYsU-GPUC 在 CUDA 线程级上只使用单点操作，这意味着在每个函数将不具备分支与循环。

## 数据类型

SYsU-GPUC 认为有三类数据类型：标量类型（Scalar Type）、张量类型（Tensor Type）和指针类型（Pointer Type）。

### 标量类型

- double: 64位浮点标量

### 张量类型

- double [N]: 64位浮点张量，其中长度N在形式参数声明时可省略。

### 指针类型

- double*: 64位浮点指针类型

## 运算

为了简便，SYsU-GPUC 进行的运算均是逐元素计算，这意味对张量进行二元计算时，张量的必须长度相等，并进行逐元素的计算。

### 单操作数运算

- 取反(-)： -scalar, -tensor
- 取地址(&): &scalar
- 取值(*): *pointer

### 双操作数运算

- 加法(+)：scalar + scalar, scalar + tensor, tensor + tensor (the same size, elementwise)
- 减法(-): scalar - scalar, scalar - tensor, tensor - tensor (the same size, elementwise)
- 乘法(_): scalar _ scalar, scalar _ tensor, tensor _ tensor (the same size, elementwise)
- 除法(/): scalar / scalar, scalar / scalar, tensor / tensor (the same size, elementwise)

## 数据的内存类型

- `__shared__`: 线程块共享内存
- `__local__`: 局部内存
- `__global__`: 全局内存
- `__constant__`: 常量内存

## 函数类型

SYsU-GPUC 有两种类型的函数，设备函数与核函数，使用下列标识符来标明函数类型。

- `__device__`: 设备函数
- `__global__`: 核函数

## 样例

这里给出使用 SYsU-GPUC 语言编写程序的样例。

```c
double __device__ calc_square_diff(double a, double b) {
  double e = a - b;
  double e2 = e * e;
  return e2;
}

void __global__ calc_mse(doubel len, double *a, double *b, double *c, double *d) {
  double idx = threadId.x;    // built-in thread id for cuda
  double e2 = calc_square_diff(a[idx], b[idx]);
  double me2[len] =  e2 * c;
  double me2h[len] = me2 * 0.5;
  
  d = sqrt(me2h);
  
  return;
}
```

