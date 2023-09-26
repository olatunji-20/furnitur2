<template>
  <div class="text-center py-16">
    <h1 class="font-bold text-4xl">REGISTER TO FURNITUR</h1>
    <p class="font-bold">GET MONTHLY VOUCHER WITH JUST ONE CLICK!</p>
    <!-- <LineAnimate /> -->
    <div class="w-[85%] h-[auto] my-12 mx-auto flex justify-between">
      <div class="w-[54%] h-[auto] text-left shadow-md">
        <h1 class="font-bold text-2xl">YOUR INFORMATION</h1>
        <p class="text-sm pt-4">
          You already have an account?
          <span class="underline">Sign in here</span>
        </p>
        <div class="w-100 h-[auto] mt-8">
          <RegisterForm />
        </div>
      </div>
      <div class="w-[40%] h-[25rem] relative flex justify-center bg-gray-100">
        <div class="w-[9.375rem] h-[100%] text-left pt-48">
          <div
            class="text-white bg-red-600 w-[3.125rem] py-[0.1875rem] text-center text-sm mb-4"
          >
            HOT
          </div>
          <h1 class="font-bold text-2xl">DISCOUNT 25% FOR NEW MEMBER</h1>
        </div>
        <div class="w-[12.5rem] h-[100%]">
          <img
            src="/img/hang5.png"
            class="w-[100%] h-[100%]"
            alt="hanging light"
          />
        </div>
      </div>
    </div>
    <Choose />
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>