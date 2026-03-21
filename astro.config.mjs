import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  // GitHub Pages project site
  site: "https://brightfuturesnetwork.com",
base: "/",
  integrations: [sitemap()],
});