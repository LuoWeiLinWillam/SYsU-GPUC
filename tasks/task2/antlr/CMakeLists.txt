
find_package(ANTLR REQUIRED)

if(NOT ${ANTLR_FOUND})
  message(FATAL_ERROR "ANTLR not found")
endif()

antlr_target(task2-antlr ${CMAKE_CURRENT_SOURCE_DIR}/parser.g4 LEXER)

aux_source_directory(${CMAKE_CURRENT_SOURCE_DIR}/../common COMMON_SRC)
aux_source_directory(${CMAKE_CURRENT_SOURCE_DIR} SRC_LIST)

add_executable(task2 ${SRC_LIST} ${COMMON_SRC} ${ANTLR_task2-antlr_CXX_OUTPUTS})
target_link_libraries(task2 antlr4_static)
target_include_directories(task2 PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/../common ${ANTLR_task2-antlr_OUTPUT_DIR})
