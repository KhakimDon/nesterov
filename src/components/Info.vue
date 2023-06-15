<script>
export default {
  data() {
    return {
      steps: {
        section: true,
        flat: false,
        apartament: false,
        selection: false,
      },
      idx: 0,
    };
  },
  methods:{
    changeImg(){
        this.idx = event.target.value
    }
  }
};
</script>

<script setup>
</script>



<template>
  <div class="mt-[0px] w-[80%] pt-[56px] mx-auto min-h-[400px]">
    <h2 class="text-[72px] font-[100] text-[#441D06]">Квартиры</h2>
    <div class="h-[30px]">Главная - Квартиры</div>

    <div class="min-h-[755px] mt-[31px]">
      <nav class="flex justify-between">
        <div
          :class="{ active: this.steps.section }"
          class="text-[#A2A2A2] h-[90px]"
        >
          <span class="text-[24px] font-[300] uppercase cursor-pointer"
            >Выбор секции</span
          >
          <div v-if="this.steps.section">
            <select
            @mouseenter="changeImg()" 
            @change="changeImg()"
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]"
            >
              <option @mouseenter="changeImg()" class="text-[#441D06] hover:bg-[#441D06]" value="0">
                Выбор секции
              </option>
              <option @mouseenter="changeImg()" class="text-[#441D06] hover:bg-[#441D06]" value="1">
                Секция 1
              </option>
              <option @mouseenter="changeImg()" class="text-[#441D06] hover:bg-[#441D06]" value="2">
                Секция 2
              </option>
              <option @mouseenter="changeImg()" class="text-[#441D06] hover:bg-[#441D06]" value="3">
                Секция 3
              </option>
              <option @mouseenter="changeImg()" class="text-[#441D06] hover:bg-[#441D06]" value="4">
                Секция 4
              </option>
            </select>
          </div>
        </div>
        <div
          :class="{ active: this.steps.flat }"
          class="text-[#A2A2A2] h-[90px]"
        >
          <span class="text-[24px] font-[300] uppercase cursor-pointer"
            >Выбор этажа</span
          >
          <div v-if="this.steps.flat">
            <select
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]"
            >
              <option class="text-[#441D06]" value="">lalala</option>
              <option class="text-[#441D06]" value="">lalala</option>
              <option class="text-[#441D06]" value="">lalala</option>
            </select>
          </div>
        </div>
        <div
          :class="{ active: this.steps.apartament }"
          class="text-[#A2A2A2] h-[90px]"
        >
          <span class="text-[24px] font-[300] uppercase cursor-pointer"
            >Выбор квартиры на этаже</span
          >
          <div v-if="this.steps.apartament">
            <select
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]"
            >
              <option class="text-[#441D06]" value="">lalala</option>
              <option class="text-[#441D06]" value="">lalala</option>
              <option class="text-[#441D06]" value="">lalala</option>
            </select>
          </div>
        </div>
        <div
          :class="{ active: this.steps.selection }"
          class="text-[#A2A2A2] h-[90px]"
        >
          <span class="text-[24px] font-[300] uppercase cursor-pointer"
            >Подбор квартиры</span
          >
          <div v-if="this.steps.selection">
            <select
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]"
            >
              <option class="text-[#441D06]" value="">lalala</option>
              <option class="text-[#441D06]" value="">lalala</option>
              <option class="text-[#441D06]" value="">lalala</option>
            </select>
          </div>
        </div>
      </nav>        
      <div class="w-[100%] h-[755px] mb-[200px]">
        <img id="photo" :src="`src/assets/img/${this.idx}.png`"  alt="" />
        <button class="flex items-center translate-y-[-50%] float-right bg-[#FF9900] text-white px-[40px] py-[10px]">
            <span class="text-[20px]">ДАЛЕЕ</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-[50px] ml-[10px] h-[50px]"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.active {
}
.active span {
  color: #441d06;
  font-weight: 400;
}
</style>