<script setup>
</script>

<script>
import axios from 'axios'
export default {
    methods: {
        sendModel() {
            let messsage = `Записалься на просмотр " ${this.username}" \n Телефон или почта: ${this.usernubmer}`;

            let api = `https://api.telegram.org/bot${this.token}/sendMessage?chat_id=${this.chatId}&text=${messsage}`;

            // https://api.telegram.org/bot6173081053:AAE6WZnjw2ApZjjWFh4bqx5_AekqATu8ozY/sendMessage?chat_id=768959234&text=hellobooy

            axios.post(api).then(res => {
                this.post = true
                this.usernubmer = '',
                    this.username = ''
            })

            this.btn = false
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

<template>
    <div class="dad h-[0px] w-[400px] m-[auto]">
        <div class="model h-[500px] w-[400px] bg-[#FFF9EF] m-[auto] mb-[100px] relative flex">
            <svg @click="closeFunc" class="absolute right-[20px] top-[10px] cursor-pointer" height="35" viewBox="0 0 48 48"
                width="35" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
                <path d="M0 0h48v48h-48z" fill="none" />
            </svg>
            <div class="h-[100%] w-[100%] flex flex-col items-center py-[50px]">
                <img class="" src="../assets/icons/logo-mini.svg" alt="">
                <h3 class="text-[24px] font-[100] uppercase mt-[20px]">Записаться на просмотр</h3>
                <div class="mt-[50px] w-[80%] m-auto flex flex-col justify-between">

                    <input v-model="username" placeholder="Имя" type="text"
                        class="py-[5px] outline-none w-[100%] mb-[25px] text-[#A2A2A2] bg-[transparent] text-[18px] border-b-[1px] border-solid border-[#000]">

                    <input v-model="usernubmer" placeholder="Email / Телефон" type="text"
                        class="py-[5px] outline-none w-[100%] mb-[25px] text-[#A2A2A2] bg-[transparent] text-[18px] border-b-[1px] border-solid border-[#000]">


                    <button @click="sendModel()"
                        class="uppercase flex items-center bg-[#FF9900] mt-[20px] text-[white] text-[20px] py-[10px] px-[30px]">Далее
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-[50px] ml-[10px] h-[50px]">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>

                </div>
            </div>

        </div>
        <div :class="{ active: this.post == true }"
            class="w-[100%] duration-[3s] scale-[0] h-[100%] bg-[lime] fixed left-0 top-0 z-[999]">
            <h1>Заявка отправлена</h1>
            <button @click="this.post = false">ok</button>
        </div>
    </div>
</template>
    
<style scoped>
.dad {
    /* display: none; */
    transform: scale(0);
    transition-duration: .3s;
}

.model {
    transition-duration: .3s;
    transform: scale(0);
}


.active {
    scale: 1 !important;
    transform: scale(1) !important;
}
</style>