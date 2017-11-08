;
(function ($) {
    $.fn.extend({
        /**
         * 设置当日日期与时间
         */
        setTimer: function (dom) {
            var newDate = new Date(),
                toDate = newDate.toLocaleString();
            dom.html(toDate);
        },
        /**
         * 检测dom是否存在
         */
        exist: function(){ 
            if($(this).length>=1){
                return true;
            }
            return false;
        },
        /**
         * 展示tips
         */
        showTips: function () {
            var arg = (arguments[0]),
                i = 0,
                t = setInterval(function () {
                    // console.log(arg[i]);
                    var city = arg[i].c[0].v;
                    var setLeft = $("text:contains(" + city + ")").attr('x') - 20,
                        setTop = $("text:contains(" + city + ")").attr('y') - 40;
                    html = `<div class="showTips" style="position:absolute; top:${setTop}px;left:${setLeft}px;">
                            <span>${arg[i].c[0].v} hospital</span>&nbsp;
                            <i>+ ${arg[i].c[1].v}</i>
                        </div>`;
                    if ($('.showTips')) {
                        $('.showTips').remove();
                        $('#chart_map').append(html);
                        // console.log(html)
                    } else {
                        $('#chart_map').append(html);
                    }
                    i++;
                    if (i == arg.length) {
                        // clearInterval(t);
                        i = 0;
                        console.log("循环");
                    }
                    // setTipsDta(arg[i]);
                }, 1000)
        },
        /**
         * show the city name
         */
        showCityName: function () {
            var arg = (arguments[0]),
                i = 0,
                t = setInterval(function () {
                    var city = arg[i].c[0].v;
                    var setLeft = $("text:contains(" + city + ")").attr('x'),
                        setTop = $("text:contains(" + city + ")").attr('y'),
                        cityName = `<span class="cityName" style="position:absolute; top:${setTop}px;left:${setLeft}px;">${arg[i].c[0].v}</span>`;

                    $('#chart_map').append(cityName);
                    i++;
                    if (i == arg.length) {
                        clearInterval(t);
                        // i = 0;
                        console.log("循环");
                    }
                    // setTipsDta(arg[i]);
                }, 1)
        },
        /**
         * tooltips的配置参数
         */
        setTips: function (geoChart, dataMap, len) {
            var html = '';
            //动态获取各州市坐标
            var timer = setInterval(function () {
                // if(geoChart.Fl.iD.Tq.length){
                //     window.location.reload()
                // }
                $('#chart_map path').attr('stroke-width', '0');
                if (geoChart.Fl.iD.Tq.length === len) {
                    clearInterval(timer);
                    $('.container').show();
                    $('.masker').hide();
                    $('.chart_map').show()
                    NProgress.done();
                    $('.fade').removeClass('out');
                    // $('#chart_map path').attr('stroke-width', '0')
                    $.fn.showTips(dataMap.og);
                    // $.fn.showCityName(dataMap.og);
                } else {
                    return;
                }
                $('#chart_map svg').children('g').children('g').eq(1).remove()
                $('#visualization svg').children('g').children('g').eq(1).remove()
                $('#chart_map svg g text').css('font-size', '11')
            }, 2000);
        },
        /**
         * city hospital data tips
         */
        cityHospitalTips: function () {
            var arg = (arguments[0]),
                i = 0,
                t = setInterval(function () {
                    // console.log(arg[i]);
                    var city = arg[i].name,
                        setTop = parseFloat(arg[i].x),
                        setLeft = parseFloat(arg[i].y),
                        val = arg[i].value;
                    setLeft *= 1.34;
                    setTop *= 1.4;
                    html = `<div class="showTips" style="position:absolute; top:${setLeft}px;left:${setTop}px;">
                        <span>${city} hospital</span>&nbsp;
                        <i>+ ${val}</i>
                    </div>`;
                    if ($('.showTips')) {
                        $('.showTips').remove();
                        $('.nth2_center').append(html);
                        // console.log(html)
                    } else {
                        $('.nth2_center').append(html);
                    }
                    i++;
                    if (i == arg.length) {
                        // clearInterval(t);
                        i = 0;
                        console.log("循环");
                    }
                    // setTipsDta(arg[i]);
                }, 1000)
        },
        /**
         * 数字特效
         */
        setFunNum: function (num) {
            var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
            $('#funCount').animateNumber({
                    number: num,
                    numberStep: comma_separator_number_step
                },
                1800
            );
        },
        /**
         * 医院雾化数据处理
         */
        change_data: function (obj) {
            console.log(obj[0])
            if (obj.length <= 100) { /*地区所有医院打组 1-100个医院有数据两个医院为一组展示数据  >100个医院有数据三个医院为一组展示数据*/
                if (obj.length < 1) {
                    return;
                } else if (obj.length == 1) {
                    query_single_data(obj[0], 0);
                } else {
                    for (var i = 0; i < obj.length; i += 2) {
                        if (i == obj.length - 1) {
                            query_single_data(obj[i], Math.floor(i / 2));
                        } else {
                            query_single_data(obj[i], Math.floor(i / 2));
                            query_single_data(obj[i + 1], Math.floor(i / 2));
                        }
                    }
                }

            } else {
                for (var i = 0; i < obj.length; i += 3) {
                    if (i == obj.length - 2) {
                        query_single_data(obj[i], Math.floor(i / 3));
                        query_single_data(obj[i + 1], Math.floor(i / 3));
                    } else if (i == obj.length - 1) {
                        query_single_data(obj[i], Math.floor(i / 3));
                    } else {
                        query_single_data(obj[i], Math.floor(i / 3));
                        query_single_data(obj[i + 1], Math.floor(i / 3));
                        query_single_data(obj[i + 2], Math.floor(i / 3));
                    }
                }
            }
        },
        /**
         * 设置bar的条形lable文字
         */
        setBarLable: function () {
            setTimeout(() => {
                let labelData = $('#top_bar_div svg').children('g').eq(0).children('g').eq(3).find('text');
                $.each(labelData, (i, v) => {
                    $(v).attr({
                        'x': 490,
                        'fill': '#67cfff'
                    })
                })
            }, 1000);
        },
        /**
         * bar条形图数据
         */
        setChartData: function (options, url, chart) {
            $.ajax({
                type: "POST",
                dataType: "html",
                data: {

                },
                url: url,
                success: function (datas) {
                    var data = google.visualization.arrayToDataTable(JSON.parse(datas)["data"]);

                    var view = new google.visualization.DataView(data);
                    view.setColumns([0, 1,
                        {
                            calc: "stringify",
                            sourceColumn: 1,
                            type: "string",
                            role: "annotation"
                        },
                        2
                    ]);

                    chart.draw(view, options);
                }
            });
        },
        /**
         * 地图背景绘制
         */
        setMapCharts: function (region, color, width, height, charts, data) {
            var geoChartsOpts = {
                region: region,
                displayMode: 'regions',
                resolution: 'provinces',
                colorAxis: {
                    colors: [color, color]
                },
                backgroundColor: 'transparent',
                enableRegionInteractivity: false,
                datalessRegionColor: 'transparent',
                // defaultColor: '#ccc',
                // width: $('.nth2').width(),
                chartArea: {
                    width: '95%',
                    height: '50%'
                },
                width: width,
                height: height,
                keepAspectRatio: true,
                // height: $(window).height()
            };

            // visualization
            charts.draw(data, geoChartsOpts);
        },
    });
})(jQuery);