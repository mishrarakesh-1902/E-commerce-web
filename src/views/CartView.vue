<script setup lang="ts">
import { ref } from "vue";
import { Route } from "@/router/routes.enum";

interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}

const cartItems = ref<CartItem[]>([
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    quantity: 1,
  },
]);

const totalPrice = () => {
  return cartItems.value
    .reduce((acc, item) => acc + item.price * item.quantity, 0)
    .toFixed(2);
};
</script>

<template>
  <div class="cart-view" data-cy="cart-view">
    <h2>{{ $t("cart") }}</h2>

    <div v-if="cartItems.length === 0" class="empty-cart">
      <p>{{ $t("empty_cart") }}</p>
      <RouterLink :to="{ name: Route.Products }">{{
        $t("products")
      }}</RouterLink>
    </div>

    <div v-else class="cart-content">
      <div class="cart-items">
        <div v-for="item in cartItems" :key="item.id" class="cart-row">
          <div class="item-name">{{ item.title }}</div>
          <div class="item-qty">Qty: {{ item.quantity }}</div>
          <div class="item-price">
            ${{ (item.price * item.quantity).toFixed(2) }}
          </div>
        </div>
      </div>

      <div class="cart-summary">
        <div class="total-row">
          <span>Total:</span>
          <strong>${{ totalPrice() }}</strong>
        </div>
        <button class="checkout-btn" data-cy="checkout-btn">
          {{ $t("checkout") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-view {
  padding: 1.5rem 0;

  .empty-cart {
    padding: 2rem;
    text-align: center;
    color: #718096;
  }

  .cart-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    border-bottom: 1px solid #e2e8f0;
  }

  .cart-summary {
    margin-top: 2rem;
    padding: 1.5rem;
    background-color: #f7fafc;
    border-radius: 8px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .total-row {
      font-size: 1.25rem;
    }

    .checkout-btn {
      padding: 0.75rem 1.5rem;
      background-color: #48bb78;
      color: white;
      border: none;
      border-radius: 4px;
      font-weight: 700;
      cursor: pointer;
      transition: background-color 0.2s;

      &:hover {
        background-color: #38a169;
      }
    }
  }
}
</style>
