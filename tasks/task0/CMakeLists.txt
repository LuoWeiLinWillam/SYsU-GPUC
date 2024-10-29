find_package(CUDA REQUIRED)
cuda_add_executable(task0 task0.cu)
target_link_libraries(task0 ${CUDA_LIBRARIES})