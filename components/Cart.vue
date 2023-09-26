<template>
  <div>
    <div class="shadow-lg w-[100%] h-[auto] flex justify-between wrap">
      <div class="w-[60%] min-h-[1.875rem] max-h-[40rem] overflow-auto">
        <div
          class="border border-gray-200 shadow-md bg-gray-50 w-[100%] h-[12.5rem] flex justify-between mb-4"
          v-for="c in cartProducts"
          :key="c.id"
        >
          <div class="w-[30%] h-[100%]">
            <img
              class="w-[100%] h-[100%] object-cover"
              :src="c.image"
              :alt="c.productName"
            />
          </div>
          <div class="w-[64%] h-[100%] text-left pt-2">
            <p class="font-bold text-xl inline">{{ c.productName }}</p>
            <div
              v-on:click="prepModal(c.id)"
              class="bg-gray-200 inline float-right mr-4 cursor-pointer"
            >
              <p class="font-bold text-2xl">&#x2715;</p>
            </div>
            <div class="h-[1.5625rem] w-[9.375rem] my-2">
              <star-rating
                :rating="c.rating"
                :star-style="starStyle"
              ></star-rating>
            </div>
            <p class="font-bold">${{ c.price }}</p>
            <div
              class="mr-4 w-[9.375rem] h-[2.5rem] bg-gray-200 flex justify-around float-right rounded-md"
            >
              <span
                class="text-2xl font-bold mx-4 cursor-pointer"
                @click="c.quantity--"
                >-</span
              >
              <input
                v-model="c.quantity"
                class="inputer w-[3.125rem] font-bold bg-gray-200 text-xl text-center"
                type="number"
                :placeholder="number"
              />
              <span
                class="text-2xl font-bold mx-4 cursor-pointer"
                @click="c.quantity++"
                >+</span
              >
            </div>
            <br />
            <br />
            <p class="font-bold text-2xl float-right mr-10">
              ${{ (c.price * c.quantity).toFixed(2) }}
            </p>
          </div>
        </div>
      </div>
      <div class="w-[35%] h-[100%] py-12">
        <div class="shadow-lg w-[80%] h-[auto] mx-[auto] text-left">
          <h1 class="font-bold text-2xl">ORDER SUMMARY</h1>
          <p class="mt-4 mb-12 text-sm">
            Apply your monthly voucher to get more discount!
          </p>
          <p class="py-4">
            Price:
            <span class="font-bold text-xl float-right"
              >${{ total.toFixed(2) }}</span
            >
          </p>
          <p class="py-4">
            Discount:
            <span class="font-bold text-xl float-right text-red-500"
              >{{ discount }}%</span
            >
          </p>
          <p class="py-4">
            Total Price:
            <span class="font-bold text-2xl float-right text-green-600"
              >${{ (total - (discount / 100) * total).toFixed(2) }}</span
            >
          </p>

          <NuxtLink to="/Shipping"
            ><button class="bg-red-700 w-[100%] py-2 text-white mt-16">
              PROCEED TO CHECKOUT
            </button></NuxtLink
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import StarRating from "vue-dynamic-star-rating";

export default {
  setup() {
    return {
      number: 1,
      starStyle: {
        fullStarColor: "#ed8a19",
        emptyStarColor: "#737373",
        starWidth: 18,
        starHeight: 18,
      },
      discount: 10,
    };
  },
  props: {
    cartProducts: Array,
    total: Number,
  },
  methods: {
    prepModal(id) {
      console.log("ffff ", id);
      this.$emit("show-modal", id);
    },
  },
  emits: ["show-modal"],
  components: { StarRating },
  watch: {
    number(val) {
      if (val <= 0) {
        this.number = 1;
      }
    },
  },
};
</script>

<style scoped>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>