find_package(ANTLR REQUIRED)

if(NOT ${ANTLR_FOUND})
  message(FATAL_ERROR "ANTLR not found")
endif()

antlr_target(task1-antlr ${CMAKE_CURRENT_SOURCE_DIR}/lexer.g4 LEXER)

add_executable(task1 main.cc ${ANTLR_task1-antlr_CXX_OUTPUTS})
target_link_libraries(task1 antlr4_static)
target_include_directories(task1 PRIVATE ${ANTLR_task1-antlr_OUTPUT_DIR})
