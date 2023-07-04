<script setup>

</script>

<script>
    // 2 способ
import store from '../store';
// 1 способ
// import {mapGetters} from 'vuex'
export default {
    computed: {
        //  1 способ
        // ...mapGetters(['docsFile'])
    },
    // 2 способ лучше и легче как получить массив из store 
    data() {
        return {
            // 2 способ
            docsFile: store.getters.docsFile
        }
    },
}
</script>

<template>
    <div class="mt-[0px] w-[80%] pt-[60px] mx-auto min-h-[400px] mb-[60px]">
        <h2 class="text-[72px] font-[100] text-[#441D06]">Документы</h2>
        <div class="h-[30px]">Главная - Документы</div>

        <div class="mt-[64px] w-[100%] flex flex-col ">

            <a :href="item.src" download v-for="item of this.docsFile" :key="item.id" class="hover:shadow-xl duration-[.3s] shadow hover:scale-[0.97] cursor-pointer h-[137px] mb-[24px] w-[100%] bg-[#FFF9EF] py-[20px] px-[30px] flex items-center justify-between">
                <img :src="item.image" alt="">

                <span class="text-[24px] font-[300] leading-[2.2rem] uppercase w-[30%]">
                    {{ item.title }}
                </span>
                <span class="text-[24px] font-[300] leading-[2.2rem] uppercase">
                    {{ item.date }}
                </span>
                <button class="flex items-center">
                    <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="bx:bx-download">
                            <path id="Vector"
                                d="M20.5003 27.3335L27.3337 18.7918H22.2087V6.8335H18.792V18.7918H13.667L20.5003 27.3335Z"
                                fill="#441D06" />
                            <path id="Vector_2"
                                d="M34.167 30.7498H6.83366V18.7915H3.41699V30.7498C3.41699 32.6341 4.94937 34.1665 6.83366 34.1665H34.167C36.0513 34.1665 37.5837 32.6341 37.5837 30.7498V18.7915H34.167V30.7498Z"
                                fill="#441D06" />
                        </g>
                    </svg>
                    <span class="ml-[17px] text-[18px] font-[600] text-[#441D06]">Скачать</span>
                </button>
            </a>


        </div>
        <h2 class="mt-[55px] text-[18px] font-[600] leading-[2.2rem] text-[#441D06] flex items-center justify-end">Показать еще
            <svg class="ml-[8px]" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M13.4543 4.87402L12.42 5.9083L17.2953 10.7814H2.875V12.2189H17.2953L12.4207 17.0928L13.4543 18.1263L19.5637 12.017L20.0574 11.5002L19.5637 10.9834L13.4543 4.87402Z"
                    fill="black" />
            </svg>

        </h2>

    </div>
</template>

<style></style>