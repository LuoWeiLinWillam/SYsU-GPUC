import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/SYsU-GPUC/",

  lang: "zh-CN",
  title: "SYsU-GPC 实验文档",
  description: "SYsU-GPUC 的文档",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
