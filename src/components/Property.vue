<script setup>

</script>



<script>
import { mapGetters } from 'vuex'
export default {
    mounted(){
        console.log(this.filtered_finish);
    },
    computed:{
        ...mapGetters(["filtered_finish"])
    }
}
</script>


<template>
    <div class="mt-[0px] w-[80%] pt-[56px] mx-auto min-h-[400px] mb-[100px]">
        <div class="flex items-end">
            <span class="text-[72px] font-[100] text-[#441D06]">Квартиры</span>
            <span class="text-[24px] font-[300] mb-[20px] text-[#000] ml-[50px]">Секция {{ this.filtered_finish.section }}, {{ this.filtered_finish.floor }} эт., {{ this.filtered_finish.rooms }} комнаты, {{ this.filtered_finish.kvM }} кв.м.</span>
            <span class="text-[24px] font-[300] mb-[20px] uppercase text-[#0DB027] ml-[130px]">В продаже</span>
        </div>
        <div class="h-[30px] text-[13px] mt-[14px]">Главная - Квартиры</div>

        <div class="flex justify-between">
            <div class="left h-[700px] w-[1155px] flex-col">

                <div class="h-[max-content] w-[100%] flex">

                    <router-link to="/info" class="h-[100%] w-[330px] flex items-center mr-[80px]">
                        <img src="../assets/icons/akar-icons_arrow-back-thick-fill.svg" alt="">
                        <span class="text-[18px] text-[#000] font-[700] mx-[9px]">Вернуться к плану этажа</span>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                                fill="black" />
                        </svg>

                    </router-link>

                    <div class="h-[100%] w-[330px] flex items-center mr-[115px]">
                        <img src="../assets/icons/vs_floors.svg" alt="">
                        <span class="text-[18px] text-[#000] font-[700] mx-[9px]">Вернуться к плану этажа</span>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                                fill="black" />
                        </svg>

                    </div>

                    <div class="h-[100%] w-[330px] flex items-center">
                        <img src="../assets/icons/bx_bxs-building.svg" alt="">
                        <span class="text-[18px] text-[#000] font-[700] mx-[9px]">Вернуться к плану этажа</span>
                        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                                fill="black" />
                        </svg>

                    </div>

                </div>

                <!-- <img class="mt-[25px] h-[614px]" src="../assets/img/property37.png" alt=""> -->
                <div class="w-[100%] h-[620px] mt-[20px] sketchfab-embed-wrapper"> <iframe width="100%" height="100%" title="Modern Studio Apartment" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/68864965414f487090d1f677adbb8029/embed?autospin=1&autostart=1&annotations_visible=0&preload=1"> </iframe> </div>

            </div>
            <div class="right h-[700px] w-[22%] ">

                <div class="flex flex-col h-[330px] w-[100%] justify-between">
                    <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Количесвто комнат
                        <h5>2</h5>
                    </span>
                    <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Площадь
                        <h5>72 кв.м</h5>
                    </span>
                    <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Этаж
                        <h5>4</h5>
                    </span>
                    <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Секция
                        <h5>1</h5>
                    </span>
                    <span class="flex w-[300px] justify-between text-[#000] text-[24px]">Стоимость
                        <h5>$50000</h5>
                    </span>
                </div>

                <div class="h-[40px] mt-[40px] flex items-center">
                    <img src="../assets/icons/ic_baseline-calculate.svg" alt="">
                    <span class="text-[18px] text-[#000] font-[700] mx-[17px]">Рассчитать ипотеку</span>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                            fill="black" />
                    </svg>

                </div>
                <img class="mt-[25px] w-[100%]" src="../assets/img/property37.png" alt=""> 
                <div class="flex flex-col mt-[0px]">
                
                    
                    <!-- <div class="sketchfab-embed-wrapper"> <iframe title="Isometric Living Room" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share src="https://sketchfab.com/models/8c4123cafbb2482a891ac6399f6c1ee8/embed?autospin=1&autostart=1&preload=1"> </iframe> </div> -->



                    <div class="mt-[18px] flex items-center">
                        <img src="../assets/icons/fluent_print-20-filled.svg" alt="">
                        <span class="text-[18px] text-[#000] font-[700] mx-[10px]">Распечатать план квартиры</span>


                    </div>

                </div>

            </div>
        </div>

        <div class="h-[198px] w-[100%] flex justify-end mt-[-21px]">
            <div class="h-[100%] w-[75%] bg-[#441D06] flex items-center justify-around">
                <h3 class="uppercase text-[24px] text-[#fff] leading-[2.5rem] font-light">Увидеть квартиру своими глазами</h3>

                <div class="flex items-center h-[100px] w-[350px]">
                    <div class="h-[78px] w-[78px] rounded-[50%] absolute bg-[#FF9900] z-[1]"></div>
                    <button class="ml-[57px] mr-[10px] z-[10] text-[#fff] text-[18px] font-semibold">Записаться на просмотр</button>
                    <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                            fill="white" />
                    </svg>


                </div>

            </div>
        </div>


    </div>
    <!--  -->
</template>


<style></style>