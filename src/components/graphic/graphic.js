import api from '../../service/api.js';
import splineGraphic from '../../models/highcharts/spline-graphic.js';

export default {
    mounted() {
        api.get('/hoursQuantity.json').then(({ data }) => {
            this.chartOptions.series[0].data = data.hours_quantity.hours;
            this.chartOptions.series[1].data = data.hours_quantity.quantity;
        });
    }, 
    data() {
        return splineGraphic("Horas de música x Quantidade de bandas");
    }
}