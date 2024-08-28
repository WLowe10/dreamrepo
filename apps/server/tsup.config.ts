import { defineConfig } from "tsup";

export default defineConfig({
	outDir: "dist",
	entry: ["./src/main.ts"],
	format: "esm",
	splitting: false,
});
