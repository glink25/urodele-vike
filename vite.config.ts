import md from "unplugin-vue-markdown/vite";
import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import { fileURLToPath } from "url";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    vike({
      prerender: {

      }
    }),
    vue({
      include: [/\.vue$/],
    }),
    md({}),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./", import.meta.url)),
    },
  },
});
