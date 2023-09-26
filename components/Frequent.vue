<template>
  <div class="w-[100%] h-[auto] py-16 text-center">
    <h1 class="text-3xl font-bold">FREQUENTLY ASKED QUESTIONS</h1>
    <p class="font-bold">SOLVE ALL YOUR PROBLEMS ABOUT OUR PRODUCTS.</p>
    <div class="w-[75%] h-[auto] my-12 mx-[auto]">
      <section class="last">
        <div class="study">
          <div class="join">
            <p class="topic">1. What payment methods do you accept?</p>
            <p
              v-text="detailA ? first : second"
              v-on:click="showDetailA"
              class="icon"
            ></p>
            <transition name="detail">
              <div v-show="detailA" class="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam suscipit inventore nisi rerum quam numquam qui. Id
                  aliquid m reiciendis!
                </p>
              </div>
            </transition>
          </div>
          <div class="join">
            <p class="topic">2. Do you offer free shipping?</p>
            <p
              v-text="detailB ? first : second"
              v-on:click="showDetailB"
              class="icon"
            ></p>
            <transition name="detail">
              <div v-show="detailB" class="details">
                <p>
                  Yes, we offer free standard shipping on all orders over a
                  certain amount within the continental United States. For
                  orders below that amount or for expedited shipping options,
                  additional fees may apply.
                </p>
              </div>
            </transition>
          </div>
          <div class="join">
            <p class="topic">3. How long does it take for delivery?</p>
            <p
              v-text="detailC ? first : second"
              v-on:click="showDetailC"
              class="icon"
            ></p>
            <transition name="detail">
              <div v-show="detailC" class="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam suscipit inventore nisi rerum quam numquam qui. Id
                  aliquid m reiciendis!
                </p>
              </div>
            </transition>
          </div>
          <div class="join">
            <p class="topic">4. What is your return policy?</p>
            <p
              v-text="detailD ? first : second"
              v-on:click="showDetailD"
              class="icon"
            ></p>
            <transition name="detail">
              <div v-show="detailD" class="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam suscipit inventore nisi rerum quam numquam qui. Id
                  aliquid m reiciendis!
                </p>
              </div>
            </transition>
          </div>
          <div class="join">
            <p class="topic">
              5. Do you offer assembly or installation services?
            </p>
            <p
              v-text="detailE ? first : second"
              v-on:click="showDetailE"
              class="icon"
            ></p>
            <transition name="detail">
              <div v-show="detailE" class="details">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam suscipit inventore nisi rerum quam numquam qui. Id
                  aliquid m reiciendis!
                </p>
              </div>
            </transition>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      first: "-",
      second: "+",
      detailA: false,
      detailB: false,
      detailC: false,
      detailD: false,
      detailE: false,
    };
  },
  components: {},
  methods: {
    showDetailA() {
      this.detailA = !this.detailA;
      this.detailB = false;
      this.detailC = false;
      this.detailD = false;
      this.detailE = false;
    },
    showDetailB() {
      this.detailB = !this.detailB;
      this.detailA = false;
      this.detailC = false;
      this.detailD = false;
      this.detailE = false;
    },
    showDetailC() {
      this.detailC = !this.detailC;
      this.detailB = false;
      this.detailA = false;
      this.detailD = false;
      this.detailE = false;
    },
    showDetailD() {
      this.detailD = !this.detailD;
      this.detailB = false;
      this.detailC = false;
      this.detailA = false;
      this.detailE = false;
    },
    showDetailE() {
      this.detailE = !this.detailE;
      this.detailB = false;
      this.detailC = false;
      this.detailA = false;
      this.detailD = false;
    },
  },
};
</script>
  
  <style>
.last {
  width: 100%;
  height: auto;
}
.study {
  width: 70%;
  height: auto;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
}
.join {
  border: 1px solid gray;
  border-radius: 0.1875rem;
  box-shadow: 1px 1px 1px gray;
  width: 90%;
  height: auto;
  margin: 1rem auto;
  padding: 0.125rem 1.25rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  text-align: left;
  transition: 0.4s;
}
.join:hover {
  border: 1px solid red;
}
.join .topic {
  font-weight: bolder;
  width: 90%;
}
.join .icon {
  width: auto;
  cursor: pointer;
  font-size: 1.25rem;
  font-weight: bolder;
}
@keyframes detail {
  0% {
    height: 0rem;
  }
  100% {
    height: 6.25rem;
  }
}
.details {
  border-radius: 5px;
  width: 100%;
  height: 6.25rem;
  display: block;
  overflow: hidden;
  padding: 0.1875rem 0.8rem;
  animation-name: detail;
  animation-duration: 0.3s;
}

.detail-leave-from {
  height: 6.25rem;
}
.detail-leave-to {
  height: 0rem;
}
.detail-leave-active {
  transition: height 0.2s linear;
}
</style>