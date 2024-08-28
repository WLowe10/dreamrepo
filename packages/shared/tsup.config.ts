import { defineConfig } from "tsup";

export default defineConfig({
	outDir: "dist",
	entry: ["./src/**/index.{ts,tsx}"],
	format: "esm",
	clean: true,
	splitting: false,
});
