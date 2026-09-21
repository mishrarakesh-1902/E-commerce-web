<script setup lang="ts">
import { Route } from "@/router/routes.enum";
</script>

<template>
  <div class="not-found-container">
    <h1>404</h1>
    <p>{{ $t("404") }}</p>
    <RouterLink :to="{ name: Route.Home }">{{ $t("home") }}</RouterLink>
  </div>
</template>

<style lang="scss" scoped>
.not-found-container {
  padding: 2rem;
  text-align: center;
}
</style>
