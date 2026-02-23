import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://Howards12.github.io/BrightFuturesNetwork",
  integrations: [sitemap()],
});