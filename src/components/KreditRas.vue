<template>
    <div class="h-[778px] mt-[151px]">
        <div class="w-[80%] mx-auto">
            <h1 class="text-[64px] uppercase font-[100] leading-[5.6rem]">Калькулятор ипотеки</h1>

            <div class="h-[320px] flex mt-[60px] justify-between flex-wrap">
                <div class="h-[95px] flex flex-col items-start">
                    <span class="text-[24px] uppercase font-[300] flex ">Стоимость недвижимости <h3
                            class="ml-[59px] text-[24px] font-[600]">${{ Math.round(this.volume1) }}</h3></span>
                    <div class="w-[740px] raltive flex items-center mt-[45px]">

                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>
                        <input @input="change()" type="range" min="10000" max="500000" v-model="volume1" step="10000"
                            class="rangeInput">
                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>

                    </div>
                </div>

                <div class="h-[95px] flex flex-col items-start">
                    <span class="text-[24px] uppercase font-[300] flex ">Срок кредита <h3
                            class="ml-[240px] text-[24px] font-[600]">{{ Math.round(this.volume2) }} лет</h3></span>

                    <div class="w-[740px] raltive flex items-center mt-[45px]">
                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>
                        <input @input="change()" type="range" min="1" max="40" v-model="volume2" class="rangeInput"
                            step="1" />
                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>

                    </div>
                </div>

                <div class="h-[95px] flex flex-col items-start">
                    <span class="text-[24px] uppercase font-[300] flex ">Первоначальный взнос <h3
                            class="ml-[97px] text-[24px] font-[600]">${{ Math.round(this.volume3) }} </h3></span>

                    <div class="w-[740px] raltive flex items-center mt-[45px]">
                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>
                        <input @input="change()" type="range" min="0" :max="this.volume1" v-model="volume3"
                            class="rangeInput" step="10000" />
                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>
                    </div>

                </div>
                <div class="h-[95px] flex flex-col items-start">
                    <span class="text-[24px] uppercase font-[300] flex ">Процентная ставка <h3
                            class="ml-[160px] text-[24px] font-[600]">{{ Math.round(this.volume4) }}% годовых </h3> </span>

                    <div class="w-[740px] raltive flex items-center mt-[45px]">
                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>
                        <input @input="change()" type="range" min="1" max="50" v-model="volume4" class="rangeInput"
                            step="1" />
                        <div class="line h-[11px] w-[1px] bg-[#000]"></div>
                    </div>

                </div>

            </div>
        </div>

        <div class="h-[245px] w-[100%]">
            <div class="h-[100%] w-[80%] m-auto bg-[#FFF9EF] flex justify-between items-center px-[70px]">
                <span class="flex flex-col text-[24px] uppercase font-[300]">
                    Сумма кредита
                    <h3 class="mt-[6px] text-[36px] uppercase font-[700] text-[#441D06]">${{ this.volume1 - this.volume3 }}
                    </h3>
                </span>
                <span class="flex flex-col text-[24px] uppercase font-[300]">
                    Ежемесячній платеж
                    <h3 class="mt-[6px] text-[36px] uppercase font-[700] text-[#441D06]">$
                        {{ parseInt(((this.volume1 - this.volume3) / (this.volume2 * 12) / 100) * this.volume4) }}</h3>
                </span>

                <span class="flex flex-col text-[24px] uppercase font-[300]">
                    Процентная ставка
                    <h3 class="mt-[6px] text-[36px] uppercase font-[700] text-[#441D06]">
                        {{ this.volume4 }} %</h3>
                </span>


            </div>
        </div>

    </div>
    
</template>

<script>
export default {
    data() {
        return {
            volume1: '200000',
            volume2: '10',
            volume3: '30000',
            volume4: '12',

        }
    },
    methods: {
        change() {
            console.log(this.volume1);
            console.log(this.volume2);
            console.log(this.volume3);
            console.log(this.volume4);
        }
    },
    mounted() {
    }
    // watch:{
    //     volume1(c){
    //         console.log(this.volume1);
    //         console.log(this.volume2);
    //         console.log(this.volume3);
    //         console.log(this.volume4);
    //     },

    // }
}
</script>

<style>
.rangeInput {
    -webkit-appearance: none;
    width: 100%;
    height: 1px;
    border-radius: 0px;
    background: #000;
    outline: none;
    opacity: 0.7;
    -webkit-transition: .2s;
    transition: opacity .2s;
}

.rangeInput:hover {
    opacity: 1;
}

.rangeInput::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #FF9900;
    cursor: pointer;
}

.rangeInput::-moz-range-thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: #FF9900;
    cursor: pointer;
}
</style>