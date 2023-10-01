<template>
  <div class="w-[100%] h-[auto] text-center py-20">
    <p class="font-bold text-3xl">FEATURED PRODUCTS</p>
    <ul class="mt-6 mb-10">
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="showA ? 'active' : 'non-active'"
        v-on:click="all"
      >
        ALL
      </ul>
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="showB ? 'active' : 'non-active'"
        v-on:click="onSale"
      >
        ON SALE
      </ul>
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="showC ? 'active' : 'non-active'"
        v-on:click="onSofa"
      >
        SOFA
      </ul>
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="showD ? 'active' : 'non-active'"
        v-on:click="onHang"
      >
        HANGING LIGHT{{ showing }}
      </ul>
    </ul>
    <div class="w-[68rem] h-[auto] my-16 mx-[auto] overflow-hidden">
      <All v-if="showA" />
      <OnSale v-if="showB" />
      <Sofa v-if="showC" />
      <HangingLight v-if="showD" />
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  name: "Featured",
  data() {
    const productsStore = useProductsStore();
    const showing = productsStore.showThis;
    return {
      showing,
      showA: true,
      showB: false,
      showC: false,
      showD: false,
      active: "active",
    };
  },
  methods: {
    all() {
      this.showA = this.showing;
      this.showB = !this.showing;
      this.showC = !this.showing;
      this.showD = !this.showing;
    },
    onSale() {
      this.showA = !this.showing;
      this.showB = this.showing
      this.showC = !this.showing;
      this.showD = !this.showing;
    },
    onSofa() {
      this.showA = !this.showing;
      this.showB = !this.showing;
      this.showC = this.showing
      this.showD = !this.showing;
    },
    onHang() {
      this.showA = !this.showing;
      this.showB = !this.showing;
      this.showC = !this.showing;
      this.showD = this.showing
    },
  },
  emits: ["onSofa"],
};
</script>

<style>
.active {
  border-bottom: 2px solid #737373;
}
.non-active {
  border-top: 2px solid #e6e6e6;
}
</style>