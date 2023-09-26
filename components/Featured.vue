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
        HANGING LIGHT
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
// import All from "~/components/All";
// import OnSale from "~/components/OnSale";
// import Sofa from "~/components/Sofa";
// import HangingLight from "~/components/HangingLight";

export default {
  name: "Featured",
  data() {
    return {
      showA: true,
      showB: false,
      showC: false,
      showD: false,
      active: "active",
    };
  },
  methods: {
    all() {
      this.showA = true;
      this.showB = false;
      this.showC = false;
      this.showD = false;
    },
    onSale() {
      this.showA = false;
      this.showB = true;
      this.showC = false;
      this.showD = false;
    },
    onSofa() {
      this.showA = false;
      this.showB = false;
      this.showC = true;
      this.showD = false;
    },
    onHang() {
      this.showA = false;
      this.showB = false;
      this.showC = false;
      this.showD = true;
    },
  },
  components: {
    // All,
    // OnSale,
    // Sofa,
    // HangingLight,
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