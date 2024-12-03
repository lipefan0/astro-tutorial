// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://resonant-pegasus-30acc2.netlify.app/",
  integrations: [preact()]
});