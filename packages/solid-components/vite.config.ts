import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import { resolve } from "path";
import copy from "rollup-plugin-copy";

export default defineConfig({
  plugins: [
    solidPlugin(),
    copy({
      targets: [{ src: "src", dest: "dist" }],
    }),
  ],
  server: {
    port: 3000,
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "components",
      fileName: "index",
    },
    target: "esnext",
    rollupOptions: {
      external: ["solid-js"],
    },
  },
});
