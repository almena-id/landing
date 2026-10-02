// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// A static site: `astro build` writes plain files to dist/, served as they are.
export default defineConfig({
  site: "https://almena.id",
  // The portals' typefaces, downloaded when building and served from dist/
  // (never from Google by the visitor): Chakra Petch for the brand and the
  // headings, Inter for the text, JetBrains Mono for the date.
  fonts: [
    {
      provider: fontProviders.google(),
      name: "Chakra Petch",
      cssVariable: "--font-brand",
      weights: [500, 600, 700],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "Inter",
      cssVariable: "--font-sans",
      weights: [400, 500, 600],
      subsets: ["latin"],
      fallbacks: ["system-ui", "sans-serif"],
    },
    {
      provider: fontProviders.google(),
      name: "JetBrains Mono",
      cssVariable: "--font-mono",
      weights: [400, 500],
      subsets: ["latin"],
      fallbacks: ["ui-monospace", "monospace"],
    },
  ],
});
