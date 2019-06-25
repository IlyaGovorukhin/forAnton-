<template>
    <section id="night">

        <div class="contentNight">

            <div class="contentNight_box">
                <div class="Block_box-line">
                    <div class="Block_box-line--text">Дата вылета</div>
                </div>
                <div class="contentNight_box-ul" >
                    <div class="contentNight_box-ul--item clickColor" @click="minus('from')">–</div>
                    <div class="contentNight_box-ul--item ">{{fromN}}</div>
                    <div class="contentNight_box-ul--item clickColor" @click="plus('from')">+</div>
                    <div class="contentNight_box-ul--item">–</div>
                    <div class="contentNight_box-ul--item clickColor"@click="minus('to')">–</div>
                    <div class="contentNight_box-ul--item">{{toN}}</div>
                    <div class="contentNight_box-ul--item clickColor"@click="plus('to')">+</div>
                </div>
                <div class="contentNight_box-text">Туры c {{dateComponent}}<span> на {{fromN}}</span> — <span>{{toN}}</span> дней</div>
            </div>
            <div class="contentNight_box">
                <div class="contentNight_box-button"  @click="showModal">Применить</div>
            </div>

        </div>
    </section>
</template>
<script>
    export default {
        props: ['onNight', 'dateComponent'],
        data() {
            return {
                fromN: 3,
                toN: 10,
                night: true,
                nextE: true,

            }
        },
        methods: {
            set: function(){
                return {
                    fromN: this.fromN,
                    toN: this.toN,
                    night: this.night,
                    nextE: this.nextE


                }
            },
            addData: function() {
                this.onNight(this.set())
            },

            showModal: function(){
                this.night= false;
                this.addData();
                this.night= true;
            },

            minus: function (e) {
                if((e == 'from')&&(this.fromN > 3)){
                    this.fromN = --this.fromN;

                    this.addData();
                } else if((e == 'to')&&(this.fromN < this.toN)) {
                    this.toN = --this.toN;
                    this.addData();
                }if((e == 'to')&&(this.fromN >= this.toN)&&(this.fromN > 3)) {
                    this.fromN = --this.fromN;
                    this.toN = --this.toN;
                    this.addData();
                }

            },
            plus: function (e) {
                if((e == 'from')&&(this.fromN <  this.toN)){
                    this.fromN = ++this.fromN;

                    this.addData();
                } else if((e == 'from')&&(this.fromN >=  this.toN)) {
                    this.fromN = ++this.fromN;
                    this.toN = ++this.toN

                }else if((e == 'to')) {
                    this.toN = ++this.toN;
                    this.addData();
                }
            },

            // minus: function (e) {
            //     if((e == 'from')&&(this.$root.$data.fromToNight.from > 3)){
            //          this.$root.$data.fromToNight[e] = this.$root.$data.fromToNight[e]-1
            //     } else if((e == 'to')&&(this.$root.$data.fromToNight.from < this.$root.$data.fromToNight.to)) {
            //         this.$root.$data.fromToNight[e] = this.$root.$data.fromToNight[e]-1
            //     }
            //
            // },
            // plus: function (e) {
            //     if((e == 'from')&&(this.$root.$data.fromToNight.from <  this.$root.$data.fromToNight.to)){
            //         this.$root.$data.fromToNight[e] = this.$root.$data.fromToNight[e]+1
            //     } else if((e == 'to')) {
            //         this.$root.$data.fromToNight[e] = this.$root.$data.fromToNight[e]+1
            //     }
            // },

        },
            computed: {
                // from: function () {
                //     return this.$root.$data.fromToNight.from
                // },
                // to: function () {
                //     return this.$root.$data.fromToNight.to
                //
                // }

            },
            created() {


            }


    }
</script>

<style lang="scss" scoped>
    .contentNight {
        width: 320px;
        height: 165px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.31);
        background-color: #ffffff;
        position: absolute;

    }
    .contentNight_box{
        height: 115px;
        box-sizing: border-box;
        padding: 23px 27px

    }
    .contentNight_box-ul{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: space-between;
        padding: 0 22px;

    }
    .contentNight_box-ul--item{

        &:nth-child(odd){
            width: 33px;
            height: 33px;
            border-radius: 50px;
            border: 1px solid #0d80c7;
            color: #0d80c7;
            text-align: center;
            font-family: LucidaGrande;
            font-weight: bold;
            font-size: 25px;



        }
        &:nth-child(1){
            line-height: 28px;
        }
        &:nth-child(5){
            line-height: 28px;
        }
        &:nth-child(4){
            font-family: SFUIText;
            font-weight: bold;
            font-size: 24px;

        }


        font-size: 20px;
        line-height: 33px;
        font-weight: 600;
        width: 20px;
        /* margin: 0 auto; */
        text-align: center;

    }
    .contentNight_box-text{
        margin-top: 23px;
    }
    .contentNight_box-text{
        text-align: center;
    }
    .contentNight_box{
        &:nth-child(2){
            height: 100%;
            padding: 0;
            border-top:  solid 1px #c6c6c6;
            height: 50px;

        }
    }
    .contentNight_box-button{
        float: right;
        margin-right: 13px;
        line-height: 50px;
        font-family: Arial;
        font-size: 14px;
        font-weight: bold;
        color: #0787ca
    }


</style>