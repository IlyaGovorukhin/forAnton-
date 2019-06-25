<template>
    <section id="Famuly">

        <div class="contentFamuly">
            <div class="Block_box-line">
                <div class="Block_box-line--text">Дата вылета</div>
            </div>
            <div class="contentFamuly_item">
                <div class="contentFamuly_item-text">Взрослые</div>
                <div class="contentFamuly_item-ul">
                    <div class="contentFamuly_item-ul--li1 "    @click="choosG(i)" v-for="(man, i) in graund" :class="man ? 'clickColorChoose' : '' ">{{i}}</div>
                </div>
            </div>
            <div class="contentFamuly_item">
                <div class="contentFamuly_item-text">Дети от 2 до 11 лет</div>
                <div class="contentFamuly_item-text2">(включительно)</div>
                <div class="contentFamuly_item-ul" >
                    <div class="contentFamuly_item-ul--li "  :ref="`not_${a}`" @click="c = a,choosM(a)" v-for="(man, a) in children" :class="man ? 'clickColorChoose' : '' " >{{a}}</div>
                </div>
            </div>
            <div class="contentFamuly_item">
                <div class="contentFamuly_item-text">Младенцы до 2 лет</div>
                <div class="contentFamuly_item-ul" >
                    <div class="contentFamuly_item-ul--li ":ref="`nota_${i}`"  @click="l=i,choosL(i)" v-for="(man, i) in litel" :class="man ? 'clickColorChoose' : '' ">{{i}}</div>
                </div>
            </div>
            <div class="contentFamuly_button">
                <div class="contentFamuly_box-button" @click="showModal">Применить</div>
                <div class="contentFamuly_box-button" @click="cleanbox" >Очистить</div>
            </div>

        </div>
    </section>
</template>
<script>


    export default {

        props: [
            'onFamuly'
        ],
        data() {
            return {
                graund: {
                    1: true,
                    2: false,
                    3: false,
                    4: false,
                },
                children: {
                    0 : true,
                    1 : false,
                    2 : false,
                    3 : false,
                },
                litel: {
                    0: true,
                    1: false,
                    2: false,
                    3: false,
                },
                c: 0,
                l: 0,
                allGr : 1,
                allCh: '',
                Famuly: true,
                cleanFamuly: true,



            }

        },
        methods: {
            showModal: function(){
                this.Famuly= false;
                this.addData();
                this.Famuly= true;
            },
            set: function(){
                return {
                    allGr : this.allGr,
                    allCh: this.allCh,
                    Famuly: this.Famuly,
                    cleanFamuly: this.cleanFamuly
                }
            },
            cleanbox: function(){
                this.cleanFamuly = false;
                this.addData();
                this.cleanFamuly = true;
            },
            addData: function() {
                    this.onFamuly(this.set())
            },
            choosG: function (e) {
                for (let prop in this.graund) {
                    this.graund[prop] = false;
                }
                this.allGr = e;
                this.graund[e] = true;
                this.Famuly= true;
                this.addData();
            },
            choosM: function (e) {
                for (let prop in this.children) {
                    this.children[prop] = false;
                }
                this.children[e] = true;
                if((+this.c + +this.l)>=3){
                    for (let prop in this.litel) {
                        this.litel[prop] = false;
                    }
                    this.litel[3 - +this.c] = true;
                    this.allCh = 3;
                    this.Famuly= true;
                    this.addData();

                } else{
                    this.allCh = (+this.c + +this.l)
                    this.Famuly= true;
                    this.addData();
                }
                // if((+this.c == 0)&&(+this.l == 0)){
                //     this.allCh = '';
                //     this.addData();
                // }



            },
            choosL: function (e) {

                for (let prop in this.litel) {
                    this.litel[prop] = false;
                }

                this.litel[e] = true;
                if ((+this.c + +this.l) >= 3) {
                    for (let prop in this.litel) {
                        this.children[prop] = false;
                    }
                    this.children[3 -  +this.l] = true;
                    this.allCh = 3;
                    this.Famuly= true;
                    this.addData();
                } else{
                    this.allCh = (+this.c + +this.l)
                    this.Famuly= true;
                    this.addData();

                }
                // if((+this.c == 0)&&(+this.l == 0)){
                //     this.allCh = '';
                //     this.addData();
                // }

            }


        },
        computed: {

        },
        mounted() {
            this.$refs['not_0'][0].innerHTML ='нет'
            this.$refs['nota_0'][0].innerHTML ='нет'
        }
    }
</script>

<style lang="scss" scoped>
    .contentFamuly{
        position: absolute;
        width: 322px;
        height: 332px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.3);
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 13px 18px 0 18px;
        background: #fff;

    }
    .contentFamuly_item-ul--li, .contentFamuly_item-ul--li1{
        width: 66px;
        height: 40px;
        border-radius: 4px;
        border: solid 1px #0d80c7;
        line-height: 40px;
        text-align: center;
        color: #0d80c7;
        font-size: 18px;
        font-weight: bold;
        margin-top: 10px;
    }
    .contentFamuly_item{
        font-family: Arial;
        font-size: 14px;
        font-weight: bold;
        color: #28303d;
        &:nth-child(2){
            height: 80px;

        }
        &:nth-child(4){
            height: 80px;

        }

        &:nth-child(2),  &:nth-child(1) {
            border-bottom: 1px solid #cbcbcb;
        }
        &:nth-child(3){
            padding-bottom: 14px;
            border-bottom: 1px solid #cbcbcb;
        }



    }
    .contentFamuly_item-text2{
        font-family: Arial;
        font-size: 12px;
        color: #484848;
    }
    .contentFamuly_item-ul{
        display: flex;
        justify-content: space-between;

    }
    .contentFamuly_item-ul--li{
        &:first-child{
            font-size: 14px;
        }
    }

    .contentFamuly_box-button{
        font-size: 14px;
        font-weight: bold;
        color: #0787ca;
        float: right;
        margin-top: 11px;
        margin-bottom: 11px;

    }
    .contentFamuly_button{
        border-top: 1px solid #cbcbcb ;
    }
    .contentFamuly_box-button{
        &:last-child{
            float: left;
        }
    }









</style>