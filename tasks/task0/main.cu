#include<stdio.h>

void __global__ say_hello() {
  printf("Hello from thread %d\n", threadIdx.x);
}

int
main()
{
  say_hello<<<1, 10>>>();
  cudaDeviceSynchronize();
  return 0;
}
