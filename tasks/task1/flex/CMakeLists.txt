# find flex
find_package(FLEX REQUIRED)
if(NOT FLEX_FOUND)
  message(FATAL_ERROR "Flex not found!")
endif()

# use flex to generate lexer
flex_target(task1-flex
  ${CMAKE_CURRENT_SOURCE_DIR}/lexer.l
  ${CMAKE_CURRENT_BINARY_DIR}/lexer.cc
  COMPILE_FLAGS ""
  DEFINES_FILE ${CMAKE_CURRENT_BINARY_DIR}/lexer.hh
)

aux_source_directory(${CMAKE_CURRENT_SOURCE_DIR} SRC_LIST)

add_executable(task1 ${SRC_LIST} ${FLEX_lexer_OUTPUTS})
target_include_directories(task1 PRIVATE ${CMAKE_CURRENT_BINARY_DIR} ${CMAKE_CURRENT_SOURCE_DIR})
