<template>
  <div>
    <transition name="popup">
      <div v-show="showPop" class="w-[90%] h-[4.375rem] absolute mx-[auto] z-20">
        <div
          class="border-2 border-gray-300 rounded-sm bg-gray-100 text-center py-8 w-[60%] h-[auto] mx-[auto]"
        >
          <h1 class="font-bold">
            {{ number }} {{ productName }} has been added to your cart
          </h1>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    showPop: Boolean,
    productName: String,
    number: Number,
  },
};
</script>

<style>
.popup-enter-from,
.popup-leave-to {
  opacity: 0;
}
.popup-enter-to,
.popup-leave-from {
  opacity: 1;
}
.popup-enter-active,
.popup-leave-active {
  transition: all 0.5s linear;
}
</style>