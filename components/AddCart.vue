<template>
  <div>
    <button
      class="bg-green-600 w-[100%] py-3 text-white my-0"
      @click="productsStore.addToCart({ product, number }), display()"
    >
      Add To Cart
    </button>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  setup() {
    const productsStore = useProductsStore();

    return { productsStore };
  },
  props: {
    number: Number,
    product: Object,
  },
  methods: {
    display() {
      this.$emit("show-pop");
    },
  },
};
</script>

<style>
</style>