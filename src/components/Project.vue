<script setup>

</script>

<script>
import FeedBack from './FeedBack.vue'
import FeedDesign from './FeedDesign.vue'
export default {
    components: {FeedDesign, FeedBack}
}
</script>

<template>
    <div class="mt-[0px] w-[100%] mx-auto min-h-[400px] mb-[40px] ">
        <div class="w-[80%] m-auto pt-[70px]">
            <h2 class="text-[72px] font-[100] text-[#441D06]">О проекте</h2>
            <div class="h-[30px]">Главная - О проекте</div>
        </div>

        <div class="w-[80%] m-auto flex justify-between pt-[62px]">

            <div class="left h-[100%] w-[49%]">
                <p class="font-[300] leading-6 mb-[57px]">
                    Таким образом рамки и место обучения кадров влечет за собой процесс внедрения
                    и модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет за
                    собой процесс внедрения и модернизации позиций, занимаемых участниками.
                </p>

                <div class=" w-[100%] mb-[22px] flex items-center">
                    <div class="w-[64px] flex">
                        <div class="h-[64px] bg-[#FFF9EF] rounded-[64px] w-[64px]">
                            <img class="translate-y-[-10px] translate-x-[25px]" src="../assets/icons/architect 1.svg"
                                alt="">
                        </div>
                    </div>
                    <p class="ml-[50px] text-[24px] ">Современная архитектура</p>
                </div>

                <div class=" w-[100%] mb-[22px] flex items-center">
                    <div class="w-[64px] flex">
                        <div class="h-[64px] bg-[#FFF9EF] rounded-[64px] w-[64px]">
                            <img class="translate-y-[-10px] translate-x-[25px]" src="../assets/icons/floor-plan 1.svg"
                                alt="">
                        </div>
                    </div>
                    <p class="ml-[50px] text-[24px] ">Ограниченые планировки</p>
                </div>

                <div class=" w-[100%] mb-[22px] flex items-center">
                    <div class="w-[64px] flex">
                        <div class="h-[64px] bg-[#FFF9EF] rounded-[64px] w-[64px]">
                            <img class="translate-y-[-10px] translate-x-[25px]" src="../assets/icons/parking-area 1.svg"
                                alt="">
                        </div>
                    </div>
                    <p class="ml-[50px] text-[24px] "> Подземный паркинг </p>
                </div>

                <div class=" w-[100%] mb-[22px] flex items-center">
                    <div class="w-[64px] flex">
                        <div class="h-[64px] bg-[#FFF9EF] rounded-[64px] w-[64px]">
                            <img class="translate-y-[-10px] translate-x-[25px]" src="../assets/icons/cascade 1.svg" alt="">
                        </div>
                    </div>
                    <p class="ml-[50px] text-[24px] "> Закрытый двор </p>
                </div>

                <div class=" w-[100%] mb-[22px] flex items-center">
                    <div class="w-[64px] flex">
                        <div class="h-[64px] bg-[#FFF9EF] rounded-[64px] w-[64px]">
                            <img class="translate-y-[-10px] translate-x-[25px]" src="../assets/icons/park 1.svg" alt="">
                        </div>
                    </div>
                    <p class="ml-[50px] text-[24px] "> Собственный сквер </p>
                </div>

            </div>

            <div class="right h-[545px] w-[49%]"></div>
        </div>

        <div class="mt-[100px] h-[934px] w-[100%] bg-[#FFF9EF]">
            <div class="h-[100%] w-[80%] m-auto flex-col flex">
                <h2 class="pt-[118px] text-[64px] uppercase font-[100] leading-[5.6rem] text-[#441D06]">
                    Разработали и воплотили в жизнь комфортный дизайн </h2>
                <div class="mt-[95px] flex items-center justify-end w-[100%]">
                    <span class="text-[24px] ml-[125px] text-[#7E7E7E] font-[300] uppercase">Фасады</span>
                    <span class="text-[24px] ml-[125px] text-[#441D06] font-[300] uppercase">Входные группы</span>
                    <span class="text-[24px] ml-[125px] text-[#7E7E7E] font-[300] uppercase">Отделка</span>
                    <span class="text-[24px] ml-[125px] text-[#7E7E7E] font-[300] uppercase">Места общего пользования</span>
                </div>

                <div class="mt-[62px] h-[444px] w-[100%] flex justify-between">

                    <div class="left__second h-[100%] w-[52%] "></div>

                    <div class="h-[100%] w-[46%] flex flex-col">
                        <h3 class="text-[20px] font-[600] leading-6 text-[#441D06] w-[50%]">Вас встретит здание, в которое
                            приятно заходить</h3>

                        <p class="mt-[44px] leading-6 font-[300] w-[60%]">Таким образом рамки и место обучения кадров влечет
                            за собой процесс внедрения.
                            <br />
                            <br />
                            Модернизации позиций, занимаемых участниками. Таким образом рамки и место обучения кадров влечет
                            за собой процесс внедрения и модернизации позиций, занимаемых участниками.
                        </p>

                        <div class="mt-[40px] bg-[#441D06] h-[40px] w-[300px]"></div>

                    </div>

                </div>

            </div>
        </div>
        


        <!-- <FeedDesign class="fed"/> -->
        <FeedDesign/>
        <FeedBack/>

    </div>
</template>

<style scoped>
/* .fed :nth-child(1){
    background-color: red !important;
} */
.right {
    background-image: url('../assets/img/project-right.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.left__second {
    background-image: url('../assets/img/left-project-2sec.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}</style>