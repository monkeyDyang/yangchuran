import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/userBusiness": {
        target: "http://192.168.0.104:13191", // 实际请求地址
        changeOrigin: true,
        rewrite: path => path.replace(/^\/userBusiness/, ""),
      },
    },
  },
});
