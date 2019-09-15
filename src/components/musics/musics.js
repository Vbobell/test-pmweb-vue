import api from '../../service/api.js';

const customLabels = {
    first: '',
    last: '',
    previous: '<',
    next: '>'
};

export default {
    data() {
        return {
            musics: [{
                "id": 0,
                "title": "Não há músicas",
                "rate": 0,
                "date_record": "",
                "artist": ""
            }],
            pageOfItems: [],
            customLabels
        };
    },
    mounted() {
        api.get('/musics.json').then(({ data }) => {
            this.musics = data.musics;
            this.pageOfItems = this.musics.slice(0, 10);
        });
    },
    methods: {
        onChangePage(pageOfItems) {
            this.pageOfItems = pageOfItems;
        }
    }
};