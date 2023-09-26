<template>
  <div>
    <div class="w-100 h-[auto] flex flex-wrap justify-between">
      <!-- <form> -->
      <input
        class="border-b border-gray-400 focus:outline outline-gray-600 w-[48%] mt-4 text-sm py-3"
        placeholder="Your name"
        type="text"
      />
      <input
        class="border-b border-gray-400 focus:outline outline-gray-600 w-[48%] mt-4 text-sm py-3"
        placeholder="E-mail"
        type="email"
      />
      <input
        class="border-b border-gray-400 focus:outline outline-gray-600 w-[100%] mt-4 text-sm py-3"
        placeholder="Phone number"
        type="tel"
      />
      <input
        class="border-b border-gray-400 focus:outline outline-gray-600 w-[48%] mt-4 text-sm py-3"
        placeholder="Password"
        type="password"
      />
      <input
        class="border-b border-gray-400 focus:outline outline-gray-600 w-[48%] mt-4 text-sm py-3"
        placeholder="Retype password"
        type="password"
      />
      <NuxtLink to="/Customer">
        <button class="px-24 py-4 mt-12 text-white bg-green-600">
          Create an account
        </button>
      </NuxtLink>
      <!-- </form> -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>