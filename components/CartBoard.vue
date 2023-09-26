<template>
  <div v-if="cart.length">
    <div
      class="border w-[3.75rem] h-[3.75rem] bg-gray-400 absolute right-8 top-8 rounded-full pt-2"
    >
      <NuxtLink to="/CartPage">
        <Icon name="ic:baseline-add-shopping-cart" size="2em" color="black" />
        <h4
          class="inline px-2 text-white text-xl bg-gray-900 rounded-full relative left-6 bottom-3"
        >
          {{ cart.length }}
        </h4>
      </NuxtLink>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  setup() {
    const productsStore = useProductsStore();

    const cart = productsStore.cartItems;
    return {
      cart,
    };
  },
};
</script>

<style>
</style>