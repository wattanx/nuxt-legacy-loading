import { defineNuxtModule, addPlugin, createResolver } from "@nuxt/kit";

// Module options TypeScript interface definition
export interface ModuleOptions {}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: "@wattanx/nuxt-legacy-loading",
    configKey: "legacyLoading",
  },
  defaults: {},
  setup(options, nuxt) {
    const resolver = createResolver(import.meta.url);

    addPlugin(resolver.resolve("./runtime/plugin"));
  },
});

declare module "#app" {
  interface NuxtApp {
    $nuxt: {
      $loading: {
        start: () => void;
        finish: () => void;
      };
    };
  }
}
