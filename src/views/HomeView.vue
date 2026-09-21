<script setup lang="ts">
import { useProductQuery } from "@/queries/useProductQuery";
import { Route } from "@/router/routes.enum";

/**
 * To test an HTTP response status code simply pass the code to the method argument
 * eg: @method useProductQuery(404);
 */
const { isLoading, isError, data } = useProductQuery();
</script>

<template>
  <div class="home-view">
    <h1>{{ $t("welcome") }}</h1>
    <p :aria-busy="isLoading">
      <TransitionGroup name="content">
        <span key="loading" v-if="isLoading"> {{ $t("loading") }}</span>
        <div key="error" v-if="isError">{{ $t("error") }}</div>
        <span key="not-loading" data-cy="home-content" v-else>{{
          data?.message
        }}</span>
      </TransitionGroup>
    </p>

    <div class="cta-actions">
      <RouterLink :to="{ name: Route.Products }" class="cta-btn">
        {{ $t("products") }}
      </RouterLink>
      <RouterLink :to="{ name: Route.Cart }" class="cta-btn secondary">
        {{ $t("cart") }}
      </RouterLink>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-view {
  padding: 1rem 0;
}

.cta-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;

  .cta-btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    background-color: #4fc08d;
    color: white;
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s;

    &:hover {
      opacity: 0.85;
    }

    &.secondary {
      background-color: #646cff;
    }
  }
}

.content-move,
.content-enter-active {
  transition: all 0.5s ease;
}

.content-leave-active {
  transition-duration: 0.25s;
}

.content-enter-from,
.content-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.content-leave-active,
.content-enter-active {
  position: absolute;
}
</style>
