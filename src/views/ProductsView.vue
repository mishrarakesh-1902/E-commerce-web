<script setup lang="ts">
import { ref } from "vue";

interface ProductItem {
  id: number;
  title: string;
  price: number;
  category: string;
  rating: number;
}

const products = ref<ProductItem[]>([
  {
    id: 1,
    title: "Wireless Noise-Canceling Headphones",
    price: 199.99,
    category: "Electronics",
    rating: 4.8,
  },
  {
    id: 2,
    title: "Ergonomic Mechanical Keyboard",
    price: 129.5,
    category: "Accessories",
    rating: 4.6,
  },
  {
    id: 3,
    title: "Smart Fitness Watch Ultra",
    price: 249.0,
    category: "Wearables",
    rating: 4.9,
  },
  {
    id: 4,
    title: "4K Ultra-HD Monitor 27-inch",
    price: 349.99,
    category: "Displays",
    rating: 4.7,
  },
]);
</script>

<template>
  <div class="products-view" data-cy="products-view">
    <h2>{{ $t("products") }}</h2>
    <div class="products-grid">
      <div
        v-for="product in products"
        :key="product.id"
        class="product-card"
        data-cy="product-card"
      >
        <div class="product-info">
          <span class="category-badge">{{ product.category }}</span>
          <h3>{{ product.title }}</h3>
          <div class="product-meta">
            <span class="price">${{ product.price.toFixed(2) }}</span>
            <span class="rating">⭐ {{ product.rating }}</span>
          </div>
        </div>
        <button class="add-to-cart-btn" data-cy="add-to-cart-btn">
          {{ $t("add_to_cart") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.products-view {
  padding: 1.5rem 0;

  h2 {
    margin-bottom: 1.5rem;
  }
}

.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

.product-card {
  border: 1px solid #e2e8f0;
  border-radius: 8px;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.2s, box-shadow 0.2s;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .category-badge {
    display: inline-block;
    font-size: 0.75rem;
    text-transform: uppercase;
    color: #646cff;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  h3 {
    font-size: 1.1rem;
    margin: 0 0 0.75rem 0;
  }

  .product-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    .price {
      font-size: 1.25rem;
      font-weight: 700;
      color: #2d3748;
    }

    .rating {
      font-size: 0.9rem;
      color: #718096;
    }
  }

  .add-to-cart-btn {
    width: 100%;
    padding: 0.5rem 1rem;
    background-color: #646cff;
    color: white;
    border: none;
    border-radius: 4px;
    font-weight: 600;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #535bf2;
    }
  }
}
</style>
