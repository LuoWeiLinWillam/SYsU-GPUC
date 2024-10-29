cmake_minimum_required(VERSION 3.22)

# language standard
set(CMAKE_CXX_STANDARD 17)
set(CMAKE_CXX_STANDARD_REQUIRED TRUE)

# export compile flag
set(CMAKE_EXPORT_COMPILE_COMMANDS TRUE)

project(SYsU-GPUC LANGUAGES CXX VERSION 0.0.1)

# include config
include(config.cmake)

# include custom modules
list(APPEND CMAKE_MODULE_PATH "${CMAKE_SOURCE_DIR}/cmake")

# route to subdir
add_subdirectory(tasks)
add_subdirectory(tests)




