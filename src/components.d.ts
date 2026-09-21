/* eslint-disable @typescript-eslint/no-explicit-any */
import "vue";
import "@vue/runtime-core";

declare module "vue" {
  interface ComponentCustomProperties {
    $t: (key: string, ...args: any[]) => string;
    $i18n: {
      locale: string;
      availableLocales: string[];
      fallbackLocale: string;
      [key: string]: any;
    };
  }
}

declare module "@vue/runtime-core" {
  export interface GlobalComponents {
    RouterLink: typeof import("vue-router")["RouterLink"];
    RouterView: typeof import("vue-router")["RouterView"];
  }

  export interface ComponentCustomProperties {
    $t: (key: string, ...args: any[]) => string;
    $i18n: {
      locale: string;
      availableLocales: string[];
      fallbackLocale: string;
      [key: string]: any;
    };
  }
}

export {};
