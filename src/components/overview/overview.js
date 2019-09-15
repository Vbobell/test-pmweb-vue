import OverviewItem from '../overview-item/overview-item.vue';
import api from '../../service/api.js';

export default {
    data() {
        return {
            "cards":{
                "hours_music":{
                    "hours": 0,
                    "percent_diference": 0
                },
                "quantity_bands":{
                    "bands": 0,
                    "percent_diference": 0
                },
                "lost_artists":{
                    "losts": 0,
                    "percent_diference": 0
                }
            }
        }
    },
    mounted() {
        api.get('/resumeCards.json').then(({ data }) => {
            this.cards = data.cards;
        });
    }, 
    components:{
        'OverviewItem': OverviewItem,
    }
}