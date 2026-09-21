<script setup lang="ts">
import LocaleChanger from "@/components/LocaleChanger.vue";
import { Route } from "@/router/routes.enum";
</script>

<template>
  <div class="app-layout">
    <header class="app-header">
      <div class="brand">
        <RouterLink :to="{ name: Route.Home }" class="logo-link">
          🛍️ E-Commerce Web
        </RouterLink>
      </div>

      <nav class="main-nav">
        <RouterLink :to="{ name: Route.Home }">{{ $t("home") }}</RouterLink>
        <RouterLink :to="{ name: Route.Products }">{{
          $t("products")
        }}</RouterLink>
        <RouterLink :to="{ name: Route.Cart }">{{ $t("cart") }}</RouterLink>
        <RouterLink :to="'/404'">{{ $t("404") }}</RouterLink>
      </nav>

      <div class="header-tools">
        <LocaleChanger />
      </div>
    </header>

    <main class="app-main">
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.app-layout {
  max-width: 1100px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
}

.app-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  border-bottom: 1px solid #e2e8f0;
  margin-bottom: 1.5rem;

  .brand .logo-link {
    font-size: 1.25rem;
    font-weight: 700;
    color: #2d3748;
    text-decoration: none;
  }

  .main-nav {
    display: flex;
    gap: 1.25rem;

    a {
      text-decoration: none;
      color: #4a5568;
      font-weight: 500;
      transition: color 0.2s;

      &:hover,
      &.router-link-active {
        color: #4fc08d;
        font-weight: 700;
      }
    }
  }
}

.app-main {
  min-height: 60vh;
}
</style>
