import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // GitHub Pages project site
  site: "https://howards12.github.io/BrightFuturesNetwork/",
  base: "/BrightFuturesNetwork/",
  integrations: [sitemap()],
});