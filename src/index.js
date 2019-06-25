// JS
import './js/'
import './assets/scss/main.scss'

// SCSS


// CSS (example)
// import './assets/css/main.css'

// Vue.js
window.Vue = require('vue');

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        el.removeEventListener('scroll', f)
      }
    }
    el.addEventListener('scroll', f)
  }
})


// Vue components (for use in html)
Vue.component('seachbox-component', require('./components/seachBox.vue').default);
// Vue init

const app = new Vue({
  el: '#app',
  props: {

  },
  data(){
    return {
    }
  }

})
