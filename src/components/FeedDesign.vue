<script setup>
</script>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            token: "6173081053:AAE6WZnjw2ApZjjWFh4bqx5_AekqATu8ozY",
            chatId: "-1001871070820",
            // chatId: "5773135037", 
            usermail: '',
            post: false,

        }
    },
    methods: {
        sendDesign() {
            let fullmail = `ПОЛУЧИЛ ПОДБОРКУ ДИЗАЙНЕРСКИХ РЕШЕНИЙ в email "${this.usermail}"`

            let api = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${fullmail}`

            axios.post(api).then(res => {
                this.post = true
                this.usermail = ''
            })
        }
    },
}
</script>

<template>
    <div class="h-[198px] w-[100%] flex justify-end mb-[155px]">
        <div class="h-[100%] w-[75%] bg-[#441D06] flex items-center justify-between px-[58px]">
            <h3 class="uppercase text-[24px] text-[#fff] leading-[2.5rem] font-light">Получить подборку дизайнерских
                решений
            </h3>
            <input v-model="usermail" type="email" placeholder="Email"
                class="w-[270px] text-[18px] text-[#A2A2A2] leading-6 bg-[transparent] border-b-[1px] border-[solid] border-[#fff] py-[5px] outline-none">

            <div @click="sendDesign" class="flex items-center h-[100px] w-[350px]">
                <div class="h-[78px] w-[78px] rounded-[50%] absolute bg-[#FF9900] z-[1]"></div>
                <button class="ml-[57px] mr-[10px] z-[10] text-[#fff] text-[18px] font-semibold">Получить</button>
                <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                        fill="white" />
                </svg>


            </div>

        </div>
    </div>

    <div :class="{activeMail: this.post == true}" class="w-[100%] duration-[3s] scale-[0] h-[100%] bg-[lime] fixed left-0 top-0 z-[999]">
    <h1>Заявка отправлена</h1>
    <button @click="this.post = false">ok</button>
  </div>
</template>


<style scoped>
.activeMail{
    scale: 1 !important;
    transform: scale(1) !important;
}
</style>