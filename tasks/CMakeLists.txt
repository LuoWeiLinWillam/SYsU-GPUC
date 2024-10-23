macro(add_task task)
  add_subdirectory(task${task})
endmacro()

add_task(0)
add_task(1)
