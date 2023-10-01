<template>
  <div class="w-[100%] h-[100%] flex flex-wrap">
    <p class="text-center font-bold text-3xl">SOFA</p>
    <Card
      :link="'/sofa/'"
      :products="productsStore.sofaProds"
      :key="productsStore.sofaProds"
    />
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "Sofa",
  setup() {
    const productsStore = useProductsStore();
    productsStore.getSofa();

    return { productsStore };
  },
};
</script>

<style>
</style>