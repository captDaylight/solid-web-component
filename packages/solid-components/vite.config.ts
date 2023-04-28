import { defineConfig } from "vite";
import solidPlugin from "vite-plugin-solid";
import path from "node:path";
import dts from "vite-plugin-dts";
import copy from "rollup-plugin-copy";

export default defineConfig(({ mode }) => {
  const isProduction = mode === "production";

  return {
    plugins: [
      solidPlugin(),
      dts({
        insertTypesEntry: true,
      }),
      isProduction &&
        copy({
          targets: [{ src: "src", dest: "dist" }],
        }),
    ].filter(Boolean),
    build: {
      lib: {
        entry: path.resolve(__dirname, "src/index.ts"),
        name: "components",
        fileName: "index",
      },
      target: "esnext",
      rollupOptions: {
        external: ["solid-js"],
      },
    },
  };
});
