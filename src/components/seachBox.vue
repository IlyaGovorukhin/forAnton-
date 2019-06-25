<template>
<section id="Saech">
    <div class="contentSaech">
        <div class="contentSaech_main">
            <div class="contentSaech_main-text">Туры в Island View Resortland View Re</div>
            <div class="contentSaech_main_info">
                <div class="Saech">
                    <div class="Saech_colum">
                        <div class="Saech_colum-town">из Москвы</div>
                    </div>
                    <div class="Saech_colum">
                        <div class="Saech_colum-data"  @click="showMobile('calendar')">
                            <div class="Saech_colum-data--text"  v-if="cleanDate">{{dateComponent}} </div>
                            <svg class="Saech_colum-data--svg" width="27px" height="23px" viewbox="0 0 27 23" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                    <g id="Отель--" transform="translate(-787.000000, -786.000000)" fill="#B0B7BB" fill-rule="nonzero">
                                        <g id="Group-16" transform="translate(319.000000, 682.000000)">
                                            <g id="Group-8-Copy-6" transform="translate(24.940852, 89.000000)">
                                                <g id="school-calendar-copy-2" transform="translate(443.947161, 15.000000)">
                                                    <path id="Shape" d="M23.4404556,2.74890514 L21.373628,2.74890514 L21.373628,1.57008518 C21.373628,0.702958538 20.5323916,0 19.4946938,0 L19.4195364,0 C18.3818387,0 17.5406023,0.702958538 17.5406023,1.57008518 L17.5406023,2.74890514 L7.84530182,2.74890514 L7.84530182,1.57008518 C7.84530182,0.702958538 7.00406541,0 5.96636763,0 L5.89121026,0 C4.85351249,0 4.01227607,0.702958538 4.01227607,1.57008518 L4.01227607,2.74890514 L1.94544846,2.74890514 C0.907750687,2.74890514 0.0665142704,3.45186367 0.0665142704,4.31899032 L0.0665142704,21.1503035 C0.0665142704,22.0175557 0.907750687,22.7203887 1.94544846,22.7203887 L23.4404556,22.7203887 C24.4781534,22.7203887 25.3193898,22.0175557 25.3193898,21.1503035 L25.3193898,4.31899032 C25.3193898,3.45186367 24.4780782,2.74890514 23.4404556,2.74890514 Z M22.1627804,20.2396541 L3.22312371,20.2396541 L3.22312371,7.49056239 L22.1627804,7.49056239 L22.1627804,20.2396541 Z"></path>
                                                    <path id="Shape" d="M5.79733871,13.2599346 L9.06653389,13.2599346 C9.23255652,13.2599346 9.36716336,13.1474537 9.36716336,13.008721 L9.36716336,10.2768984 C9.36716336,10.1381656 9.23255652,10.0256847 9.06653389,10.0256847 L5.79733871,10.0256847 C5.63131609,10.0256847 5.49670924,10.1381656 5.49670924,10.2768984 L5.49670924,13.008721 C5.49670924,13.1474537 5.63131609,13.2599346 5.79733871,13.2599346 Z"></path>
                                                    <path id="Shape" d="M11.0583544,13.2599346 L14.3275496,13.2599346 C14.4935723,13.2599346 14.6281791,13.1474537 14.6281791,13.008721 L14.6281791,10.2768984 C14.6281791,10.1381656 14.4935723,10.0256847 14.3275496,10.0256847 L11.0583544,10.0256847 C10.8923318,10.0256847 10.757725,10.1381656 10.757725,10.2768984 L10.757725,13.008721 C10.757725,13.1474537 10.8923318,13.2599346 11.0583544,13.2599346 Z"></path>
                                                    <path id="Shape" d="M16.3193702,13.2599346 L19.5885654,13.2599346 C19.754588,13.2599346 19.8891948,13.1474537 19.8891948,13.008721 L19.8891948,10.2768984 C19.8891948,10.1381656 19.754588,10.0256847 19.5885654,10.0256847 L16.3193702,10.0256847 C16.1533476,10.0256847 16.0187407,10.1381656 16.0187407,10.2768984 L16.0187407,13.008721 C16.0187407,13.1474537 16.1533476,13.2599346 16.3193702,13.2599346 Z"></path>
                                                    <path id="Shape" d="M5.79733871,17.6561731 L9.06653389,17.6561731 C9.23255652,17.6561731 9.36716336,17.5436922 9.36716336,17.4049595 L9.36716336,14.6731369 C9.36716336,14.5344041 9.23255652,14.4219232 9.06653389,14.4219232 L5.79733871,14.4219232 C5.63131609,14.4219232 5.49670924,14.5344041 5.49670924,14.6731369 L5.49670924,17.4049595 C5.49670924,17.5436922 5.63131609,17.6561731 5.79733871,17.6561731 Z"></path>
                                                    <path id="Shape" d="M11.0583544,17.6561731 L14.3275496,17.6561731 C14.4935723,17.6561731 14.6281791,17.5436922 14.6281791,17.4049595 L14.6281791,14.6731369 C14.6281791,14.5344041 14.4935723,14.4219232 14.3275496,14.4219232 L11.0583544,14.4219232 C10.8923318,14.4219232 10.757725,14.5344041 10.757725,14.6731369 L10.757725,17.4049595 C10.757725,17.5436922 10.8923318,17.6561731 11.0583544,17.6561731 Z"></path>
                                                    <path id="Shape" d="M16.3193702,17.6561731 L19.5885654,17.6561731 C19.754588,17.6561731 19.8891948,17.5436922 19.8891948,17.4049595 L19.8891948,14.6731369 C19.8891948,14.5344041 19.754588,14.4219232 19.5885654,14.4219232 L16.3193702,14.4219232 C16.1533476,14.4219232 16.0187407,14.5344041 16.0187407,14.6731369 L16.0187407,17.4049595 C16.0187407,17.5436922 16.1533476,17.6561731 16.3193702,17.6561731 Z"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <span class="calendarBlock_box-input--span1" v-if="plus"> <span class="calendarBlock_box-input--spanPlus1">+</span>3</span>

                        </div>
                        <calendar v-show="showObjact.calendar" v-if="nextFunction" :onCalendar='onCalendar' ></calendar>
                    </div>
                    <div class="Saech_colum">
                        <div class="Saech_colum-day" @click="showMobile('night')">
                            <div>на {{from}}-{{to}} ночей</div>
                        </div>
                        <night v-show=" showObjact.night" :onNight='onNight' :dateComponent = dateComponent></night>
                    </div>
                    <div class="Saech_colum">
                        <div class="Saech_colum-why" @click="showMobile('Famuly')" ><div  v-if="cleanFamuly">{{allGr}} взрослых <span v-if="allCh">  + {{allCh}}  реб..</span></div> <span class="Saech_colum-why-span">.</span></div>
                       <famuly v-show="showObjact.Famuly" :onFamuly="onFamuly" ></famuly>
                    </div>
                    <div class="Saech_colum">
                        <div class="Saech_colum-button">Найти туры</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>
