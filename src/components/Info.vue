  <script>
import { mapGetters } from "vuex";
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
      idx2: 0,

      eventSection: {
        img: 'src/assets/img/0.png'
      },
      eventFlat: {
        img: 'src/assets/img/1-0.png'
      },
      eventApartament: {
        img: 'src/assets/img/rooms/room0.png'
      }
    };
  },
  computed: {
    ...mapGetters(["sections"]),
  },
  mounted() {
    
  },
  methods: {
    chooseApartament(){
      console.log('asd');
    },
    changeSection(){
      this.eventSection = this.sections.filter(item=> item.section_id == event.target.value)[0]
    },  
    changeFlat() {
      this.eventFlat = this.eventSection.floors.filter(item => item.floor_id == event.target.value)[0]
    },
    changeRoom() {
      this.eventApartament = this.eventFlat.rooms.filter(item => item.room_id == event.target.value)[0]
      console.log(this.eventApartament);
    }
  },
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
              @change="changeSection()"
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]"
            >
              <option hidden class="text-[#441D06] hover:bg-[#441D06]" value="0">
                Выбор секции
              </option>

              <option
                v-for="item of this.sections"
                :key="item.id"
                class="text-[#441D06] hover:bg-[#441D06]"
                :value="item.section_id"
              >
                Секция {{item.section_id }}
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
              @change="changeFlat()"
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]"
            >
              <option
              hidden
                class="text-[#441D06]"
                value="0"
              >
                Выбор этажа
              </option>
              <option
               v-for="item of this.eventSection.floors"
               :key="item.id"
                class="text-[#441D06]"
                :value="item.floor_id"
              >
                {{ item.floor }}
              </option>
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
            @change="changeRoom()"
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]"
            >
              <option hidden class="text-[#441D06]" value="">Комнаты</option>
              <option v-for="item of this.eventFlat.rooms" :key="item.id" class="text-[#441D06]" :value="item.room_id"> {{ item.room }} </option>
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


        <!-- отображение секций  -->
        <div v-if="this.steps.section">
          <img id="photo" :src="this.eventSection.img" alt="" />
          <button
            @click="(this.steps.section = false), (this.steps.flat = true)"
            class="flex items-center translate-y-[-50%] float-right bg-[#FF9900] text-white px-[40px] py-[10px]"
          >
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

        <!-- отображение этажа  -->
        <div v-if="this.steps.flat">
          <img id="photo" :src="this.eventFlat.img" alt="" />
          <button
            @click="(this.steps.flat = false), (this.steps.apartament = true)"
            class="flex items-center translate-y-[-50%] float-right bg-[#FF9900] text-white px-[40px] py-[10px]"
          >
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

        
        <!-- отображение выбора квартиры  -->
        <div v-if="this.steps.apartament">
          <img id="photo" :src="this.eventApartament.img" alt="" />
          <button
          @click="(this.steps.section = false), (this.steps.flat = true)"
            class="flex items-center translate-y-[-50%] float-right bg-[#FF9900] text-white px-[40px] py-[10px]"
          >
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