<template>
  <div>
    <div
      class="py-10 pl-12 pr-24 flex justify-between border-2 border-gray-400"
    >
      <NuxtLink to="/">
        <div class="w-[200px] h-[50px]">
          <img class="w-[100%] h-[100%]" src="/img/logo.png" alt="furnitur-logo" />
        </div>
      </NuxtLink>
      <div class="w-[auto] h-[auto] p-[0.125rem] flex flex-row mt-2">
        <transition name="option">
          <div
            v-if="showMenu"
            class="w-[23.75rem] h-10 p-[0.3125rem] relative top-0"
          >
            <ul class="flex">
              <li class="navi"><NuxtLink to="/">HOME</NuxtLink></li>
              <li class="navi">
                SHOP
                <Icon
                  name="ic:outline-expand-more"
                  size="1.5em"
                  color="black"
                  class="pb-1"
                />
              </li>
              <li class="navi">BLOG</li>
              <li class="navi">ABOUT US</li>
            </ul>
          </div>
        </transition>
        <div v-if="showMenu" class="w-[15.5rem] h-10 p-[0.3125rem]">
          <ul class="flex">
            <li class="navi">
              <Icon
                name="ic:outline-favorite-border"
                size="1.2em"
                color="black"
                class="pb-1"
              />LOVE
            </li>
            <li class="navi">
              <NuxtLink to="/CartPage"
                >
                <Icon
                  name="ic:outline-shopify"
                  size="1.4em"
                  color="black"
                  class="pb-1"
                />
                CART</NuxtLink
              >
            </li>
            <li class="navi cursor-pointer" v-on:click="search">
              <Icon
                name="ic:outline-search"
                size="1.5em"
                color="black"
                class="pb-1"
              />
            </li>
          </ul>
        </div>
        <div v-if="!showMenu" class="w-[100%] h-10 flex justify-around">
          <div
            class="border-2 border-gray-400 rounded-sm flex w-[100%] justify-around"
          >
            <div
              class="border-2w-[1.7rem] h-[1.7rem] rounded-full cursor-pointer mt-[0.3125rem] pt-1 bg-gray-300"
              v-on:click="menu"
            >
              <Icon
                name="ic:twotone-search-off"
                size="1.5em"
                color="black"
                class="pb-1"
              />
            </div>
            <div class="border w-[28.125rem] h-[2.187rem] relative">
              <input
                v-on:input="search"
                v-model="searchText"
                type="text"
                placeholder="search..."
                class="w-[100%] h-8 indent-4 focus:outline outline-gray-400"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      v-show="showSearch"
      class="border-2 border-gray-700 w-[100%] h-[auto] p-4 z-50 bg-gray-100 absolute"
    >
      <p
        v-for="product in filteredProducts"
        :key="product.id"
        v-on:click="searched"
        class="cursor-pointer leading-6"
      >
        <NuxtLink :to="`/every-products/${product.id}`">{{
          product.productName
        }}</NuxtLink>
      </p>
      <p>{{ searchText }}</p>
    </div>
    <CartBoard />
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "Navbar",
  data() {
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
      searchText: "",
      allProducts,
      everyProducts,
      showMenu: true,
      showSearch: false,
    };
  },
  methods: {
    search() {
      this.showMenu = false;
      this.showSearch = true;
    },
    searched() {
      this.showSearch = false;
    },
    menu() {
      this.showMenu = true;
      this.showSearch = false;
    },
  },
  computed: {
    filteredProducts() {
      return this.everyProducts.filter((product) =>
        product.productName
          .toLowerCase()
          .includes(this.searchText.toLowerCase())
      );
    },
  },
};
</script>

<style>
.option-enter-from {
  opacity: 0;
  top: 20px;
}
.option-enter-to {
  opacity: 1;
  top: 0px;
}
.option-enter-active {
  transition: all 0.5s ease;
}
</style>