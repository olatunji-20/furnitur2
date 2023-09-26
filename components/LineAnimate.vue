<template>
  <div>
    <div class="w-[100%] h-[auto] pt-8 mb-12">
      <div
        class="w-[70%] h-[0.625rem] mx-[auto] flex justify-between relative top-[0.375rem]"
      >
        <div class="w-[0.75rem] h-[0.75rem] rounded-full bg-gray-600"></div>
        <div class="w-[0.75rem] h-[0.75rem] rounded-full bg-gray-600"></div>
        <div class="w-[0.75rem] h-[0.75rem] rounded-full bg-gray-600"></div>
        <div class="w-[0.75rem] h-[0.75rem] rounded-full bg-gray-600"></div>
      </div>

      <div class="line">
        <div :class="stage"></div>
      </div>

      <div class="w-[80%] h-[auto] mx-[auto] flex justify-between">
        <div class="border border-gray-100 w-[12.5rem] h-[7.8rem] shadow-md">
          <div
            class="bg-gray-100 w-[3rem] h-[3rem] mx-[auto] my-[0.3125rem] pt-1 rounded-full"
          >
            <Icon name="ic:sharp-shopping-cart" size="2.5em" color="#404040" />
          </div>
          <h1 class="font-bold">CART</h1>
          <p class="text-sm">Review all your product and edit the number.</p>
        </div>
        <div class="border border-gray-100 w-[12.5rem] h-[7.8rem] shadow-md">
          <div
            class="bg-gray-100 w-[3rem] h-[3rem] mx-[auto] my-[0.3125rem] pt-1 rounded-full"
          >
            <Icon name="ic:outline-co-present" size="2.5em" color="#404040" />
          </div>
          <h1 class="font-bold">CUSTOMER INFO.</h1>
          <p class="text-sm">Add your name, phone number and address.</p>
        </div>
        <div class="border border-gary-100 w-[12.5rem] h-[7.8rem] shadow-md">
          <div
            class="bg-gray-100 w-[3rem] h-[3rem] mx-[auto] my-[0.3125rem] pt-1 rounded-full"
          >
            <Icon
              name="ic:sharp-emoji-transportation"
              size="2.5em"
              color="#404040"
            />
          </div>
          <h1 class="font-bold">SHIPPING & PAYMENT</h1>
          <p class="text-sm">With many payment methods, include yours.</p>
        </div>
        <div class="border border-gray-100 w-[12.5rem] h-[7.8rem] shadow-md">
          <div
            class="bg-gray-100 w-[3rem] h-[3rem] mx-[auto] my-[0.3125rem] pt-1 rounded-full"
          >
            <Icon
              name="ic:round-content-paste-search"
              size="2.5em"
              color="#404040"
            />
          </div>
          <h1 class="font-bold">REVIEW</h1>
          <p class="text-sm">View all your information before confirmation.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stage: String,
  },
};
</script>

<style>
.line {
  background: #b3b3b3;
  width: 70%;
  height: 0.25rem;
  margin: 0px auto 1rem;
}
.stage1 {
  width: 25%;
  height: 0.25rem;
  background: #4d4d4d;
  animation: animate1 1s ease-in;
}
.stage2 {
  width: 50%;
  height: 0.25rem;
  background: #4d4d4d;
  animation: animate2 1s ease-in;
}
.stage3 {
  width: 75%;
  height: 0.25rem;
  background: #4d4d4d;
  animation: animate3 1s ease-in;
}
.stage4 {
  width: 100%;
  height: 0.25rem;
  background: #4d4d4d;
  animation: animate4 1s ease-in;
}
@keyframes animate1 {
  0% {
    width: 0%;
  }
  100% {
    width: 25%;
  }
}
@keyframes animate2 {
  0% {
    width: 25%;
  }
  100% {
    width: 50%;
  }
}
@keyframes animate3 {
  0% {
    width: 50%;
  }
  100% {
    width: 75%;
  }
}
@keyframes animate4 {
  0% {
    width: 75%;
  }
  100% {
    width: 100%;
  }
}
</style>