<script>

    import calendar from "./calendar.vue";
    import night from "./night.vue";
    import Famuly from "./famuly.vue";
    export default {
        components: {Famuly, night,calendar},
        props: [

        ],
        data() {
            return {
              from: 3,
              to: 10,
              showObjact: {
              night: false,
              calendar: false,
              Famuly : false
              },
              cleanDate: true,
              dateComponent: (("0" +(new Date()).getDate()).slice(-2) + '.' +  ("0" + ((new Date()).getMonth()+1)).slice(-2) + '.' + (new Date()).getFullYear()),
              allGr : 1,
              allCh: '',
              cleanFamuly: true,
              tree: 'asdasd',
              plus: true

              // nextE: false,
              // night: false,
              // calendar: false,
              // Famuly : false


            }

        },
        methods: {
            onCalendar: function(data){

                this.showObjact.calendar = data.calendar;
                this.cleanDate = data.cleanDate;
                this.dateComponent = data.dateComponent;
                this.nextE = data.nextE;
                this.plus = data.plus;



            },
            onNight: function(data) {
                this.from = data.fromN;
                this.to = data.toN;
                this.showObjact.night = data.night;
                this.nextE = data.nextE;


            },
            showMobile: function(e){

                // if(this.nextE){
                //     this.showNext();
                // }
                for (let prop in this.showObjact) {
                    if( this.showObjact[prop] != this.showObjact[e]){
                        this.showObjact[prop] = false;
                    }
                }
                this.showObjact[e] = !this.showObjact[e];


            },
            // showNext: function(){
            //     this.nextE = false;
            //     for (let prop in this.showObjact) {
            //         this.showObjact[prop] = false;
            //     }
            //     this.showObjact['night'] = true;
            //
            // },
            onFamuly: function(data){
                this.allGr = data.allGr;
                this.allCh = data.allCh;
                this.showObjact.Famuly = data.Famuly;
                this.cleanFamuly= data.cleanFamuly;


            },

        },
        computed: {
            nextFunction: function () {
              return true
            }
            // nightToFrom: function(){
            //     return  this.$root.$data.fromToNight;
            // },
            // showMobileD: function(){
            //    return  this.$root.$data.showMobile['date'];
            // },
            // showMobileN: function(){
            //     return  this.$root.$data.showMobile['night'];
            // },

            // dateNow: function(){
            //     return this.$root.$data.dateComponent;
            // },
            // cleanDate: function () {
            //     return  this.$root.$data.cleanDate;
            // }
        },
        // created() {
        //     for (let prop in this.showObjact){
        //
        //         this.showObjact[prop] = false;
        //     }
        //     this.showObjact[this.nextE] = true;
        // }


    }
</script>

<style lang="scss" scoped>
    .Saech_colum{
        cursor: pointer;
    }


</style>