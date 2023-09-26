<template>
  <div class="text-center py-20">
    <h1 class="font-bold text-4xl">SHIPPING & PAYMENT</h1>
    <LineAnimate stage="stage2" />
    <div class="w-[100%] h-[auto] flex justify-around pt-24 pb-12 px-32">
      <div class="w-[60%] h-[auto]">
        <h1 class="text-left font-bold text-2xl">YOUR INFORMATION</h1>
        <ShippingForm />
      </div>
      <div class="shadow-lg p-2 w-[35%] h-[auto]">
        <h2 class="text-left font-bold text-2xl">YOUR ORDER</h2>
        <div class="w-[100%] h-[auto] text-left mt-8">
          <p>Review all the products you want to buy.</p>
          <SecondCart
            link="/Register"
            linkText="CONTINUE TO SHOPPING"
            :showShip="false"
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