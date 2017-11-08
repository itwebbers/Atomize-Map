$(function () {
    google.charts.load('current', {
        'packages': ['corechart']
    });
    google.charts.setOnLoadCallback(drawChart);



    $('#line_chart').find('svg').children('g').eq(1).remove();

    function drawChart() {
        var dataLine = google.visualization.arrayToDataTable([
            ['Time', 'Expenses'],
            ['0:00', 100],
            ['3:00', 260],
            ['6:00', 430],
            ['9:00', 620],
            ['12:00', 720],
            ['15:00', 630],
            ['18:00', 410],
            ['21:00', 340],
            ['24:00', 140]
        ]);

        var lineOptions = {
            title: 'Kuala Lupur today nebulization frequency -- Time curve',
            titleTextStyle: { color: 'transparent',
                fontSize: 18,
                bold: true },
            animation: {
                easing: 'linear'
            },
            curveType: 'function',
            legend: {
                position: 'bottom'
            },
            backgroundColor: 'transparent',
            crosshair: {
                color: 'transparent',
            },
            hAxis: {
                baseline: 0,
                baselineColor: 'transparent',
                textStyle: {
                    color: '#67cfff',
                    fontSize: 9
                },
            },
            vAxis: {
                gridlines: {
                    color: 'transparent',
                    count: 6,
                },
                baselineColor: 'transparent',
                textStyle: {
                    color: 'transparent'
                }
            },
            lineWidth: 1,
            trendlines: {
                0: {
                    type: 'linear',
                    color: 'red',
                    lineWidth: 3,
                    opacity: 0.3,
                    showR2: true,
                    visibleInLegend: true
                }
            },
            chartArea: {
                width: '95%',
                height: '50%'
            }
        };

        var lineChart = new google.visualization.LineChart(document.getElementById('line_chart'));

        lineChart.draw(dataLine, lineOptions);
    }
    setTimeout(function () {
        if ($('#line_chart').find('svg').children('g').length) {
            $('#line_chart').find('svg').children('g').eq('0').css('text-align', 'center')
            $('#line_chart').find('svg').children('g').eq('1').remove()
        }
        // $('#line_chart svg>rect').attr('width', $('#line_chart svg>rect').attr('width')-10);
        // console.log($('#line_chart svg>rect').attr('width'))
    }, 1000)

})