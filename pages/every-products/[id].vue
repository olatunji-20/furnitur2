<template>
  <div>
    <div>
      <ProductCard :product="searchProduct" />
    </div>
    <Best />
    <Reviews />
    <Trusted />
    <Frequent />
  </div>
</template>

<script>
import { useProductsStore } from "../../stores/ProductsStore";

export default {
  setup() {
    const productsStore = useProductsStore();
    productsStore.getProducts();
    productsStore.getSales();
    productsStore.getSofa();
    productsStore.getHang();

    const allProducts = productsStore.products;
    const onSalesProducts = productsStore.prods;
    const sofaProducts = productsStore.sofaProds;
    const hangingLightProducts = productsStore.hangProds;

    const everyProducts = allProducts.concat(
      onSalesProducts,
      sofaProducts,
      hangingLightProducts
    );

    return {
      searchProduct: {},
      everyProducts,
    };
  },
  async created() {
    const id = useRoute().params.id;

    this.searchProduct = this.everyProducts.find((product) => product.id == id);
  },
};
</script>

<style>
</style>