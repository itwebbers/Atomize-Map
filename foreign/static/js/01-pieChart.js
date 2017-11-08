$(function () {
    let picData = [
        ['Pepperoni', 33],
        ['Hawaiian', 26],
        // ['Mushroom', 22],
        // ['Sausage', 10], // Below limit.
        // ['Anchovies', 9] // Below limit.
    ];
    pieChartRender = function (picData, dom) {
        google.charts.load('current', {
            'packages': ['corechart']
        });
        google.charts.setOnLoadCallback(drawChart);

        function drawChart() {

            var data = new google.visualization.DataTable();
            data.addColumn('string', 'Pizza');
            data.addColumn('number', 'Populartiy');
            data.addRows(picData);
            var options = {
                title: 'Popularity hospital',
                sliceVisibilityThreshold: .2,
                backgroundColor: 'transparent',
                legend: 'none',
                titleTextStyle: {
                    color: '#fff8ac',
                    fontName: 'Arial',
                    fontSize: 16,
                    bold: false,
                    // italic: <boolean> 
                },
                chartArea: {
                    width: 120,
                    height: 120
                },
                pieSliceTextStyle: {
                    color: '#333',
                    fontName: 'Arial',
                    fontSize: 11
                },
                slices: {
                    0: {
                        color: '#67cfff'
                    },
                    1: {
                        color: '#fff8ac'
                    }
                },
                pieResidueSliceColor: '#333'
            };

            var chart = new google.visualization.PieChart(document.getElementById(dom));
            chart.draw(data, options);
        }

    }
    pieChartRender(picData, 'piechart_1');
    pieChartRender(picData, 'piechart_2');
    pieChartRender(picData, 'piechart_3');

    function setTitle() {
        setTimeout(function () {
            $.each($('.piechart svg'), function (i, v) {
                // console.log($(v).children('g').eq(0).children('text').attr('y'))
                if ($(v)) {
                    $(v).children('g').eq(0).find('text').attr('y', 196);
                    $(v).children('g').eq(0).find('text').eq(1).attr('x', 90)
                } else {
                    return;
                }
            })
        }, 1000)
    }
    setTitle();
})