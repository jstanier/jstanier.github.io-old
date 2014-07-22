$(function () {
    $('.time-chart').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: true,
            backgroundColor:'rgba(0, 0, 0, 0)'
        },
        title: {
            text: '',
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        credits: {
            enabled: false
        },
        tooltip: {
            enabled: false
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f}%',
                    style: {
                        fontFamily: 'Roboto',
                    },
                    showInLegend: true
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Time spent',
            data: [
            ['Java/Spring/Kafka', 25.0],
            ['StackOverflow', 2.0],
            ['PostgreSQL', 10.0],
            ['Python', 5.0],
            ['Management/Email', 35.0],
            ['Coffee', 15.0],
            ['Bad puns', 8.0],
            ]
        }]
    });
});