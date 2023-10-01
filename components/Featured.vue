<template>
  <div class="w-[100%] h-[auto] text-center py-20">
    <p class="font-bold text-3xl">FEATURED PRODUCTS</p>
    <ul class="mt-6 mb-10">
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="nowShowing === 'A' ? 'active' : 'non-active'"
        v-on:click="all"
      >
        ALL
      </ul>
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="nowShowing === 'B' ? 'active' : 'non-active'"
        v-on:click="onSale"
      >
        ON SALE
      </ul>
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="nowShowing === 'C' ? 'active' : 'non-active'"
        v-on:click="onSofa"
      >
        SOFA
      </ul>
      <ul
        class="inline-block mx-4 font-bold cursor-pointer px-1"
        :class="nowShowing === 'D' ? 'active' : 'non-active'"
        v-on:click="onHang"
      >
        HANGING LIGHT{{ showing }}
      </ul>
    </ul>
    <div class="w-[68rem] h-[auto] my-16 mx-[auto] overflow-hidden">
      <All v-if="nowShowing === 'A'" />
      <OnSale v-if="nowShowing === 'B'" />
      <Sofa v-if="nowShowing === 'C'" />
      <HangingLight v-if="nowShowing === 'D'" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Featured",
  data() {
    return {
      nowShowing: "A",
      active: "active",
    };
  },
  methods: {
    all() {
      this.nowShowing = "A";
    },
    onSale() {
      this.nowShowing = "B";
    },
    onSofa() {
      this.nowShowing = "C";
    },
    onHang() {
      this.nowShowing = "D";
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