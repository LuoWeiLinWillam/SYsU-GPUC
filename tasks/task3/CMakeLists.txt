# find LLVM
find_package(LLVM REQUIRED)

aux_source_directory(task3 SRC_LIST)
add_executable(task3 ${SRC_LIST})

target_include_directories(task3 PRIVATE ${LLVM_INCLUDE_DIRS})
target_link_libraries(task3 ${LLVM_LIBS})
