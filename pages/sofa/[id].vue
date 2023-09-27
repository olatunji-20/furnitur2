<template>
  <div>
    <div>
      <ProductCard :product="productsStore.product" />
    </div>
    <Reviews />
    <Best />
    <Trusted />
    <Frequent />
  </div>
</template>

<script>
import { useProductsStore } from "../../stores/ProductsStore";

export default {
  setup() {
    const productsStore = useProductsStore();

    return { productsStore };
  },
  async mounted() {
    const id = useRoute().params.id;

    const productsStore = useProductsStore();

    await productsStore.getSofaProduct(id);
  },
};
</script>

<style>
</style>