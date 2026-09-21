import { defineConfig } from "cypress";

export default defineConfig({
  video: false,
  screenshotOnRunFailure: false,
  fixturesFolder: "tests/fixtures",
  screenshotsFolder: "tests/screenshots",
  videosFolder: "tests/videos",
  downloadsFolder: "tests/downloads",
  e2e: {
    baseUrl: "http://localhost:8261",
    specPattern: "tests/e2e/**/*.cy.ts",
    supportFile: "tests/support/e2e.ts",
  },
  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        optimizeDeps: {
          include: ["pinia", "vue", "vue-i18n", "vue-router"],
        },
      },
    },
    indexHtmlFile: "tests/support/component-index.html",
    supportFile: "tests/support/component.ts",
    specPattern: "src/**/__tests__/*.cy.ts",
  },
});
