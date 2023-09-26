<template>
  <div
    class="border border-gray-600 bg-gray-50 fixed top-0 right-0 bottom-0 left-0 z-50 flex justify-center items-center"
  >
    <div
      class="border border-gray-400 w-[31.25rem] h-[25rem] rounded-md bg-gray-300 text-center pt-12"
    >
      <h4>Do you want to remove this item from your cart?</h4>
      <div class="w-[25rem] mx-auto my-40 flex justify-between">
        <div
          @click="modal"
          class="w-[9.375rem] rounded-lg bg-red-500 text-white py-2 cursor-pointer"
        >
          <p>Cancel</p>
        </div>
        <div class="w-[9.375rem] rounded-lg">
          <RemoveCart :id="id" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",
  props: {
    id: Number,
  },
  methods: {
    modal() {
      this.$emit("dont-show");
    },
  },
  emits: ["dont-show"],
};
</script>

<style scoped>
</style>