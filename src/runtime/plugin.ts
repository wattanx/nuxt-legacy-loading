import { defineNuxtPlugin, useLoadingIndicator } from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
  const { start, finish } = useLoadingIndicator();

  return {
    provide: {
      loading: {
        start,
        finish,
      },
    },
  };
});
