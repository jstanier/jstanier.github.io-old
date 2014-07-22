$(function() {
    $('.not-work-chart').highcharts({
        chart: {
            type: 'column',
            backgroundColor:'rgba(0, 0, 0, 0)'
        },
        title: {
            text: ''
        },
        xAxis: {
            title: {
                text: 'Activity'
            },
            categories: [
                'Coffee',
                'Reading',
                'Exercising',
                'Programming',
                'Meditating',
                'Yoga',
                'Sleeping'
            ]
        },
        tooltip: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        yAxis: {
            title: {
                text: 'Percentage of time'
            },
            min: 0,
        },
        series: [{
            showInLegend: false,
            name: 'Time spent',
            data: [27.0, 20.0, 10.0, 15.0, 2.0, 1.0, 25.0]
        }]
    });
});