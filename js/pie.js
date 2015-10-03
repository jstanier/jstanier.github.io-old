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
            ['Java/Scala', 10.0],
            ['StackOverflow', 7.0],
            ['Storage', 10.0],
            ['Management/Email', 50.0],
            ['Coffee', 15.0],
            ['Bad puns', 8.0],
            ]
        }]
    });
});
