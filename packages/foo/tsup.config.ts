import { defineConfig } from "tsup";

export default defineConfig({
	outDir: "dist",
	entry: ["./src/index.ts"],
	format: "esm",
	clean: true,
	splitting: false,
});
