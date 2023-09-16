import { defineConfig } from "tsup";

export default defineConfig({
  name: "cryptoscript",
  entry: ["src/index.ts"],
  outDir: "dist",
  format: ["esm"],
  splitting: false,
  sourcemap: false,
  dts: true,
});
