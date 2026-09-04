import { defineConfig } from "vite";

export default defineConfig({
  build: {
    // 内联所有 SVG 图标（最大单个文件 <16KB），消除 ~60 个独立小图请求，
    // 并让它们跟随内容哈希后的 JS bundle 被浏览器永久强缓存。
    assetsInlineLimit: 64 * 1024,
  },
});
