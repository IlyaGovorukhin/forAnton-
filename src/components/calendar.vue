<template>
    <section>
        <div class="calendarBlock">
            <div class="Block_box-line">
                <div class="Block_box-line--text">Дата вылета</div>
            </div>
            <div class="calendarBlock_box-up">
                <div class="calendarBlock_box-left">
                    <div class="calendarBlock_box-Month">
                        <div class="calendarBlock_box-Month--a" v-for="(Month,i) in getMonth" :key="Month.id"
                             @click="goto(`Month_${i}`, $event )"> {{ Month[0] }} <span
                                class="calendarBlock_box-Month--span">{{yearCalen != Month[1] ? Month[1] : '' }}</span>
                        </div>
                    </div>
                </div>
                <div class="calendarBlock_box-right">
                    <div class="calendarBlock_box-input">
                        <input name="calendarBlock_box-input--checkbox" type="checkbox" @click="plusSpan"
                               v-model="hoverClass" true-value="4" false-value="1">
                        <span class="calendarBlock_box-input--span"> <span
                                class="calendarBlock_box-input--spanPlus">+</span>3 ночи</span>
                    </div>
                    <div class="calendarBlock_box-top">
                        <span v-for="(day,i) in days" :class="`day_${i}`">{{day}}</span>
                    </div>
                    <div class="calendarBlock_box-days" ref="win" v-scroll="handleScroll">
                        <div v-for="(Month, a) in getDaysInMonth" :ref="`Month_${a}`">
                            <div class="calendarBlock_box-days--item">{{ getMonth[a][0] }}</div>
                            <div class="calendarBlock_box-right--ul">
                                <div class="calendarBlock_box-right--empt" v-for="days in  Month.FistDay"></div>
                                <div class="calendarBlock_box-right--li" v-for="(days,i) in  Month.day"
                                     :id=" `idDay_${Month.day[i].dayMunth}`"
                                     @mouseover="overLeaveMethod(Month.day[i],true)"
                                     @mouseleave="overLeaveMethod(Month.day[i],false)"
                                     :class="[Month.day[i].hover ? 'hoverClass' : '' , Month.day[i].click ? 'clickColorChoose' : '', Month.day[i].empti ? 'emptiFasle':'',Month.day[i].hoverclick ? 'hoverClass2':''  ]"
                                     @click="addDate(Month.day[i], $event )">
                                    {{Month.day[i].day}}

                                </div>
                            </div>
                        </div>
                        <div class="calendarBlock_box-empt"></div>
                    </div>

                </div>
            </div>
            <div class="calendarBlock_box">
                <a class="calendarBlock_box-buttom1" @click="cleanbox">Очистить</a>
                <a class="calendarBlock_box-buttom2" @click="showModal">Применить</a>
            </div>

        </div>

    </section>
</template>

