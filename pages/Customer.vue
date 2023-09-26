<template>
  <div class="text-center py-12">
    <h1 class="font-bold text-4xl">CUSTOMER INFORMATION</h1>
    <LineAnimate stage="stage3" />
    <div class="w-[100%] h-[auto] flex justify-around p-24">
      <div class="shadow-lg py-2 w-[60%] h-[auto] text-left">
        <h1 class="font-bold text-2xl">SHIPPING SERVICE</h1>
        <p>Choose one best shipping service across your needs.</p>
        <ServiceForm />
      </div>
      <div class="w-[35%] h-[auto]">
        <h2 class="text-left font-bold text-2xl">YOUR ORDER</h2>
        <div class="shadow-md py-4 w-[100%] h-[auto] text-left mt-8">
          <p>Review all the products you want to buy.</p>
          <SecondCart
            link="/Review"
            linkText="REVIEW YOUR ORDER"
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