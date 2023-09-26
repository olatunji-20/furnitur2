<template>
  <div class="text-center py-20">
    <h1 class="font-bold text-4xl">REVIEW AND CONFIRMATION</h1>
    <LineAnimate stage="stage4" />
    <div class="w-[100%] h-[auto] py-20">
      <div class="w-[85%] h-[auto] mx-auto flex justify-between">
        <div
          class="shadow-lg border border-yellow-500 w-[60%] h-[600px] text-left"
        >
          <h1 class="font-bold text-2xl">SHIPPING INFORMATION</h1>
          <p>Please check before you finalize your order.</p>
          <hr class="border-4 border-gray-600 my-12" />
          <h1 class="font-bold text-2xl">PAYMENT METHOD</h1>
          <p>Please check before you finalize your order.</p>
        </div>
        <div class="w-[35%] h-[auto]">
          <h2 class="text-left font-bold text-2xl">YOUR ORDER</h2>
          <div class="shadow-md w-[100%] h-[auto] text-left mt-8">
            <p>Review the products you want to buy.</p>
            <SecondCart
              link="/"
              linkText="CONFIRM MY ORDER"
              :showShip="false"
            />
          </div>
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