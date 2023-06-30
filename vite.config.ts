import path from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import VueRouter from "unplugin-vue-router/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    VueRouter({
      dts: "src/typed-router.d.ts",
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    vueJsx(),
    Components({ dts: "src/components.d.ts" })],
  resolve: {
    alias: {
      "@": "/src",
      "@assets": path.join(__dirname, "src/assets"),
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
