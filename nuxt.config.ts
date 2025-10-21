// https://nuxt.com/docs/api/configuration/nuxt-config

import "./app/lib/env";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "shadcn-nuxt",
    "@nuxt/eslint",
    "@pinia/nuxt",
  ],
  eslint: {
    config: {
      standalone: false,
    },
  },
  shadcn: {
    prefix: "",
    componentDir: "./components/ui",
  },
  components: {
    dirs: [
      "~/components",
      {
        path: "~/components/ui",
        global: false,
        pathPrefix: false,
        extensions: ["vue"],
        ignore: ["**/index.ts"], // 👈 prevents double imports
      },
    ],
  },
  runtimeConfig: {
    public: {
      baseUrl: process.env.NUXT_PUBLIC_API_BASE,
      dbConnectionString: process.env.CONNECTION_STRING,
    },
  },
});