<script>
    export default {
        props: [
            'onCalendar'
        ],
        data() {
            return {
                yearCalen: (new Date()).getFullYear(),
                daysCalen: [],
                monthsCalen: [],
                rus: ["Январь",
                    "Февраль",
                    "Март",
                    "Апрель",
                    "Май",
                    "Июнь",
                    "Июль",
                    "Август",
                    "Сентябрь",
                    "Октябрь",
                    "Ноябрь",
                    "Декабрь"],
                days: ["Пн", "Вт", "Ср", "Чт", "Пн", "Сб", "Вс"],
                hoverClass: 4,
                hoverClass2: 4,
                dayAll: [],
                cleanDate: true,
                calendar: true,
                dateComponent: (("0" + (new Date()).getDate()).slice(-2) + '.' + ("0" + ((new Date()).getMonth() + 1)).slice(-2) + '.' + (new Date()).getFullYear()),
                nextE: false,
                elem: 65,
                plus: true

            }
        },
        methods: {
            set: function () {
                return {
                    calendar: this.calendar,
                    cleanDate: this.cleanDate,
                    dateComponent: this.dateComponent,
                    nextE: this.nextE,
                    plus: this.plus
                }
            },
            showModal: function () {
                this.calendar = false;
                this.nextE = true;
                this.addData();
                this.calendar = true;
                this.nextE = false;
            },
            plusSpan: function () {
                this.plus = !this.plus;
                this.addData();
            },
            addData: function () {
                this.onCalendar(this.set())
            },
            addDate: function (e) {
                if (((((e.month - 1) >= (new Date()).getMonth()) && (e.year === this.yearCalen))) || (e.year > this.yearCalen)) {
                    if ((new Date()).getMonth() === (e.month - 1)) {
                        if (e.day >= (new Date()).getDate()) {
                            this.clickFalse(e)
                        } else {
                            this.dateComponent = (("0" + (new Date()).getDate()).slice(-2) + '.' + ("0" + ((new Date()).getMonth() + 1)).slice(-2) + '.' + (new Date()).getFullYear());
                        }
                    } else {
                        this.clickFalse(e)
                    }
                    this.addData();
                }
            },
            clickFalse: function (e) {
                this.dateComponent = (e.day + '.' + (e.month) + '.' + e.year);
                this.dayAll.forEach((elem) => {
                    for (let prop in elem) {
                        if (elem[prop].length) {
                            elem[prop].find(x => {
                                x.hoverclick = false;
                                if (!x.empti) {
                                    x.dayMunth === e.dayMunth ? x.click = true : x.click = false
                                    for (let a = 0; a < this.hoverClass; a++) {
                                        if (x.dayMunth + a === e.dayMunth) {
                                            x.hoverclick = true;
                                        } else if ((x.dayMunth - a === e.dayMunth)) {
                                            x.hoverclick = true;
                                        }
                                    }
                                }

                            })
                        }
                    }
                })
            },
            cleanbox: function () {
                this.cleanDate = false;
                this.addData();
                this.cleanDate = true;
            },
            goto: function (e, x) {
                this.cleanElem('calendarBlock_box-Month--a', "activeM");
                this.cleanElem('calendarBlock_box-Month--span', "activeM");
                let elem = this.elem, win = this.$refs["win"], element = this.$refs[e][0].offsetTop;

                function dogo(element, win, elem, callback) {
                    if (window.outerWidth <= 480) {
                        elem = 100
                    }
                    win.scrollTo({bottom: 10, top: element - elem, behavior: "smooth"});
                    callback();
                }

                function Finished() {
                    x.target.classList.add("activeM");
                }

                dogo(element, win, elem, Finished);
            },
            handleScroll: function (event, elem) {
                this.cleanElem('calendarBlock_box-Month--a', "activeM");
                let y = document.getElementsByClassName('calendarBlock_box-Month--a'),
                    x = elem.scrollTop,
                    z = [-5, 156, 312, 468, 651, 807, 963, 1146, 1302, 1458, 1641, 1797];
                for (let i = 0; i < z.length; i++) {
                    if ((x > z[i]) && ((x < z[i + 1]) || (z[i + 1] === undefined))) {
                        y[i].classList.add("activeM");
                    } else {
                        y[i].classList.remove("activeM")
                    }
                }
            },
            cleanElem: function (itemClass, classClin) {
                let y = document.getElementsByClassName(itemClass);
                for (let i = 0; i < y.length; i++) {
                    y[i].classList.remove(classClin);
                }
            },
            overLeaveMethod: function (x, y) {
                let e = x.dayMunth
                this.dayAll.forEach((elem) => {
                    for (let prop in elem) {
                        if (elem[prop].length) {
                            if (!x.empti) {
                                elem[prop].find(x => {
                                    if (!x.empti) {
                                        for (let a = 0; a < this.hoverClass; a++) {
                                            if (x.dayMunth + a === e) {
                                                x.hover = y;
                                            }

                                            if (x.dayMunth - a === e) {
                                                x.hover = y;
                                            }
                                        }
                                    }
                                })
                            }
                        }
                    }
                })
            }
        },

        computed: {

            getMonth() {
                let months = [], mon = (new Date()).getMonth();
                for (let i = mon; i <= 11; i++) {
                    this.monthsCalen.push(i);
                    months.push([this.rus[i], (new Date()).getFullYear(), false]);
                }
                for (let i = 0; i < mon; i++) {
                    this.monthsCalen.push(i);
                    months.push([this.rus[i], (new Date()).getFullYear() + 1, false]);
                }
                return months;
            },
            getDaysInMonth() {
                Date.prototype.daysInMonth = function () {
                    return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
                };

                function OneDay(day, FistDay) {
                    this.day = day;
                    this.FistDay = FistDay
                }

                let $dayAll = [],
                    oneDay = 0,
                    yearCalen = this.yearCalen,

                    monthsCalen = this.monthsCalen;
                for (let i = 0; i < this.monthsCalen.length; i++) {
                    let monsArray = [], x = 0;
                    i < this.monthsCalen[i] ? x = 0 : x = 1;
                    returnArray(i, x, monsArray, yearCalen);
                    $dayAll.push(new OneDay(monsArray, getFistDay(new Date(yearCalen + x, monthsCalen[i], 1))));
                }

                function returnArray(i, x, monsArray, yearCalen) {
                    let meca = (new Date(yearCalen + x, monthsCalen[i], 1)).daysInMonth();
                    for (let a = 1; a <= meca; a++) {
                        monsArray.push({
                            day: ("0" + (a)).slice(-2),
                            dayMunth: oneDay++,
                            hover: false,
                            empti: false,
                            click: false,
                            month: ("0" + (monthsCalen[i] + 1)).slice(-2),
                            year: yearCalen + x,
                            hoverclick: false
                        });
                    }
                    console.log(yearCalen + x)
                    return monsArray
                }

                function getFistDay(date) {
                    let day = date.getDay();
                    if (day === 0) day = 7;
                    return day - 1;
                }

                this.dayAll = $dayAll;
                return $dayAll;
            },

        },
        mounted() {
            this.dayAll.forEach((elem) => {
                for (let prop in elem) {
                    if (elem[prop].length) {
                        elem[prop].find(e => {
                            if (((((e.month - 1) >= (new Date()).getMonth()))) || (e.year > this.yearCalen)) {
                                if ((new Date()).getMonth() === (e.month - 1)) {
                                    if (e.day >= (new Date()).getDate()) {
                                    } else {
                                        e.empti = true;
                                    }
                                }
                            }
                        })
                    }
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .emptiFasle {
        color: #b0b7bb !important;

        &:hover {
            background-color: #ffffff !important;
        }
    }

    .widthBlock {
        width: 100vw !important;
    }

    .calendarBlock_box-days--item {
        font-size: 12px;
        font-weight: 600;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: normal;
        text-transform: uppercase;
        color: #8f8f8f;
        margin-left: 9px;
        margin-top: 9px;

    }


    .calendarBlock {
        position: absolute;
        width: 389px;
        height: 363px;
        box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.31);
        background-color: #ffffff;
        margin: 0 auto;


    }

    .calendarBlock_box-up {
        display: flex;
        overflow: hidden;
        flex-direction: row;
        height: 316px;


    }

    .calendarBlock_box-days {
        overflow: auto;
        /*position: absolute;*/
    }

    .calendarBlock_box-right--ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin-top: 5px;
    }

    .calendarBlock_box-right--li, .calendarBlock_box-right--empt, .calendarBlock_box-top span {
        text-align: center;
        margin: 1.5px;
        width: 32px;
        height: 24px;
        border-radius: 4px;

    }

    .calendarBlock_box-input {
        position: relative;
        border-bottom: 1px solid #c6c6c6;
        margin: 0 6px;
    }

    .calendarBlock_box-input input {
        position: absolute;
        display: block;
        width: 13px;
        opacity: 0;
        z-index: 1;
        left: 0;
        top: 11px;

    }

    .calendarBlock_box-input--span:before {
        content: "\00A0";
        display: inline-block;
        box-sizing: border-box;
        width: 14px;
        height: 14px;
        background-color: white;
        border-radius: 2px;
        border: 1px solid #aab3bc;
        vertical-align: baseline;
        text-align: center;
        color: red;
        position: absolute;
        left: 3px;
        top: 11px;
        line-height: 14px;

    }

    .calendarBlock_box-input--span {
        display: flex;
        margin-left: 24px;
    }


    input[name="calendarBlock_box-input--checkbox"]:checked + .calendarBlock_box-input--span:before {
        content: '\2713';
        font-size: 14px;
        background-color: #0787ca;
        color: #ffffff;
    }

    .calendarBlock_box-right {
        display: flex;
        flex-direction: column;
        /*position: relative;*/

    }

    .calendarBlock_box-year {
        position: sticky;
        top: 0;
    }

    .calendarBlock_box-Month {
        display: flex;
        flex-direction: column;
        width: 129px;
    }


    .hoverClass {
        background: #ecf0f7;
    }
    .hoverClass2 {
        background: #ecf0f7;
    }

    .calendarBlock_box-left {
        width: 129px;
        height: 316px;
        background-color: #ecf0f7;
    }

    .calendarBlock_box-Month--a {

        font-family: Lato;
        font-size: 14px;
        line-height: 1.86;
        letter-spacing: 0.5px;
        color: #000;
        padding: 0 13px;
        cursor: pointer;


    }

    .activeM {

        background: #0d80c7 !important;
        color: #ffffff !important;
        /*transition:  background 0.01s, color 0.01s;*/
    }


    .calendarBlock_box-right--li {
        font-size: 14px;
        line-height: 1.86;
        text-align: center;
        color: #000;

    }

    .calendarBlock_box-days a {
        font-size: 12px;
        font-weight: 600;
        color: #8f8f8f;
        text-transform: uppercase;
        font-family: OpenSans;
        margin-left: 8px;

    }

    .calendarBlock_box-top span {
        font-size: 12px;
        font-weight: bold;
        color: #0d80c7;
        line-height: 24px;
    }

    .calendarBlock_box-top {
        display: flex;
        justify-content: flex-start;
        width: 100%;


    }

    .calendarBlock_box {
        height: 45px;
        background: #ffffff;
        display: flex;
        justify-content: space-between;
        padding: 0 18px;
        border-top: solid 1px #c6c6c6;

    }

    .calendarBlock_box a {
        font-family: Arial;
        font-size: 14px;
        font-weight: bold;
        line-height: 45px;

        &:last-child {
            color: #0787ca;

        }

        &:first-child {
            color: #3e4e5d;
        }


    }


    .calendarBlock_box-input {
        height: 38px;
        line-height: 38px;
        display: flex;

    }


    .calendarBlock_box-days::-webkit-scrollbar-track {
        background-color: #ececec;;
    }

    .calendarBlock_box-days::-webkit-scrollbar {
        width: 10px;
        background-color: #F5F5F5;
    }

    .calendarBlock_box-days::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: #b0b7bb;
    }

    .calendarBlock_box-Month span {
        font-size: 14px;
        letter-spacing: 0.5px;
        color: #8f8f8f;
        float: right;
    }

    .calendarBlock_box-right--li {
        cursor: pointer;

        &:hover {
            background-color: #b5e3ff;
        }
    }

    .calendarBlock_box-empt {
        height: 60px;
    }

    .calendarBlock_box-input--spanPlus {
        border-bottom: 1px solid #000;
        margin-bottom: 15px;
        line-height: 33px;
        width: 8px;
        margin-right: 2px;

    }


</style>

