<template>
  <div class="h-[500px] w-[100%]">
    <div class="h-[435px] w-[80%] m-auto flex flex-col items-start">
      <div class="h-[300px] w-[100%]">
        <h2
          class="text-[64px] leading-[5.5rem] uppercase text-[#441D06] font-thin w-[800px]"
        >
          Будем рады ответить на все ваши вопросы
        </h2>
      </div>
      <p
        class="text-[#000] text-[24px] font-light uppercase leading-[2.2rem] text-center w-[35%] m-auto"
      >
        Заполните форму и наш менеджер свяжется с вами в ближаейшее время
      </p>

      <div class="h-[145px] w-[100%] flex justify-end items-center">
        <input
          v-model="username"
          type="text"
          class="h-[40px] outline-none w-[270px] text-[#A2A2A2] bg-[transparent] text-[18px] border-b-[1px] border-solid border-[#000]"
          placeholder="Имя"
        />
        <input
          v-model="usernubmer"
          type="email"
          class="h-[40px] mx-[137px] outline-none bg-[transparent] w-[270px] text-[#A2A2A2] text-[18px] border-b-[1px] border-solid border-[#000]"
          placeholder="Email / Телефон"
        />

        <div @click="send()" class="flex items-center h-[100px] w-[300px]">
          <div
            class="h-[78px] w-[78px] rounded-[50%] absolute bg-[#FF9900] z-[1]"
          ></div>
          <button
            class="ml-[55px] mr-[10px] z-[10] text-[#000] text-[18px] font-semibold"
          >
            Отправить
          </button>
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
              fill="black"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>

  <div :class="{active: this.post == true}" class="w-[100%] duration-[3s] scale-[0] h-[100%] bg-[lime] fixed left-0 top-0 z-[999]">
    <h1>Заявка отправлена</h1>
    <button @click="this.post = false">ok</button>
  </div>


</template>

<script>
import axios from 'axios'
export default {
  methods: {
    send() {
      let messsage = `Имя пользователя:  ${this.username} \n Телефон или почта: ${this.usernubmer}`;

      let api = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${messsage}`;

      // https://api.telegram.org/bot6173081053:AAE6WZnjw2ApZjjWFh4bqx5_AekqATu8ozY/sendMessage?chat_id=768959234&text=hellobooy

      axios.post(api).then(res => {
        this.post = true
        this.usernubmer = '',
        this.username = ''
      })

    },
  },
  data() {
    return {
        post: false,

      token: "6173081053:AAE6WZnjw2ApZjjWFh4bqx5_AekqATu8ozY",
      chatId: "-1001871070820",
      usernubmer: "",
      username: "",
    };
  },
};
</script>

<style scoped>
.active{
    scale: 1 !important;
    transform: scale(1) !important;
}
</style>