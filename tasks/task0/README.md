# 任务0: 实验环境准备

本任务的目的在于确认你的环境配置好，可以正常的构建、运行和提交。

我们假定你现在已经处于 Docker 环境中，并在项目的根目录创建了 build 文件夹。

你可以在 VS Code 中的 CMake 侧边栏找到 `task0` 目标来构建程序。

你也可以在项目的根目录处执行以下命令进行构建

```sh
# 生成构建系统配置，并指定使用 Ninja 进行构建
cmake -B build -G Ninja

# 构建 task0
cmake --build build -t task0
```
