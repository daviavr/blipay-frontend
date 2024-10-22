import { configDefaults, defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
    exclude: [...configDefaults.exclude, '.direnv/**'],
    coverage: {
      exclude: [...configDefaults.exclude, '.direnv/**'],
    },
  },
});
