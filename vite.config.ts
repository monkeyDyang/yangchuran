import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueRouter from "unplugin-vue-router/vite";
import Components from "unplugin-vue-components/vite";

export default defineConfig({
  plugins: [
    VueRouter({
      dts: "src/typed-router.d.ts",
    }),
    // ⚠️ Vue must be placed after VueRouter()
    vue(),
    Components({ dts: "src/components.d.ts" })],
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
  build: {
    rollupOptions: {
      output: {
        chunkFileNames: "static/js/[name]-[hash].js",
        entryFileNames: "static/js/[name]-[hash].js",
        assetFileNames: "static/[ext]/[name]-[hash].[ext]",
      },
    },
  },
});
