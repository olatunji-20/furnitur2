<template>
  <div class="w-[100%] h-[100%] flex flex-wrap">
    <p class="text-center font-bold text-3xl">HANGING</p>
    <Card
      :link="'/hanging-light/'"
      :products="productsStore.hangProds"
      :key="productsStore.hangProds"
    />
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "HangingLight",
  setup() {
    const productsStore = useProductsStore();
    productsStore.getHang();

    return { productsStore };
  },
};
</script>

<style>
</style>