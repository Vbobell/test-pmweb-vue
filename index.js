import Vue from 'vue';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import stockInit from 'highcharts/modules/stock';
import mapInit from 'highcharts/modules/map';
import App from './src/pages/App.vue';

const routes = {
  '/': App,
}

stockInit(Highcharts);
mapInit(Highcharts);
Vue.use(HighchartsVue);

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute] || NotFound;
    }
  },
  render (h) {
    return h(this.ViewComponent);
  }
});