import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig(({ command }) => ({
  site: "https://howards12.github.io/BrightFuturesNetwork",
  // GitHub Pages project site base path (only for build/preview).
  // In `astro dev`, keep base as `/` so local asset URLs resolve.
  base: command === "dev" ? "/" : "/BrightFuturesNetwork/",
  integrations: [sitemap()],
}));