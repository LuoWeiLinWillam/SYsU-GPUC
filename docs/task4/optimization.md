# 中间代码优化

中间的代码优化在整个编译流程中发挥着重要的作用，一个编译器不仅仅简单的将源代码编译为目标机器代码，而是会进行很多优化，以提升编译产出的目标代码在相应硬件上的执行效率。

一般的针对 CPU 的中间代码优化方法可以对GPU生效，但考虑到其硬件架构的差异，存在一些额外的中间代码优化方式。

## 内存空间分析（Memory space analysis）

### 原理

在 GPU 设备上存在层级的内存结构，不同类型的内存的之间存在差异，同时也有针对不同内存优化的访存指令。在实际的使用中，当编译器无法决定地址所指向的内存空间的类型时，会使用通用的访存指令。如果此时的地址所指的内存为特殊内存则会触发内存类型转换，从而增大GPU的开销。

### 实现

内存空间分析依赖前向数据流分析，其核心通过单调转移函数，将程序中的表达式的状态从未初始化状态，逐步转移到特定的内存空间，最终达到终止点。

**分析过程**：

1. **初始化**： 将所有表达式的内存空间状态设置为**⊤**。
2. **前向传播**： 从已知的内存空间出发，逐步分析数据依赖和控制依赖，将内存空间信息向前传播。
3. **状态合并**： 当遇到指针赋值或函数调用时，由于指针逃逸，无法确定其指向的内存空间，因此将状态合并为**⊥**。
4. **固定点**： 当所有表达式的状态不再变化时，分析结束。

## 线程相关性分析

### 原理

在 CUDA 中，同一 warp 中的线程执行相同的指令。但如果指令依赖于线程特有的数据，例如线程 ID 或原子操作的结果，则可能导致线程之间的数据相关性（即线程相关性）。线程相关性会导致 warp 中的线程在执行时出现分支，从而降低性能。

### 实现

线程相关性分析的目标是识别程序中哪些指令是线程相关的，哪些是线程无关的。分析过程主要分为两个步骤：

1. **初始状态设定**： 假设所有指令都是线程无关的，并将线程特有的数据（如线程 ID）和原子操作的结果标记为线程相关。
2. **前向传播**： 从标记为线程相关的数据出发，分析数据依赖和控制依赖，将线程相关性信息向前传播。

##  内存访问向量化

### 原理

GPU 支持将多个线程的内存访问合并为单个向量访问，从而提高访存效率。例如，可以将两个相邻的 32 位加载操作合并为一个 64 位向量加载操作，从而减少访存次数和内存访问延迟。

### 实现

内存访问向量化在编译器的代码生成阶段进行，主要步骤如下：

1. **查找向量化候选**： 在基本块中查找相邻且地址连续的内存访问指令。
2. **检查向量化条件**： 确认没有其他指令会破坏向量化候选的寄存器和内存。
3. **形成向量访问**： 将符合条件的内存访问指令合并为一个向量访问指令。
