import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://howards12.github.io/BrightFuturesNetwork",
  base: "/BrightFuturesNetwork",
  integrations: [sitemap()],
});