FROM archlinux:base-devel
RUN pacman -Syu --noconfirm llvm lldb gdb clang antlr4 antlr4-runtime flex bear bison cmake ninja cuda cuda-tools cudnn hipify-clang python helix neovim vim p7zip git lld

ENV NVIDIA_VISIBLE_DEVICES=all
ENV NVIDIA_DRIVER_CAPABILITIES=compute,utility

ENV PATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/opt/cuda/bin:/opt/cuda/nsight_compute:/opt/cuda/nsight_systems/bin:/usr/lib/jvm/default/bin:/usr/bin/site_perl:/usr/bin/vendor_perl:/usr/bin/core_perl:/opt/rocm/bin
ENV LIBRARY_PATH=/opt/cuda/lib:/opt/cuda/lib64
ENV CUDA_PATH=/opt/cuda
ENV NVCC_CCBIN='/usr/bin/g++-13'
