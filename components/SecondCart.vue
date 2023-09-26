<template>
  <div>
    <div class="w-[100%] h-[auto] mt-8">
      <div
        class="border border-gray-200 mx-auto w-[95%] min-h-[6.25rem] max-h-[25rem] overflow-y-auto"
      >
        <div
          class="bg-gray-100 w-[100%] h-[6.25rem] flex justify-between mb-4 cursor-pointer duration-200 hover:shadow-md"
          v-for="c in cart"
          :key="c.id"
        >
          <div class="w-[30%] h-[100%]">
            <img
              class="w-[100%] h-[100%] object-cover"
              :src="c.image"
              :alt="c.productName"
            />
          </div>
          <div class="w-[68%] h-[100%] text-left pt-1 relative">
            <p class="font-bold text-sm">{{ c.productName }}</p>
            <div class="w-[100%] h-auto absolute bottom-0">
              <div class="h-[auto] w-[6.25rem]">
                <star-rating
                  :rating="c.rating"
                  :star-style="starStyle"
                ></star-rating>
              </div>
              <p class="font-bold text-sm">${{ c.price }}</p>
            </div>
          </div>
        </div>
      </div>
      <hr class="border-2 border-gray-600 w-[95%] mx-[auto] my-2" />
      <div class="mx-auto w-[95%] h-[auto] pt-6">
        <p class="leading-10 text-gray-500 inline">
          Subtotal
          <span class="inline float-right font-bold text-black"
            >${{ totalPrice().toFixed(2) }}</span
          >
        </p>
        <p v-if="showShip" class="leading-10 text-gray-500">Shipping</p>
        <p class="leading-10 text-gray-500">
          Price
          <span class="inline float-right font-bold text-black"
            >${{ totalPrice().toFixed(2) }}</span
          >
        </p>
        <p class="leading-10 text-gray-500">
          Discount
          <span class="inline float-right font-bold text-red-500"
            >{{ discount }}%</span
          >
        </p>
        <p class="leading-10 text-gray-500">
          Total Price
          <span class="inline float-right font-bold text-2xl text-green-600"
            >${{
              (totalPrice() - (discount / 100) * totalPrice()).toFixed(2)
            }}</span
          >
        </p>
        <NuxtLink :to="link"
          ><button class="bg-red-900 w-[100%] py-2 text-white mt-16">
            {{ linkText }}
          </button></NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";
import StarRating from "vue-dynamic-star-rating";

export default {
  setup() {
    const productsStore = useProductsStore();

    const cart = productsStore.cartItems;
    return {
      cart,
      starStyle: {
        fullStarColor: "#ed8a19",
        emptyStarColor: "#737373",
        starWidth: 12,
        starHeight: 12,
      },
      discount: 10,
    };
  },
  methods: {
    totalPrice() {
      let total = 0;
      this.cart.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total;
    },
  },
  props: {
    link: String,
    linkText: String,
    showShip: Boolean,
  },
  components: { StarRating },
};
</script>

<style>
</style>