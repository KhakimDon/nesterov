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
      selection: 2,
      idx: 0,
      idx2: 0,
      eventSection: {
        img: "src/assets/img/0.png",
      },
      eventFlat: {
        img: "src/assets/img/1-0.png",
      },
      eventApartament: {
        img: "src/assets/img/rooms/room0.png",
      },
      eventSelections: {},
    };
  },
  computed: {
    ...mapGetters(["sections"]),
  },
  mounted() {

  },
  methods: {
    filter_finished(item) {
      this.$router.push("/property")
      this.$store.dispatch("FINISH_FILTERED", item)
    },
    chooseApartament() {
    },
    changeSection() {
      this.eventSection = this.sections.filter(
        (item) => item.section_id == event.target.value
      )[0];
    },
    changeFlat() {
      this.eventFlat = this.eventSection.floors.filter(
        (item) => item.floor_id == event.target.value
      )[0];
    },

    changeRoom() {
      this.eventApartament = this.eventFlat.rooms.filter(
        (item) => item.room_id == event.target.value
      )[0];
    },

    chalange_fix() {
      this.eventSelections = this.eventApartament;
    },
  },
};
</script>

<script setup>
</script>



<template>
  <div class="mt-[0px] w-[80%] pt-[56px] mx-auto min-h-[400px] mb-[100px]">
    <h2 class="text-[72px] font-[100] text-[#441D06]">Квартиры</h2>
    <div class="h-[30px]">Главная - Квартиры</div>

    <div class="min-h-[755px] mt-[31px]">
      <nav class="flex justify-between">
        <div :class="{ active: this.steps.section }" class="text-[#A2A2A2] h-[90px]">
          <span class="text-[24px] font-[300] uppercase cursor-pointer">Выбор секции</span>
          <div v-if="this.steps.section">
            <select @change="changeSection()"
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]">
              <option hidden class="text-[#441D06] hover:bg-[#441D06]" value="0">
                Выбор секции
              </option>

              <option v-for="item of this.sections" :key="item.id" class="text-[#441D06] hover:bg-[#441D06]"
                :value="item.section_id">
                Секция {{ item.section_id }}
              </option>
            </select>
          </div>
        </div>

        <div :class="{ active: this.steps.flat }" class="text-[#A2A2A2] h-[90px]">
          <span class="text-[24px] font-[300] uppercase cursor-pointer">Выбор этажа</span>
          <div v-if="this.steps.flat">
            <select @change="changeFlat()"
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]">
              <option hidden class="text-[#441D06]" value="0">
                Выбор этажа
              </option>
              <option v-for="item of this.eventSection.floors" :key="item.id" class="text-[#441D06]"
                :value="item.floor_id">
                {{ item.floor }}
              </option>
            </select>
          </div>
        </div>

        <div :class="{ active: this.steps.apartament }" class="text-[#A2A2A2] h-[90px]">
          <span class="text-[24px] font-[300] uppercase cursor-pointer">Выбор квартиры на этаже</span>
          <div v-if="this.steps.apartament">
            <select @change="changeRoom()"
              class="w-[100%] border-b-[1px] border-[black] border-solid bg-[transparent] cursor-pointer mt-[15px]">
              <option hidden class="text-[#441D06]" value="">
                Выбор квартиры на этаже
              </option>
              <option v-for="item of this.eventFlat.rooms" :key="item.id" class="text-[#441D06]" :value="item.room_id">
                {{ item.room }}
              </option>
            </select>
          </div>
        </div>

        <div :class="{ active: this.steps.selection }" class="text-[#A2A2A2] h-[90px]">
          <span class="text-[24px] font-[300] uppercase cursor-pointer">Подбор квартиры</span>
          <div v-if="this.steps.selection">

          </div>
        </div>
      </nav>
      <div class="w-[100%] h-[755px] ">
        <!-- отображение секций  -->
        <div v-if="this.steps.section">
          <img id="photo" :src="this.eventSection.img" alt="" />
          <button @click="(this.steps.section = false), (this.steps.flat = true)"
            class="flex items-center translate-y-[-50%] float-right bg-[#FF9900] text-white px-[40px] py-[10px]">
            <span class="text-[20px]">ДАЛЕЕ</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-[50px] ml-[10px] h-[50px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        <!-- отображение этажа  -->
        <div v-if="this.steps.flat">
          <img id="photo" :src="this.eventFlat.img" alt="" />
          <button @click="(this.steps.flat = false), (this.steps.apartament = true)"
            class="flex items-center translate-y-[-50%] float-right bg-[#FF9900] text-white px-[40px] py-[10px]">
            <span class="text-[20px]">ДАЛЕЕ</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-[50px] ml-[10px] h-[50px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        <!-- отображение апартаментов  -->
        <div v-if="this.steps.apartament">
          <img id="photo" :src="this.eventApartament.img" alt="" />
          <button @click="
            (this.steps.apartament = false),
            (this.steps.selection = true),
            chalange_fix()
            " class="flex items-center translate-y-[-50%] float-right bg-[#FF9900] text-white px-[40px] py-[10px]">
            <span class="text-[20px]">ДАЛЕЕ</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-[50px] ml-[10px] h-[50px]">
              <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </button>
        </div>

        <!-- самый последний блок  -->
        <div v-if="this.steps.selection">
          <!-- <img id="photo" :src="this.eventApartament.img" alt="" /> -->
          <div class="min-h-[300px]">
            <!-- syuda  -->

            <div v-for="item of this.eventSelections.items" :key="item.id"
              class="h-[365px] mb-[90px] w-[100%] flex justify-between">
              <div class="left h-[365px] w-[799px]">
                <img class="h-[100%]" :src="item.img" alt="amir" />
              </div>
              <div class="right h-[365px] w-[700px] flex flex-col justify-between">
                <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Количесвто комнат
                  <h5>{{ item.rooms }}</h5>
                </span>

                <div class=" w-[100%] flex items-center justify-between">
                  <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Площадь
                    <h5>{{ item.kvM }} кв.м.</h5>
                  </span>

                  <div @click="filter_finished(item)" class="flex items-center h-[100px] w-[300px]">

                    <div class="h-[78px] w-[78px] rounded-[50%] absolute bg-[#FF9900] z-[1]"></div>
                    <button class="ml-[60px] mr-[10px] z-[10] text-[#000] text-[18px] font-semibold">
                      Узнать больше
                    </button>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                        fill="black" />
                    </svg>
                  </div>

                </div>

                <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Этаж
                  <h5>{{ item.floor }}</h5>
                </span>

                <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Секция
                  <h5>{{ item.floor }}</h5>
                </span>
                <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Стоимость
                  <h5>${{ item.price }}</h5>
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>

  </div>

  <div class="h-[500px] w-[100%] ">
            <div class="h-[435px] w-[80%] m-auto flex flex-col items-start">
                <div class="h-[300px] w-[100%] ">
                    <h2 class="text-[64px] leading-[5.5rem] uppercase text-[#441D06] font-thin w-[800px]">Будем
                        рады ответить
                        на все ваши вопросы</h2>
                </div>
                <p
                    class="text-[#000] text-[24px] font-light uppercase leading-[2.2rem] text-center w-[35%] m-auto">
                    Заполните форму и наш менеджер
                    свяжется с вами в ближаейшее время</p>

                <div class="h-[145px] w-[100%] flex justify-end items-center">
                    <input type="text"
                        class="h-[40px] outline-none w-[270px] text-[#A2A2A2] bg-[transparent] text-[18px] border-b-[1px] border-solid border-[#000]"
                        placeholder="Имя">
                    <input type="email"
                        class="h-[40px] mx-[137px] outline-none bg-[transparent] w-[270px] text-[#A2A2A2] text-[18px] border-b-[1px] border-solid border-[#000]"
                        placeholder="Email / Телефон">

                    <div class="flex items-center h-[100px] w-[300px]">
                        <div class="h-[78px] w-[78px] rounded-[50%] absolute bg-[#FF9900] z-[1]"></div>
                        <button class="ml-[55px] mr-[10px] z-[10] text-[#000] text-[18px] font-semibold">Отправить</button>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                                fill="black" />
                        </svg>


                    </div>

                </div>

            </div>

        </div>


</template>



<style scoped>
.active {}

.active span {
  color: #441d06;
  font-weight: 400;
}
</style>