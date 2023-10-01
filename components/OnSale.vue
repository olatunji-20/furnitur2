<template>
  <div class="w-[100%] h-[100%] flex flex-wrap">
    <Card
      :link="'/on-sale/'"
      :products="productsStore.prods"
      :key="productsStore.prods"
    />
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "Onsale",
  setup() {
    const productsStore = useProductsStore();
    productsStore.getSales();

    return { productsStore };
  },
};
</script>

<style>
</style>