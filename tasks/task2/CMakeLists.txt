if(TASK2_WITH STREQUAL "bison")
  message(AUTHOR_WARNING "使用 Flex 完成实验一")
  add_subdirectory(bison)

elseif(TASK2_WITH STREQUAL "antlr")
  message(AUTHOR_WARNING "使用 ANTLR 完成实验一")
  add_subdirectory(antlr)

else()
  message(FATAL_ERROR "无效的 TASK2_WITH 取值：${TASK2_WITH}")

endif()

