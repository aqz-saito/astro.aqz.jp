// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroExpressiveCode from "astro-expressive-code";

export default defineConfig({
  integrations: [
    tailwind(),
    astroExpressiveCode({
      themes: ['github-dark', 'github-dark'], // もしくはお好みのテーマ
    }),
  ],
});