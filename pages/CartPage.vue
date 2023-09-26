<template>
  <div>
    <DeleteModal @dont-show="notShow" v-show="displayModal" :id="refId" />
    <div class="text-center pt-12">
      <h1 class="font-bold text-3xl">SHOPPING CART</h1>
      <p class="font-bold my-6">
        THIS IS YOUR CART BASED ON WHAT YOU WANTED TO BUY
      </p>
      <LineAnimate stage="stage1" />
      <div class="w-[100%] h-[auto] text-center py-20">
        <div class="shadow-md w-[80%] h-[auto] mx-[auto]">
          <Cart
            @show-modal="showModal"
            :cartProducts="cart"
            :total="totalPrice()"
          />
        </div>
      </div>
      <Choose />
      <Best />
    </div>
  </div>
</template>

<script>
import { useProductsStore } from "../stores/ProductsStore";

export default {
  data() {
    const productsStore = useProductsStore();

    const cart = productsStore.cartItems;

    return {
      total: 0,
      displayModal: false,
      cart,
      refId: 0,
      starStyle: {
        fullStarColor: "#ed8a19",
        emptyStarColor: "#737373",
        starWidth: 15,
        starHeight: 15,
      },
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
    showModal(id) {
      this.displayModal = true;
      this.refId = id;
      console.log("needee-klndggjn " + id);
    },
    notShow() {
      this.displayModal = false;
    },
  },
};
</script>

<style>
</style>