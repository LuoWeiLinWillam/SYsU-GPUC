# 环境准备

本实验的主要目的在于确保每位学生都能够配置好实验环境。学生首先需要在自己的设备上安装 VS Code 和 Docker，并配置 Docker 使其能够访问设备显卡。

##  Docker 配置

## 安装

### 配置 WSL

对于 Windows 10/11 系统，首先需要在系统安装 WSL 来为安装 Docker 提供先决环境。可以使用以下命令一键安装 WSL。

```powershell
wsl --install
```

在安装结束后，将打开 Linux 用户名和密码设置的界面，请输入自己喜欢的用户名和密码。

###  安装 Docker Desktop

对于 Windows 10/11 系统，可以从官网下载 Docker Desktop 安装包来安装，或者使用下面的命令通过包管理器 `winget` 安装。

```powershell
winget install Docker.DockerDesktop
```



## VS Code 配置

###  安装

对于使用 Windows 10/11 系统，可以直接通过[官网下载](https://code.visualstudio.com/) VS Code 安装包，或者使用下面的命令通过包管理器 `winget` 安装。

```powershell
winget install Microsoft.VisualStudioCode
```

### 配置

在 VS Code 的拓展页面，安装「Remote Development」拓展包，以配置远程开发环境。
