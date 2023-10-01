<template>
  <div class="w-[100%] h-[100%] flex flex-wrap">
    <p class="text-center font-bold text-3xl">all</p>
    <Card
      :link="'/all-products/'"
      :products="productsStore.products"
      :key="productsStore.products"
    />
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "All",
  setup() {
    const productsStore = useProductsStore();
    productsStore.getProducts();

    return { productsStore };
  },
};
</script>

<style>
</style>