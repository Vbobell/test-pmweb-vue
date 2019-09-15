import Vue from 'vue';
import HighchartsVue from 'highcharts-vue';
import Highcharts from 'highcharts';
import stockInit from 'highcharts/modules/stock';
import mapInit from 'highcharts/modules/map';
import JwPagination from 'jw-vue-pagination';
import App from './src/pages/App.vue';

const routes = {
  '/': App,
}

stockInit(Highcharts);
mapInit(Highcharts);

Vue.use(HighchartsVue);
Vue.component('jw-pagination', JwPagination);

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