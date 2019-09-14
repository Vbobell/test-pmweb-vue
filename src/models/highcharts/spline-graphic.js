
const splineGraphic = (title) => {
    return {
        title: '',
        chartType: 'Spline',
        animationDuration: 1000,
        chartOptions: {
            chart: {
                type: 'spline',
                style: {
                    fontFamily: 'Gotham-Medium'
                }
            },
            title: {
                text: title,
                align: 'left',
                useHTML: true,
                style: {
                    color: '#666666'
                }
            },
            xAxis: {
                categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
            },
            yAxis: [{
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() {
                        return this.value +'h'
                    }
                }
            }, {
                title: {
                    text: ''
                },
                labels: {
                    formatter: function() {
                        return this.value
                    }
                },
                opposite: true
            }],
            legend: {
                align: 'right',
                verticalAlign: 'top',
                borderRadius: '5px'
            },
            plotOptions: {
                spline: {
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: 'Horas de música',
                color: '#7ba8ff',
                data: [],
                yAxis: 0
            }, {
                name: 'Quantidade de bandas',
                color: '#6fcd98',
                data: [],
                yAxis: 1
            }]
        }
    }
}

export default splineGraphic;

