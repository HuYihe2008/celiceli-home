import { defineUserConfig } from "vuepress";
import theme from "./theme.js";



export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "CeliCeli's Home",
  description: "Celiceli的官方站点",

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});

