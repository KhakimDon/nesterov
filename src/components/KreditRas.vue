<template>
    <div class="h-[90vh]  py-[100px]">
        <div class="max-w-[1600px] mx-auto">
            <h1 class="text-[40px]">Calculator</h1>
            <div class="flex mt-[20px] justify-between flex-col">
                <div class="w-[50%] h-[150px] flex flex-col items-start">
                    <span>Стоимость недвижимости <mark>${{ Math.round(this.volume1) }}</mark></span>
                   <div class="w-[778px]">
                     <input @input="change()" type="range" min="10000" max="500000" v-model="volume1" class="range" step="10000" />
                   </div>
                </div>
                <div class="w-[50%] h-[150px] flex flex-col items-start">
                    <span>Срок кредита <mark>{{ Math.round(this.volume2) }} лет</mark></span>
                   <div class="w-[778px]">
                     <input @input="change()" type="range" min="1" max="40" v-model="volume2" class="range" step="1" />
                   </div>
                </div>
                <div class="w-[50%] h-[150px] flex flex-col items-start">
                    <span>Первоначальный взнос <mark>${{ Math.round(this.volume3) }} </mark></span>
                   <div class="w-[778px]">
                     <input @input="change()" type="range" min="0" :max="this.volume1" v-model="volume3" class="range" step="10000" />
                   </div>

                </div>
                <div class="w-[50%] h-[150px] flex flex-col items-start">
                    <span>Процентная ставка <mark>{{ Math.round(this.volume4) }}% </mark> </span>
                   <div class="w-[778px]">
                     <input @input="change()" type="range" min="1" max="50" v-model="volume4" class="range" step="1" />
                   </div>

                </div>
            </div>
        </div>
    </div>

    <div class="h-[300px] flex justify-around items-center  bg-[red]">
        <h1 class="text-[30px]">Сумма кредита {{ this.volume1 -  this.volume3}}</h1>
        <h1 class="text-[30px]">Ежемесячній платеж {{parseInt(( parseInt((this.volume1 - this.volume3) / (this.volume2 * 12)) / 100) * this.volume4)              }}</h1>
        <h1 class="text-[30px]">Процентная ставка {{ this.volume4 }}</h1>
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
    methods:{
        change(){
            console.log(this.volume1);
            console.log(this.volume2);
            console.log(this.volume3);
            console.log(this.volume4);
        }
    },
    mounted(){
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

<style></style>