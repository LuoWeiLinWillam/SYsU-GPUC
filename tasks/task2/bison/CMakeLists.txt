
# find_package(FLEX REQUIRED)
# if(NOT FLEX_FOUND)
#   message(FATAL_ERROR "Flex not found!")
# endif()

find_package(BISON REQUIRED)
if(NOT BISON_FOUND)
  message(FATAL_ERROR "Bison not found!")
endif()


# # use flex to generate lexer
# flex_target(task2-flex
#   ${CMAKE_CURRENT_SOURCE_DIR}/lexer.l
#   ${CMAKE_CURRENT_BINARY_DIR}/lexer.cc
#   COMPILE_FLAGS ""
#   DEFINES_FILE ${CMAKE_CURRENT_BINARY_DIR}/lexer.hh
# )

bison_target(task2-bison
  ${CMAKE_CURRENT_SOURCE_DIR}/parser.y
  ${CMAKE_CURRENT_BINARY_DIR}/parser.y.cc
  DEFINES_FILE ${CMAKE_CURRENT_BINARY_DIR}/parser.y.hh
)

aux_source_directory(${CMAKE_CURRENT_SOURCE_DIR}/../common/ COMMON_SRC)
aux_source_directory(${CMAKE_CURRENT_SOURCE_DIR} SRC_LIST)

# add_executable(task2 ${SRC_LIST} ${FLEX_task2-flex_OUTPUTS} ${BISON_task2-bison_OUTPUTS})
add_executable(task2 ${SRC_LIST} ${COMMON_SRC} ${BISON_task2-bison_OUTPUTS})
target_include_directories(task2 PRIVATE ${CMAKE_CURRENT_SOURCE_DIR}/../common ${CMAKE_CURRENT_BINARY_DIR} ${CMAKE_CURRENT_SOURCE_DIR})
