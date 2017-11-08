var TODAY_USE_TIMES = "0",
    TODAY_JHL = "0",
    ALL_SEC_INTERVAL = "0",
    ALL_SEC_INTERVAL_H = "0",
    ALL_SEC_INTERVAL_M = "0",
    ALL_SEC_INTERVAL_S = "0",
    CHAIN_LINE_DATA = "",
    timechart_maxnum = 0,
    queryType = getQueryString("queryType"),
    province = getQueryString("province"),
    city = getQueryString("city"),
    mapFlag = getQueryString("mapFlag") == '' ? 2 : getQueryString("mapFlag");
$(function () {
    tick();
    goMapType();
    // setInterval(function(){
    //     window.location.reload();
    // },45000);
    flexslider();
});

//页面加载时载入江苏省地图
function goMapType() {
    if(queryType=='province' || queryType=='' || mapFlag==2){
		if(province==''){
			province = '江苏';
		}
		init_Provicnce_page();
		var time = 10000*10;
		setInterval(function(){
			init_Provicnce_page();
	    },time);
	}
}
//地级市渲染
init_city_page = function () {
    $('#container').addClass('city_page');
    $('#city_top_5').remove();
    $('#hos_top_5').remove();
    $('#area_main').html();
    $('#title_name').html(city + '今日嘟保宝实时数据');
    /*省级地图相关数据*/
    var map_province_obj = {
        target: city,
        map: '江苏'
    };
    init_small_province(map_province_obj);
    $('.area_little h3').text('江苏省');
    queryCityData();
    // flexslider();
}



function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return decodeURI(r[2]);
    return '';
}

/**文字特效 */
function flexslider() {
    //数字轮滑效果
    $('#atomization_number,#atomization_percent,#atomization_percent1').numberAnimate();
    TODAY_USE_TIMES = 1027;
    TODAY_JHL = parseInt(TODAY_USE_TIMES / 1.7);
    var newAdd = 238;
    newAdd += 17;
    $('#atomization_number').numberAnimate('set', TODAY_USE_TIMES);
    $('#atomization_percent').numberAnimate('set', TODAY_JHL);
    $('#atomization_percent1').numberAnimate('set', newAdd);
    setInterval(function () {
        /*雾化地图处理*/
        var newCount = parseInt(Math.random(0, 1)*100);
        TODAY_USE_TIMES += newCount;
        TODAY_JHL = parseInt(TODAY_USE_TIMES / 1.7);
        
        newAdd += 17;
        var atomization_number_pagent = $('#atomization_number').parent();
        var atomization_percent_pagent = $('#atomization_percent').parent();
        var atomization_percent_pagent1 = $('#atomization_percent1').parent();
        atomization_number_pagent.html('');
        atomization_percent_pagent.html('');
        atomization_percent_pagent1.html(' ');
        atomization_number_pagent.append('<i id="atomization_number"></i>次');
        atomization_percent_pagent.append('<i id="atomization_percent"></i>人');
        atomization_percent_pagent1.append('<i id="atomization_percent1"></i>人');
        $('#atomization_number,#atomization_percent,#atomization_percent1').numberAnimate();
        $('#atomization_number').numberAnimate('set', TODAY_USE_TIMES);
        $('#atomization_percent').numberAnimate('set', TODAY_JHL);
        $('#atomization_percent1').numberAnimate('set', newAdd);
    }, 600000); //10*60000
}



/*初始化 省级页面 */
init_Provicnce_page = function () {
    var provinceJson = {
        "useDeviceNum": 240,
        "deviceNum": 701,
        "cityMessList": {
            "无锡市": 381,
            "盐城市": 299,
            "徐州市": 108,
            "连云港市": 91,
            "宿迁市": 72,
            "淮安市": 43,
            "盐城市": 30,
            "扬州市": 22,
            "南京市": 19,
            "镇江市": 12,
            "宿迁市": 210,
            "南通市": 88,
            "常州市": 59,
            "苏州市": 456,
            "泰州市": 176
        },
        "timeDataArray": [
            [1],
            [0],
            [2],
            [1],
            [0],
            [2],
            [1],
            [15],
            [155],
            [237],
            [154],
            [74],
            [42],
            [43],
            [82],
            [115],
            [127],
            [24]
        ],
        "hosMessList": [{
            "attrs": {
                "HOSPITAL_NAME": "宿迁市人民医院",
                "DATANUM": 164
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚å„¿ç«¥åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 164,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚å„¿ç«¥åŒ»é™¢", 164]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "东南大学附属医院",
                "DATANUM": 46
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå„¿ç«¥åŒ»é™¢å›­åŒº",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 46,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå„¿ç«¥åŒ»é™¢å›­åŒº", 46]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "无锡医院",
                "DATANUM": 44
            },
            "attrsEntrySet": [{
                "value": "è‹åŒ—äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 44,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹åŒ—äººæ°‘åŒ»é™¢", 44]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏无锡儿童医院",
                "DATANUM": 41
            },
            "attrsEntrySet": [{
                "value": "ä»ªå¾å¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 41,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["ä»ªå¾å¸‚ä¸­åŒ»é™¢", 41]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "无锡市区人民医院",
                "DATANUM": 38
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå„¿ç«¥åŒ»é™¢æ™¯å¾·è·¯",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 38,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå„¿ç«¥åŒ»é™¢æ™¯å¾·è·¯", 38]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏妇幼保洁",
                "DATANUM": 32
            },
            "attrsEntrySet": [{
                "value": "å¤ªä»“å¸‚ç¬¬ä¸€äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 32,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¤ªä»“å¸‚ç¬¬ä¸€äººæ°‘åŒ»é™¢", 32]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏省协和医院",
                "DATANUM": 28
            },
            "attrsEntrySet": [{
                "value": "ç›åŸŽå¸‚ç¬¬ä¸‰äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 28,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["ç›åŸŽå¸‚ç¬¬ä¸‰äººæ°‘åŒ»é™¢", 28]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏盐城市区医院",
                "DATANUM": 27
            },
            "attrsEntrySet": [{
                "value": "å§œå °å¸‚äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 27,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å§œå °å¸‚äººæ°‘åŒ»é™¢", 27]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏人民共同医院",
                "DATANUM": 27
            },
            "attrsEntrySet": [{
                "value": "å—äº¬å¸‚åŒä»åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 27,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å—äº¬å¸‚åŒä»åŒ»é™¢", 27]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏开始健康医院",
                "DATANUM": 27
            },
            "attrsEntrySet": [{
                "value": "å—äº¬å¸‚æ±Ÿå®åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 27,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å—äº¬å¸‚æ±Ÿå®åŒ»é™¢", 27]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏城市医院",
                "DATANUM": 23
            },
            "attrsEntrySet": [{
                "value": "æ˜†å±±ç¬¬ä¸‰äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 23,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ˜†å±±ç¬¬ä¸‰äººæ°‘åŒ»é™¢", 23]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏克什米尔医院",
                "DATANUM": 21
            },
            "attrsEntrySet": [{
                "value": "å¸¸å·žå¸‚ç¬¬ä¸ƒäººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 21,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¸¸å·žå¸‚ç¬¬ä¸ƒäººæ°‘åŒ»é™¢", 21]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏打你林医院",
                "DATANUM": 19
            },
            "attrsEntrySet": [{
                "value": "å§œå °å¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 19,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å§œå °å¸‚ä¸­åŒ»é™¢", 19]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏猥琐医院",
                "DATANUM": 19
            },
            "attrsEntrySet": [{
                "value": "å®œå…´å¸‚å®˜æž—åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 19,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å®œå…´å¸‚å®˜æž—åŒ»é™¢", 19]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏开始减价医院",
                "DATANUM": 19
            },
            "attrsEntrySet": [{
                "value": "è‹å·žæœ¨æ¸Žäººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 19,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žæœ¨æ¸Žäººæ°‘åŒ»é™¢", 19]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "wu",
                "DATANUM": 19
            },
            "attrsEntrySet": [{
                "value": "å¥å®¹å¸‚äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 19,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¥å®¹å¸‚äººæ°‘åŒ»é™¢", 19]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏稳住我们能赢医院",
                "DATANUM": 17
            },
            "attrsEntrySet": [{
                "value": "é’±æ¡¥è¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 17,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["é’±æ¡¥è¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ", 17]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏妲己医院",
                "DATANUM": 17
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚ç¬¬å…«äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 17,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚ç¬¬å…«äººæ°‘åŒ»é™¢", 17]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "è‹å·žç§‘æŠ€åŸŽåŒ»é™¢",
                "DATANUM": 17
            },
            "attrsEntrySet": [{
                "value": "è‹å·žç§‘æŠ€åŸŽåŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 17,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žç§‘æŠ€åŸŽåŒ»é™¢", 17]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "ç›¸åŸŽåŒºç¬¬äºŒäººæ°‘åŒ»é™¢",
                "DATANUM": 16
            },
            "attrsEntrySet": [{
                "value": "ç›¸åŸŽåŒºç¬¬äºŒäººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 16,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["ç›¸åŸŽåŒºç¬¬äºŒäººæ°‘åŒ»é™¢", 16]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "å—é€šå¤§å­¦é™„å±žåŒ»é™¢",
                "DATANUM": 16
            },
            "attrsEntrySet": [{
                "value": "å—é€šå¤§å­¦é™„å±žåŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 16,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å—é€šå¤§å­¦é™„å±žåŒ»é™¢", 16]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "的广泛地个放到",
                "DATANUM": 15
            },
            "attrsEntrySet": [{
                "value": "å¸¸å·žå¸‚å¤©å®åŒºéƒ‘é™†é•‡å«ç”Ÿé™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 15,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¸¸å·žå¸‚å¤©å®åŒºéƒ‘é™†é•‡å«ç”Ÿé™¢", 15]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "2娿的",
                "DATANUM": 15
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´ç¬¬äº”äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 15,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ±Ÿé˜´ç¬¬äº”äººæ°‘åŒ»é™¢", 15]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "发顺丰到付飞",
                "DATANUM": 15
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚ç¬¬ä¹äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 15,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚ç¬¬ä¹äººæ°‘åŒ»é™¢", 15]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "æ— é”¡å®‰é•‡åŒ»é™¢",
                "DATANUM": 15
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å®‰é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 15,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å®‰é•‡åŒ»é™¢", 15]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "亲吻鱼",
                "DATANUM": 14
            },
            "attrsEntrySet": [{
                "value": "å—äº¬å¸‚ä¸­è¥¿åŒ»ç»“åˆåŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 14,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å—äº¬å¸‚ä¸­è¥¿åŒ»ç»“åˆåŒ»é™¢", 14]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "面积的所得税",
                "DATANUM": 14
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿å¯¿åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 14,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ±Ÿé˜´å¸‚é•¿å¯¿åŒ»é™¢", 14]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "vbxf粉色是",
                "DATANUM": 14
            },
            "attrsEntrySet": [{
                "value": "å¼ å®¶æ¸¯å¹¿å’Œäººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 14,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¼ å®¶æ¸¯å¹¿å’Œäººæ°‘åŒ»é™¢", 14]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "è‹å·žå¸‚ä¸­åŒ»é™¢",
                "DATANUM": 13
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 13,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå¸‚ä¸­åŒ»é™¢", 13]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "交话费所得税 ",
                "DATANUM": 13
            },
            "attrsEntrySet": [{
                "value": "å¤ªä»“å¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 13,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¤ªä»“å¸‚ä¸­åŒ»é™¢", 13]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "我发送的好地方",
                "DATANUM": 13
            },
            "attrsEntrySet": [{
                "value": "å¸¸ç†Ÿå¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 13,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¸¸ç†Ÿå¸‚ä¸­åŒ»é™¢", 13]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "阿萨德的办法",
                "DATANUM": 13
            },
            "attrsEntrySet": [{
                "value": "å—äº¬æ˜ŽåŸºåŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 13,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å—äº¬æ˜ŽåŸºåŒ»é™¢", 13]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "å¹¿ç‘žè¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ",
                "DATANUM": 13
            },
            "attrsEntrySet": [{
                "value": "å¹¿ç‘žè¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 13,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¹¿ç‘žè¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ", 13]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "马哥丰台一听说风暴",
                "DATANUM": 12
            },
            "attrsEntrySet": [{
                "value": "æ³°å·žå¦‡äº§åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 12,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ³°å·žå¦‡äº§åŒ»é™¢", 12]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "男人太深入",
                "DATANUM": 12
            },
            "attrsEntrySet": [{
                "value": "ä»ªå¾å¸‚äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 12,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["ä»ªå¾å¸‚äººæ°‘åŒ»é™¢", 12]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "没发短信",
                "DATANUM": 11
            },
            "attrsEntrySet": [{
                "value": "é«˜é‚®å¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 11,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["é«˜é‚®å¸‚ä¸­åŒ»é™¢", 11]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "个地方官",
                "DATANUM": 11
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚ç¬¬ä¸‰äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 11,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚ç¬¬ä¸‰äººæ°‘åŒ»é™¢", 11]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "风格的股份的",
                "DATANUM": 10
            },
            "attrsEntrySet": [{
                "value": "å—äº¬å¸‚ç¬¬ä¸€åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 10,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å—äº¬å¸‚ç¬¬ä¸€åŒ»é™¢", 10]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "郭德纲说分手",
                "DATANUM": 10
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 10,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ±Ÿé˜´å¸‚ä¸­åŒ»é™¢", 10]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "沙发沙发沙发",
                "DATANUM": 9
            },
            "attrsEntrySet": [{
                "value": "æº§é˜³å¸‚æœæ¸šé•‡å«ç”Ÿé™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 9,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æº§é˜³å¸‚æœæ¸šé•‡å«ç”Ÿé™¢", 9]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "å¸¸å·žå¸‚æ–°åŒ—åŒºå­Ÿæ²³äººæ°‘åŒ»é™¢",
                "DATANUM": 9
            },
            "attrsEntrySet": [{
                "value": "å¸¸å·žå¸‚æ–°åŒ—åŒºå­Ÿæ²³äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 9,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¸¸å·žå¸‚æ–°åŒ—åŒºå­Ÿæ²³äººæ°‘åŒ»é™¢", 9]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "受过伤的发货",
                "DATANUM": 9
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå´ä¸­äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 9,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå´ä¸­äººæ°‘åŒ»é™¢", 9]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "郭德纲的规定 ",
                "DATANUM": 9
            },
            "attrsEntrySet": [{
                "value": "çŽ‹å°æ˜Žå…¨ç§‘åŒ»å­¦è¯Šæ‰€",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 9,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["çŽ‹å°æ˜Žå…¨ç§‘åŒ»å­¦è¯Šæ‰€", 9]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "发生过的",
                "DATANUM": 8
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚ä¸­åŒ»åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 8,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚ä¸­åŒ»åŒ»é™¢", 8]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "è‹å·žé«˜æ–°åŒºäººæ°‘åŒ»é™¢",
                "DATANUM": 8
            },
            "attrsEntrySet": [{
                "value": "è‹å·žé«˜æ–°åŒºäººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 8,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žé«˜æ–°åŒºäººæ°‘åŒ»é™¢", 8]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "哦ids",
                "DATANUM": 8
            },
            "attrsEntrySet": [{
                "value": "å¼ å®¶æ¸¯é”¦ä¸°ä¸­å¿ƒåŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 8,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¼ å®¶æ¸¯é”¦ä¸°ä¸­å¿ƒåŒ»é™¢", 8]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "回事撒的",
                "DATANUM": 7
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚é”¡å±±åŒºåŽå®…é•‡å«ç”Ÿé™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 7,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚é”¡å±±åŒºåŽå®…é•‡å«ç”Ÿé™¢", 7]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "发送防辐射的省份",
                "DATANUM": 7
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚ç’œå¡˜å«ç”Ÿé™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 7,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ±Ÿé˜´å¸‚ç’œå¡˜å«ç”Ÿé™¢", 7]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "æº§é˜³å¸‚äººæ°‘åŒ»é™¢",
                "DATANUM": 6
            },
            "attrsEntrySet": [{
                "value": "æº§é˜³å¸‚äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 6,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æº§é˜³å¸‚äººæ°‘åŒ»é™¢", 6]
        }, {
            "attrs": {
                "HOSPITAL_NAME": " 范德萨发的身份飞",
                "DATANUM": 6
            },
            "attrsEntrySet": [{
                "value": "å¸¸ç†Ÿæ°‘æ…ˆåŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 6,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¸¸ç†Ÿæ°‘æ…ˆåŒ»é™¢", 6]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非的",
                "DATANUM": 6
            },
            "attrsEntrySet": [{
                "value": "æº§é˜³å¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 6,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æº§é˜³å¸‚ä¸­åŒ»é™¢", 6]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "è‹å·žå¸‚ç«‹åŒ»é™¢ä¸œåŒº",
                "DATANUM": 6
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå¸‚ç«‹åŒ»é™¢ä¸œåŒº",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 6,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå¸‚ç«‹åŒ»é™¢ä¸œåŒº", 6]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "身份发顺丰到付飞的 ",
                "DATANUM": 5
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿè‹çœæµ·å®‰åŽ¿äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 5,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ±Ÿè‹çœæµ·å®‰åŽ¿äººæ°‘åŒ»é™¢", 5]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "是辅导费的飞",
                "DATANUM": 5
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 5,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢", 5]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "凤飞飞而非 ",
                "DATANUM": 5
            },
            "attrsEntrySet": [{
                "value": "å®¿è¿å¸‚äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 5,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å®¿è¿å¸‚äººæ°‘åŒ»é™¢", 5]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "合格 方法",
                "DATANUM": 5
            },
            "attrsEntrySet": [{
                "value": "å®œå…´å¸‚å’Œæ¡¥åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 5,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å®œå…´å¸‚å’Œæ¡¥åŒ»é™¢", 5]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "方法方法方法",
                "DATANUM": 5
            },
            "attrsEntrySet": [{
                "value": "å¤ªä»“æµæ²³äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 5,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¤ªä»“æµæ²³äººæ°‘åŒ»é™¢", 5]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "非法违法我非人防我范围",
                "DATANUM": 4
            },
            "attrsEntrySet": [{
                "value": "å¸¸ç†Ÿå¸‚ç¬¬ä¸€äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 4,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¸¸ç†Ÿå¸‚ç¬¬ä¸€äººæ°‘åŒ»é™¢", 4]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非我发完范围我",
                "DATANUM": 4
            },
            "attrsEntrySet": [{
                "value": "é«˜é‚®å¸‚äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 4,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["é«˜é‚®å¸‚äººæ°‘åŒ»é™¢", 4]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "非我方无法无法我范围飞",
                "DATANUM": 4
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå¤§å­¦é™„å±žç¬¬äºŒåŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 4,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå¤§å­¦é™„å±žç¬¬äºŒåŒ»é™¢", 4]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非而王菲王菲潍坊",
                "DATANUM": 3
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå·¥ä¸šå›­åŒºæ˜Ÿæ¹–åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 3,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå·¥ä¸šå›­åŒºæ˜Ÿæ¹–åŒ»é™¢", 3]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非分为非额外飞",
                "DATANUM": 3
            },
            "attrsEntrySet": [{
                "value": "æ²­é˜³åŽ¿ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 3,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ²­é˜³åŽ¿ä¸­åŒ»é™¢", 3]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "潍坊而非为分为非我",
                "DATANUM": 2
            },
            "attrsEntrySet": [{
                "value": "é‡‘æ˜Ÿè¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 2,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["é‡‘æ˜Ÿè¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ", 2]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非额我分为非飞",
                "DATANUM": 2
            },
            "attrsEntrySet": [{
                "value": "å®œå…´å¸‚ä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 2,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å®œå…´å¸‚ä¸­åŒ»é™¢", 2]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非微蜂窝范围 ",
                "DATANUM": 1
            },
            "attrsEntrySet": [{
                "value": "æº§é˜³å¸‚å¤©ç›®æ¹–é•‡å«ç”Ÿé™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æº§é˜³å¸‚å¤©ç›®æ¹–é•‡å«ç”Ÿé™¢", 1]
        }, {
            "attrs": {
                "HOSPITAL_NAME": " 发我分为非额外发我",
                "DATANUM": 1
            },
            "attrsEntrySet": [{
                "value": "å¼ å®¶æ¸¯é¹¿è‹‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¼ å®¶æ¸¯é¹¿è‹‘åŒ»é™¢", 1]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非微蜂窝范围",
                "DATANUM": 1
            },
            "attrsEntrySet": [{
                "value": "è‹å·žå·¥ä¸šå›­åŒºæ˜Ÿæµ·åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["è‹å·žå·¥ä¸šå›­åŒºæ˜Ÿæµ·åŒ»é™¢", 1]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "潍坊微蜂窝飞额外",
                "DATANUM": 1
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚æƒ å±±åŒºäººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚æƒ å±±åŒºäººæ°‘åŒ»é™¢", 1]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非微蜂窝 我",
                "DATANUM": 1
            },
            "attrsEntrySet": [{
                "value": "ä¸Šé©¬å¢©è¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["ä¸Šé©¬å¢©è¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ", 1]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "潍坊范围范围",
                "DATANUM": 0
            },
            "attrsEntrySet": [{
                "value": "å¼ å®¶æ¸¯å¸‚ç¬¬ä¸€äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 0,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¼ å®¶æ¸¯å¸‚ç¬¬ä¸€äººæ°‘åŒ»é™¢", 0]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "分为非额外发微蜂窝",
                "DATANUM": 0
            },
            "attrsEntrySet": [{
                "value": "å¸¸å·žå¸‚ä¸­åŒ»åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 0,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["å¸¸å·žå¸‚ä¸­åŒ»åŒ»é™¢", 0]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "方法飞 ",
                "DATANUM": 0
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡é”¡å±±åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 0,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡é”¡å±±åŒ»é™¢", 0]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "顺丰到付水电费的",
                "DATANUM": 0
            },
            "attrsEntrySet": [{
                "value": "æ— é”¡å¸‚ç¬¬äºŒä¸­åŒ»åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 0,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ— é”¡å¸‚ç¬¬äºŒä¸­åŒ»åŒ»é™¢", 0]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "水电费的身份的身份是",
                "DATANUM": 0
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿæµ·è¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 0,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["æ±Ÿæµ·è¡—é“ç¤¾åŒºå«ç”ŸæœåŠ¡ä¸­å¿ƒ", 0]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "飞的身份司法所",
                "DATANUM": 0
            },
            "attrsEntrySet": [{
                "value": "é€šå·žåŒºä¸­åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 0,
                "key": "DATANUM"
            }],
            "attrNames": ["HOSPITAL_NAME", "DATANUM"],
            "attrValues": ["é€šå·žåŒºä¸­åŒ»é™¢", 0]
        }],
        "userTimes": 602311,
        "px": 34,
        "dataNum": 1075,
        "hosTenMinList": [{
            "attrs": {
                "HOSPITAL_NAME": "无锡儿童医院",
                "LAST_TEN_MIN_USE": 3,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 164,
                "COORDINATE": "120.31191, 31.491169",
                "city": "无锡市"
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三甲医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 164,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.331698,31.54611",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["无锡儿童医院", 10, "三级医院", 164, "120.331698,31.54611"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "江苏市人民医院",
                "LAST_TEN_MIN_USE": 20,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 27,
                "COORDINATE": "120.585728, 31.2974",
                "city": "苏州市"
            },
            "attrsEntrySet": [{
                "value": "å§œå °å¸‚äººæ°‘åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 27,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.162011,32.513263",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["江苏市人民医院", 1, "三级医院", 27, "120.162011,32.513263"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "苏北人民医院",
                "LAST_TEN_MIN_USE": 18,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 27,
                "COORDINATE": "117.284124, 34.205768",
                "city": "徐州市",
            },
            "attrsEntrySet": [{
                "value": "å—äº¬å¸‚æ±Ÿå®åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 27,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "118.856057,31.956703",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["苏北人民医院", 1, "三级医院", 27, "118.856057,31.956703"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "盐城人民医院",
                "LAST_TEN_MIN_USE": 12,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 271,
                "COORDINATE": "120.163107, 33.347708",
                "city": '盐城市'
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 271,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "128.856057,41.956703",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["盐城人民医院", 1, "二级医院", 271, "128.856057,41.956703"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "常州中医院",
                "LAST_TEN_MIN_USE": 34,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 340,
                "COORDINATE": "119.974061, 31.811226",
                "city": "常州市"
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 340,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.894676,31.981143",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["常州中医院", 1, "二级医院", 340, "120.894676,31.981143"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "南京人民医院",
                "LAST_TEN_MIN_USE": 14,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 179,
                "COORDINATE": "118.796682, 32.05957",
                "city": "南京市"
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 179,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "118.796682,32.05957",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["南京人民医院", 1, "二级医院", 179, "118.796682,32.05957"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "苏州市中医院",
                "LAST_TEN_MIN_USE": 8,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 200,
                "COORDINATE": "120.585728, 31.2974",
                "city": '苏州市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 200,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.163107,33.347708",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["苏州市中医院", 1, "三级医院", 200, "120.163107,33.347708"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "常州协和医院",
                "LAST_TEN_MIN_USE": 6,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 149,
                "COORDINATE": "119.974061, 31.811226",
                "city": '常州'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 149,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "119.974061,31.811226",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["常州协和医院", 1, "三级医院", 149, "119.974061,31.811226"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "连云港儿童医院",
                "LAST_TEN_MIN_USE": 21,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 408,
                "COORDINATE": "119.221611, 34.596653",
                "city": '连云港市'
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 408,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "119.221611,34.596653",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["连云港儿童医院", 1, "二级医院", 408, "119.221611,34.596653"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "宿迁市人民医院",
                "LAST_TEN_MIN_USE": 18,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 308,
                "COORDINATE": "118.275198, 33.963232",
                "city": '宿迁市'
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 308,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "118.275198,33.963232",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["宿迁市人民医院", 1, "二级医院", 308, "118.275198,33.963232"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "南通市人民医院",
                "LAST_TEN_MIN_USE": 16,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 608,
                "COORDINATE": "120.894676, 31.981143",
                "city": '南通市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 608,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.894676,31.981143",
                "key": "COORDINATE"
            }, {
                "value": "南通市",
                "key": "city"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE","city"],
            "attrValues": ["南通市人民医院", 1, "二级医院", 608, "120.894676,31.981143", "南通市"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "苏州市人民医院",
                "LAST_TEN_MIN_USE": 16,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 608,
                "COORDINATE": "120.585728, 31.2974",
                "city": '苏州市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 608,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.585728,31.2974",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["苏州市人民医院", 1, "二级医院", 608, "120.585728,31.2974"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "徐州市人民医院",
                "LAST_TEN_MIN_USE": 16,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 508,
                "COORDINATE": "117.284124, 34.205768",
                "city": '徐州市'
            },
            "attrsEntrySet": [{
                "value": "æ±Ÿé˜´å¸‚é•¿æ³¾é•‡åŒ»é™¢",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 508,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "117.284124,34.205768",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["徐州市人民医院", 1, "二级医院", 508, "117.284124,34.205768"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "南京市人民医院",
                "LAST_TEN_MIN_USE": 16,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 508,
                "COORDINATE": "118.796682, 32.05957",
                "city": '南京市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 508,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "117.284124,34.205768",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["南京市人民医院", 1, "二级医院", 508, "117.284124,34.205768"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "无锡市人民医院",
                "LAST_TEN_MIN_USE": 16,
                "HOSPITAL_LEVEL": "三级医院",
                "TODAY_USE_NUM": 108,
                "COORDINATE": "120.31191, 31.491169",
                "city": '无锡市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "三级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 108,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.31191,31.491169",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["无锡市人民医院", 1, "二级医院", 108, "120.31191,31.491169"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "常州市人民医院",
                "LAST_TEN_MIN_USE": 10,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 108,
                "COORDINATE": "119.974061, 31.811226",
                "city": '常州市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 108,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "119.974061,31.811226",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["常州市人民医院", 1, "二级医院", 108, "119.974061,31.811226"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "连云港市人民医院",
                "LAST_TEN_MIN_USE": 10,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 127,
                "COORDINATE": "119.221611, 34.596653",
                "city": '连云港市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 127,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "119.221611,34.596653",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["连云港市人民医院", 1, "二级医院", 127, "119.221611,34.596653"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "盐城市人民医院",
                "LAST_TEN_MIN_USE": 10,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 167,
                "COORDINATE": "120.163107, 33.347708",
                "city": '盐城市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 167,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "120.163107,33.347708",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["盐城市人民医院", 1, "二级医院", 167, "120.163107,33.347708"]
        }, {
            "attrs": {
                "HOSPITAL_NAME": "淮安市人民医院",
                "LAST_TEN_MIN_USE": 10,
                "HOSPITAL_LEVEL": "二级医院",
                "TODAY_USE_NUM": 167,
                "COORDINATE": "119.113185, 33.551052",
                "city": '淮安市'
            },
            "attrsEntrySet": [{
                "value": "",
                "key": "HOSPITAL_NAME"
            }, {
                "value": 1,
                "key": "LAST_TEN_MIN_USE"
            }, {
                "value": "二级医院",
                "key": "HOSPITAL_LEVEL"
            }, {
                "value": 167,
                "key": "TODAY_USE_NUM"
            }, {
                "value": "119.113185,33.551052",
                "key": "COORDINATE"
            }],
            "attrNames": ["HOSPITAL_NAME", "LAST_TEN_MIN_USE", "HOSPITAL_LEVEL", "TODAY_USE_NUM", "COORDINATE"],
            "attrValues": ["淮安市人民医院", 1, "二级医院", 167, "119.113185,33.551052"]
        }

    ]
    };
    $('#hos_top_10').remove();
    $('#title_name').html(province + '省今日嘟保宝实时数据');
    queryProvinceData(provinceJson);
    // flexslider();
};
/*以下省份地图部分*/


function queryProvinceData(provinceJson) {
    var data = provinceJson;
    if (data) {
        //$('#totalCount,#totalPercent').numberAnimate();
        console.log(data)
        TODAY_USE_TIMES = data.dataNum;
        TODAY_JHL = data.px;
        ALL_SEC_INTERVAL = data.userTimes;
        formatSeconds(ALL_SEC_INTERVAL);
        console.log(data.timeDataArray)
        var timeDataArrayData = data.timeDataArray;


        var timeDataArrayDataY = [];
        for (var i = 0; i < timeDataArrayData.length; i++) {
            timeDataArrayData[i] += parseInt(Math.random(0, 1)*10);
            var arr = timeDataArrayData[i] + "";
            timeDataArrayDataY[i] = arr;
            var temp = parseInt(arr);
            if (temp > timechart_maxnum) {
                timechart_maxnum = temp;
            }
        }
        console.log(timeDataArrayDataY)
        var timeDataArray = {
            title: province + '省嘟保宝实时数据-时间曲线',
            yData: timeDataArrayDataY
        };

        initTimeChart('timeChart', timeDataArray);

        //初始化地图数据
        if (data.dataNum >= 0) {
            var dataList = data.hosMessList;
            var dataArrayMap = [];
            for (var i = 0; i < 5; i++) {
                var hosName = dataList[i].attrs.HOSPITAL_NAME;
                if (hosName.length > 10) {
                    hosName = hosName.substring(0, 10) + "\n" + hosName.substring(10, 100);
                }
                dataArrayMap[i] = {
                    value: dataList[i].attrs.DATANUM,
                    name: hosName
                };
            }
            /*各省 top10*/
            var hos_top = {
                target: 'hos_top_5',
                title: province + '省各市今日嘟保宝使用次数TOP10',
                dataArray: [
                            {value: parseInt(Math.random(0.9, 1)*200, 10), name:'苏州市'},
                            {value: parseInt(Math.random(0.8, 0.9)*200, 10), name:'无锡市'},
                            {value: parseInt(Math.random(0.7, 0.8)*200, 10),name:'南京市'},
                            {value: parseInt(Math.random(0.6, 0.7)*200, 10),name:'扬州市'},
                            {value: parseInt(Math.random(0.5, 0.6)*200, 10),name:'常州市'},
                            {value: parseInt(Math.random(0.4, 0.5)*20, 10),name:'泰州市'},
                            {value: parseInt(Math.random(0.35, 0.4)*20, 10),name:'连云港市'},
                            {value: parseInt(Math.random(0.3, 0.35)*20, 10),name:'宿迁市'},
                            {value: parseInt(Math.random(0.2, 0.3)*20, 10),name:'盐城市'},
                            {value: parseInt(Math.random(0.1, 0.2)*20, 10),name:'南通市'}
                        ]
            };
            //对echarts传入的对象中的数组进行排序
            var newDataArray = hos_top.dataArray;
            newDataArray = newDataArray.sort(function(v1, v2){
                a = v1.value;
                b = v2.value;
                if(a > b){
                    return -1;
                }else if (a < b ){
                    return 1;
                }else {
                    return 0;
                }
            });
            console.log(newDataArray);
            hos_top.dataArray = newDataArray;
            initHostop(hos_top);
            // var city_top = {
            //     target:'city_top_5',
            //     title:'各市今日雾化次数TOP5',
            //     dataArray:[
            //         {value:500,name:'无锡'},
            //         {value:460,name:'常州'},
            //         {value:450,name:'镇江'},
            //         {value:370,name:'江苏'},
            //         {value:300,name:'南通'}
            //     ]
            // }
            // initCitytop(city_top);


            var cityMessList = data.cityMessList;
            var intTopTen = 0;
            var cityMap = [];
            for (var key in cityMessList) {
                if (intTopTen == 5) {
                    break;
                }
                var cityName = key;
                var value = cityMessList[key].toString();
                cityMap[intTopTen] = {
                    value: value,
                    name: cityName
                };
                intTopTen++;
            }

            /*var cityMessList = data.cityMessList;
			            var cityMap = [];
		        		for(var i=0;i<cityMessList.length;i++){
		        			cityMap[i] = {
		        					 value:cityMessList[i].attrs.DATANUM,
		        					 name : cityMessList[i].attrs.CITY
		        			 };
		        		} */
            /*省里各市雾化情况*/
            var city_top = {
                target: 'city_top_5',
                title: province + '各市今日雾化次数10',
                dataArray: cityMap
            };
            // initCitytop(city_top);


            //江苏省地图相关数据
            var map_obj = {
                target: '江苏',
                dataArray: [{
                        name: '无锡市儿童医院',
                        type: '三级医院',
                        total: 200,
                        value: 3,
                        geoCoord: [100.331698, 31.54611]
                    },
                    {
                        name: '无锡市妇幼保健医院',
                        type: '二级医院',
                        total: 50,
                        value: 21,
                        geoCoord: [120.31347, 31.577254]
                    },
                    {
                        name: '无锡市三甲医院',
                        type: '二级医院',
                        total: 50,
                        value: 21,
                        geoCoord: [120.31347, 31.577254]
                    },
                    {
                        name: '无锡市天雪新房医院',
                        type: '二级医院',
                        total: 50,
                        value: 21,
                        geoCoord: [120.31347, 31.577254]
                    },
                    {
                        name: '无锡市自由冰蚕医院',
                        type: '二级医院',
                        total: 50,
                        value: 21,
                        geoCoord: [120.31347, 31.577254]
                    },
                    {
                        name: '无锡市开心果医院',
                        type: '二级医院',
                        total: 50,
                        value: 21,
                        geoCoord: [120.31347, 31.577254]
                    },
                ]
            };
            // init_provicnce_map(map_obj);

            /*过去十分钟内全省地图相关数据  name 随便传进来一个就可以 type同一均为三级医院 geoCoord各省传一个坐标进来*/
            var hosTenMinList = data.hosTenMinList;
            
            var ptmMap = [];
            for (var i = 0; i < hosTenMinList.length; i++) {
                var coordinate = hosTenMinList[i].attrs.COORDINATE;
                coordinate = coordinate.replace("[", "");
                coordinate = coordinate.replace("]", "");
                var coordinateArr = coordinate.split(",");
                ptmMap[i] = {
                    name: hosTenMinList[i].attrs.HOSPITAL_NAME,
                    type: hosTenMinList[i].attrs.HOSPITAL_LEVEL,
                    total: hosTenMinList[i].attrs.TODAY_USE_NUM,
                    value: hosTenMinList[i].attrs.LAST_TEN_MIN_USE,
                    geoCoord: coordinateArr,
                    city: hosTenMinList[i].attrs.city
                };

            }
            var map_obj = {
                target: province,
                dataArray: ptmMap
            };
            init_provicnce_map(map_obj);
            // setTimeout(function(){init_provicnce_map(map_obj)}, 0);
    
        }

    }
}

/*初始化省级地图*/

init_provicnce_map = function (obj) {
    console.log(obj)
    var option = {
        tooltip: {
            show: false,
        },
        series: [{
            tooltip: {
                formatter: ''
            },
            type: 'map',
            mapType: obj.target,
            mapLocation: {
                x: 'center',
                y: 'top',
                width: '98%'
            },
            roam: false,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    borderWidth: 1,
                    borderColor: '#fbcbbe',
                    color: '#fff',
                    label: {
                        show: true,
                        textStyle: {
                            color: "#ff9271",
                            fontSize: 12,
                        }
                    }
                },
                emphasis: { // 也是选中样式
                    borderWidth: 1,
                    borderColor: '#fbcbbe',
                    color: 'skyblue',
                    label: {
                        show: true,
                        textStyle: {
                            color: "#8a9499",
                            fontSize: 12,
                        }
                    }
                }
            },
            data: [{
                    name: '北京',
                    selected: false
                },
                {
                    name: '天津',
                    selected: false
                },
                {
                    name: '上海',
                    selected: false
                },
                {
                    name: '重庆',
                    selected: false
                },
                {
                    name: '河北',
                    selected: false
                },
                {
                    name: '河南',
                    selected: false
                },
                {
                    name: '云南',
                    selected: false
                },
                {
                    name: '辽宁',
                    selected: false
                },
                {
                    name: '黑龙江',
                    selected: false
                },
                {
                    name: '湖南',
                    selected: false
                },
                {
                    name: '安徽',
                    selected: false
                },
                {
                    name: '山东',
                    selected: false
                },
                {
                    name: '新疆',
                    selected: false
                },
                {
                    name: '江苏',
                    selected: false
                },
                {
                    name: '浙江',
                    selected: false
                },
                {
                    name: '江西',
                    selected: false
                },
                {
                    name: '湖北',
                    selected: false
                },
                {
                    name: '广西',
                    selected: false
                },
                {
                    name: '甘肃',
                    selected: false
                },
                {
                    name: '山西',
                    selected: false
                },
                {
                    name: '内蒙古',
                    selected: false
                },
                {
                    name: '陕西',
                    selected: false
                },
                {
                    name: '吉林',
                    selected: false
                },
                {
                    name: '福建',
                    selected: false
                },
                {
                    name: '贵州',
                    selected: false
                },
                {
                    name: '广东',
                    selected: false
                },
                {
                    name: '青海',
                    selected: false
                },
                {
                    name: '西藏',
                    selected: false
                },
                {
                    name: '四川',
                    selected: false
                },
                {
                    name: '宁夏',
                    selected: false
                },
                {
                    name: '海南',
                    selected: false
                },
                {
                    name: '台湾',
                    selected: false
                },
                {
                    name: '香港',
                    selected: false
                },
                {
                    name: '澳门',
                    selected: false
                },
            ]
        }],
        animation: false
    };
    var data_append_arr = [];
    // 路径配置
    require.config({
        paths: {
            'echarts': './res/common-lib/echarts/build/dist'
        }
    });
    // 使用
    require(
        [
            'echarts/echarts',
            'echarts/chart/map'
        ],
        function (ec) {
            var ecConfig = require('echarts/config');
            var myChart = ec.init(document.getElementById('mapContainer'));
            //触发loading效果
            myChart.setOption(option);
            myChart.showLoading({
                animation: false,
                text: '加载中',
                textStyle: {
                    fontSize: 14
                }
            });
            $(window).resize(function () {
                myChart.resize();
            });

            //加载成功后隐藏loading
            myChart.hideLoading();

            myChart.addMarkPoint(0, {
                symbolSize: function (v) {
                    return 0
                },
                effect: {
                    show: true,
                    shadowBlur: 0
                },
                tooltip: {
                    show: false,
                },
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        borderColor: 'orange',
                        color: 'orange',
                        label: {
                            show: false,
                            position: 'top',
                            textStyle: {
                                fontStyle: 'normal',
                                fontSize: 20,
                                fontWeight: 600,
                                color: 'orange'
                            },
                            formatter: function (v) {
                                data_append_arr.push(v);
                                return v.data.city+ "  +" + v.value;
                            }
                        }
                    }
                },
                data: obj.dataArray

            });
            setTimeout(function () {
                for (var i = 0; i < obj.dataArray.length; i++) {
                    myChart.delMarkPoint(0, obj.dataArray[i].name);
                }
                change_data(data_append_arr);
            }, 0);
            init_provicnce_map_bg(obj);
        }
    );
};
/*初始化省级地图 地图背景*/
init_provicnce_map_bg = function (obj) {
    var option = {
        tooltip: {
            show: false,
        },
        series: [{
            tooltip: {
                formatter: ''
            },
            type: 'map',
            mapType: obj.target,
            mapLocation: {
                x: 'center',
                y: 'top',
                width: '98%'
            },
            roam: false,
            selectedMode: 'single',
            itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#ff9271',
                    color: 'rgba(255,255,255,0)',
                    label: {
                        show: false,
                    }
                },
                emphasis: { // 也是选中样式
                    borderWidth: 2,
                    borderColor: '#ff9271',
                    color: 'rgba(255,255,255,0)',
                    label: {
                        show: true,
                    }
                }
            },
            data: [{
                    name: '北京',
                    selected: false
                },
                {
                    name: '天津',
                    selected: false
                },
                {
                    name: '上海',
                    selected: false
                },
                {
                    name: '重庆',
                    selected: false
                },
                {
                    name: '河北',
                    selected: false
                },
                {
                    name: '河南',
                    selected: false
                },
                {
                    name: '云南',
                    selected: false
                },
                {
                    name: '辽宁',
                    selected: false
                },
                {
                    name: '黑龙江',
                    selected: false
                },
                {
                    name: '湖南',
                    selected: false
                },
                {
                    name: '安徽',
                    selected: false
                },
                {
                    name: '山东',
                    selected: false
                },
                {
                    name: '新疆',
                    selected: false
                },
                {
                    name: '江苏',
                    selected: false
                },
                {
                    name: '浙江',
                    selected: false
                },
                {
                    name: '江西',
                    selected: false
                },
                {
                    name: '湖北',
                    selected: false
                },
                {
                    name: '广西',
                    selected: false
                },
                {
                    name: '甘肃',
                    selected: false
                },
                {
                    name: '山西',
                    selected: false
                },
                {
                    name: '内蒙古',
                    selected: false
                },
                {
                    name: '陕西',
                    selected: false
                },
                {
                    name: '吉林',
                    selected: false
                },
                {
                    name: '福建',
                    selected: false
                },
                {
                    name: '贵州',
                    selected: false
                },
                {
                    name: '广东',
                    selected: false
                },
                {
                    name: '青海',
                    selected: false
                },
                {
                    name: '西藏',
                    selected: false
                },
                {
                    name: '四川',
                    selected: false
                },
                {
                    name: '宁夏',
                    selected: false
                },
                {
                    name: '海南',
                    selected: false
                },
                {
                    name: '台湾',
                    selected: false
                },
                {
                    name: '香港',
                    selected: false
                },
                {
                    name: '澳门',
                    selected: false
                },
            ]
        }],
        animation: false
    };
    var data_append_arr = [];
    // 路径配置
    require.config({
        paths: {
            'echarts': './res/common-lib/echarts/build/dist'
        }
    });
    // 使用
    require(
        [
            'echarts/echarts',
            'echarts/chart/map'
        ],
        function (ec) {
            var ecConfig = require('echarts/config');
            var myChart = ec.init(document.getElementById('mapContainer_bg'));
            //触发loading效果
            myChart.setOption(option);
            myChart.showLoading({
                animation: false,
                text: '加载中',
                textStyle: {
                    fontSize: 14
                }
            });
            $(window).resize(function () {
                myChart.resize();
            });

            //加载成功后隐藏loading
            myChart.hideLoading();
        }
    );
};

init_small_province = function (obj) {
    var cityMap = {
        '江苏': 'jiangsu',
    };
    // 路径配置
    require.config({
        paths: {
            'echarts': './res/common-lib/echarts/build/dist'
        }
    });
    // 使用
    require(
        [
            'echarts/echarts',
            'echarts/chart/map'
        ],
        function (ec) {
            var ecConfig = require('echarts/config');
            var myChart = ec.init(document.getElementById('area_main'));
            /* var mapGeoData = require('echarts/util/mapData/params');
             for (var city in cityMap) {
                 if(city == obj.map){
                     // 自定义扩展图表类型
                     mapGeoData.params[cityMap[city]] = {
                         getGeoJson: function (callback) {
                             $.getJSON('res/common-lib/echarts/china-main-city/' + cityMap[city] + '.json',callback);
                         }
                     };
                     break;
                 }
             }*/
            var option = {
                tooltip: {
                    show: false,
                },
                series: [{
                    tooltip: {
                        formatter: ''
                    },
                    type: 'map',
                    mapLocation: {
                        x: 'center',
                        y: 'top',
                        width: '98%'
                    },
                    roam: false,
                    mapType: obj.map, // 自定义扩展图表类型
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: '#000012',
                            color: 'rgba(255,255,255,.4)',
                            label: {
                                show: false,
                            }
                        },
                        emphasis: { // 也是选中样式
                            borderWidth: 4,
                            borderColor: '#000012',
                            color: 'rgba(55, 197, 240,.4)',
                            label: {
                                show: true,
                                textStyle: {
                                    color: "#000012",
                                    fontWeight: 'bold',
                                }
                            }
                        }
                    },
                    data: [{
                        name: obj.target,
                        selected: true
                    }]
                }]
            };

            //触发loading效果
            myChart.setOption(option);
            myChart.showLoading({
                animation: false,
                text: '加载中',
                textStyle: {
                    fontSize: 14
                }
            });
            $(window).resize(function () {
                myChart.resize();
            });
            //加载成功后隐藏loading
            myChart.hideLoading();
        }
    );
};


/*更新地图中医院的总体情况
 * 三级医院 紫色圆圈  二级医院 蓝色圆圈 社区医院 白色医院；
 * 使用频繁 大圈 使用较多 中圈 使用较少 小圈
 * 医院内部数据打组 1为1  数据大于2分成两组
 * 地区所有医院打组 1-100个医院有数据两个医院为一组展示数据  >100个医院有数据三个医院为一组展示数据
 * */
change_data = function (obj) {
    console.log(obj)
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
};
/*冒泡数据 打组*/
query_single_data = function (obj, time) {
    time = 10000 * time;
    setTimeout(function () {
        if (obj.value > 1) { /*医院内部数据打组 1为1  数据大于2分成两组*/
            var data_1 = Math.ceil(obj.value / 2);
            var data_2 = obj.value - Math.ceil(obj.value / 2);
            obj.value = data_1;
            add_pop(obj);
            obj.value = data_2;
            setTimeout(function () {
                add_pop(obj);
            }, 300000);
        } else {
            add_pop(obj);
        }
    }, time);
};
/*生成气泡*/
add_pop = function (obj) {
    var bg_col = ''; /*医院级别对应的颜色*/
    var wid = 0; /*医院使用频繁度 对应的圆圈大小*/
    var font_col = '1f9bc9'; /*医院10分钟刷新数据对应的颜色*/
    if (obj.data.type == '三级医院') {
        bg_col = 'd8aeff';
    } else if (obj.data.type == '二级医院') {
        bg_col = '37c5f0';
    } else if (obj.data.type == '社区医院') {
        bg_col = 'fff';
    }
    if (obj.data.total > 150) {
        wid = 'max_pop';
    } else if (obj.data.total > 50) {
        wid = 'middle_pop';
    }
    if (obj.value > 10) {
        font_col = 'ff5959';
    }
    var timer = new Date().getTime();
    var span = '<div id=' + timer + ' class="pop_tips" style="left:' + obj.data.x + 'px;top:' + obj.data.y + 'px; ">' +
        '<div class="pop_title"><span class="pop_name">' + obj.data.city + '</span><span class="pop_val" style="color: #' + font_col + ';">+<i>' + obj.value + '</i></span></div>';
    $('.main').append(span);
    setTimeout(function () {
        $('#' + timer).remove();
    }, 5000);
};

//雾化曲线
initTimeChart = function (objId, timeDataArray) {
    // 路径配置
    require.config({
        paths: {
            'echarts': './res/common-lib/echarts/build/dist'
        }
    });

    // 使用
    require(
        [
            'echarts/echarts_min',
            'echarts/chart/line'
        ],
        function (ec) {
            var ecConfig = require('echarts/config');
            var myTimeChart = ec.init(document.getElementById(objId));
            var timeChartOption = {
                title: {
                    text: timeDataArray.title,
                    x: 'center', // 水平安放位置，默认为左对齐，可选为：
                    // 'center' ¦ 'left' ¦ 'right'
                    // ¦ {number}（x坐标，单位px）
                    y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
                    // 'top' ¦ 'bottom' ¦ 'center'
                    // ¦ {number}（y坐标，单位px）
                    //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                    backgroundColor: 'rgba(255,255,255,0)',
                    // backgroundColor: '#ffffff',
                    borderColor: 'rgba(3,3, 3, .4)', // 标题边框颜色
                    borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
                    padding: 30, // 标题内边距，单位px，默认各方向内边距为5，
                    // 接受数组分别设定上右下左边距，同css
                    textStyle: {
                        fontSize: 16,
                        fontWeight: 'bolder',
                        color: '#333' // 主标题文字颜色
                    },
                },
                grid: {
                    x: 20,
                    y: 78,
                    x2: 20,
                    y2: 30,
                    borderWidth: 0
                },
                calculable: false,
                xAxis: [{
                    type: 'category',
                    name: '',
                    splitLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#333'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    scale: true,
                    axisTick: {
                        show: false
                    },
                    data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00']
                }],
                yAxis: [{
                    splitLine: {
                        show: false
                    },
                    show: false,
                    splitNumber: timechart_maxnum,
                    type: 'value'
                }],
                series: [{

                    name: '时间',
                    type: 'line',
                    smooth: true,
                    //隐藏图点
                    symbol: 'none',
                    data: timeDataArray.yData,
                    date: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00'],
                    color: '#37c5f0',
                    itemStyle: {
                        normal: {
                            width: 1,
                            color: new ec.graphic.LinearGradient(
                                0, .33, .66, 1, [{
                                        offset: 0,
                                        color: '#ff756f'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ffae8a'
                                    }
                                ]
                            ),
                        }
                    },
                }]
            };
            myTimeChart.setOption(timeChartOption);
            $(window).resize(function () {
                myTimeChart.resize();
            });

        }
    );

};

//top10医院渲染
initHostop = function (obj) {
    // 路径配置
    require.config({
        paths: {
            'echarts': './res/common-lib/echarts/build/dist'
        }
    });
    // 使用
    require(
        [
            'echarts/echarts_min',
            'echarts/chart/line',
            'echarts/chart/bar'
        ],
        function (ec) {
            var ecConfig = require('echarts/config');
            var myChart = ec.init(document.getElementById(obj.target));
            // 基于准备好的dom，初始化echarts图表
            var xData = [],
                y_label = [];

            for (var i = obj.dataArray.length - 1; i >= 0; i--) {
                y_label.push(obj.dataArray[i].name);
                xData.push(obj.dataArray[i].value);
            }
            var title = {
                text: obj.title,
                x: 'center', // 水平安放位置，默认为左对齐，可选为：
                // 'center' ¦ 'left' ¦ 'right'
                // ¦ {number}（x坐标，单位px）
                y: 'top', // 垂直安放位置，默认为全图顶端，可选为：
                // 'top' ¦ 'bottom' ¦ 'center'
                // ¦ {number}（y坐标，单位px）
                //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
                padding: 20, // 标题内边距，单位px，默认各方向内边距为5，
                // 接受数组分别设定上右下左边距，同css
                textStyle: {
                    fontSize: 16,
                    // fontWeight: 'bolder',
                    color: '#333' // 主标题文字颜色
                },
            };
            var grid = {
                x: 80,
                y: 60,
                x2: 65,
                y2: 60,
                borderWidth: 0
            };
            if (obj.target == 'hos_top_10') {
                title = {
                    text: obj.title,
                    x: 'center', // 水平安放位置，默认为左对齐，可选为：
                    // 'center' ¦ 'left' ¦ 'right'
                    // ¦ {number}（x坐标，单位px）
                    y: 'top', // 垂直安放位置，默认为全图顶端，可选为：                                              // 'top' ¦ 'bottom' ¦ 'center'
                    // ¦ {number}（y坐标，单位px）
                    //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                    borderWidth: 0, // 标题边框线宽，单位px，默认为0（无边框）
                    padding: 30, // 标题内边距，单位px，默认各方向内边距为5，
                    // 接受数组分别设定上右下左边距，同css
                    textStyle: {
                        fontSize: 24,
                        color: '#333' // 主标题文字颜色
                    },
                    subtext: obj.subtext,
                    itemGap: 10,
                    subtextStyle: {
                        fontSize: 16,
                        color: '#333' // 主标题文字颜色
                    }
                }
                grid = {
                    x: 50,
                    y: 70,
                    x2: 50,
                    y2: 70,
                    borderWidth: 0
                }
            }
            if (obj.title == '各省市今日嘟保宝使用次数TOP10') {
                grid.x = 60;
                grid.x2 = 30;
            }
            var option = {
                title: title,
                grid: grid,
                xAxis: {
                    show: true,
                    name: '次',
                    type: 'value',
                    axisLabel: {
                        interval: 0, //横轴信息全部显示
                        textStyle: {
                            color: '#333'
                        }
                    },
                    axisTick: {
                        show: true
                    },
                    splitLine: {
                        show: false
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            /*color:'#0b1b35',*/
                            width: 1,
                        }
                    },
                    z: 10
                },
                yAxis: {
                    type: 'category',
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        textStyle: {
                            color: '#333'
                        },
                    },
                    splitLine: {
                        lineStyle: {
                            color: '#333',
                            width: 1, //这里是为了突出显示加上的，可以去掉
                        }
                    },
                    data: y_label
                },
                series: [{
                    type: 'bar',
                    name: '次',
                    itemStyle: {
                        normal: {
                            color: new ec.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#ff756f'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ffae8a'
                                    }
                                ]
                            ),
                            label: {
                                show: true,
                                textStyle: {
                                    color: '#333'
                                }
                            }
                        },
                        emphasis: {
                            color: new ec.graphic.LinearGradient(
                                0, 0, 1, 0, [{
                                        offset: 0,
                                        color: '#ff756f'
                                    },
                                    {
                                        offset: 1,
                                        color: '#ffae8a'
                                    }
                                ]
                            ),
                        }
                    },
                    label: {
                        normal: {
                            show: true,
                            position: 'right'
                        }
                    },
                    barWidth: 15, //柱图宽度
                    data: xData
                }]
            };
            //触发loading效果
            myChart.setOption(option);
            myChart.showLoading({
                animation: false,
                text: '加载中',
                textStyle: {
                    fontSize: 14
                }
            });
            $(window).resize(function () {
                myChart.resize();
            });

            //加载成功后隐藏loading
            myChart.hideLoading();
        }
    );
};

/*初始化 top10市*/
initCitytop = function(obj){
    // 路径配置
        require.config({
            paths:{
                'echarts' : './res/common-lib/echarts/build/dist'
            }
        });
    // 使用
        require(
            [
                'echarts/echarts_min',
                'echarts/chart/line',
                'echarts/chart/bar'
            ],
            function (ec) {
                var ecConfig = require('echarts/config');
                var myChart = ec.init(document.getElementById(obj.target));
                // 基于准备好的dom，初始化echarts图表
                var xData=[],x_label=[]
                for(var i=0;i<obj.dataArray.length;i++){
                    x_label.push(obj.dataArray[i].name);
                    xData.push(obj.dataArray[i].value);
                }
                var option = {
                    title: {
                        text: obj.title,
                        x: 'center',                 // 水平安放位置，默认为左对齐，可选为：
                        // 'center' ¦ 'left' ¦ 'right'
                        // ¦ {number}（x坐标，单位px）
                        y: 'top',                  // 垂直安放位置，默认为全图顶端，可选为：
                                                   // 'top' ¦ 'bottom' ¦ 'center'
                                                   // ¦ {number}（y坐标，单位px）
                        //textAlign: null          // 水平对齐方式，默认根据x设置自动调整
                        borderWidth: 0,            // 标题边框线宽，单位px，默认为0（无边框）
                        padding: 10,                // 标题内边距，单位px，默认各方向内边距为5，
                        // 接受数组分别设定上右下左边距，同css
                        textStyle: {
                            fontSize: 14,
                            color: '#37c5f0'          // 主标题文字颜色
                        },
                    },
                    grid:{
                        x:80,
                        y:78,
                        x2:40,
                        y2:30,
                        borderWidth:0
                    },
                    xAxis: {
                        data: x_label,
                        axisLabel: {
                            inside: false,
                            textStyle: {
                                color: '#37c5f0'
                            }
                        },
                        axisTick: {
                            show: false
                        },
                        splitLine: {show: false},
                        axisLine: {
                            show: true
                        },
                        z: 10
                    },
                    yAxis: {
                        axisLine: {
                            show: false
                        },
                        axisTick: {
                            show: false
                        },
                        axisLabel:{
                            textStyle: {
                                color: '#37c5f0'
                            },
                        },
                        splitLine:{
                            lineStyle:{
                                color:'#0b1b35',
                                width:1,//这里是为了突出显示加上的，可以去掉
                            }
                        }
                    },
                    series: [
                        {
                            type: 'bar',
                            itemStyle: {
                                normal: {
                                    color:new ec.graphic.LinearGradient(
                                        0,1, 0, 0,
                                        [
                                            {offset: 0, color: '#e9acff'},
                                            {offset: 1, color: '#6bbfff'}
                                        ]
                                    ),
                                    label: {
                                        show: true,
                                        position:'bottom',
                                        textStyle: {
                                            color: '#37c5f0'
                                        }
                                    }
                                },
                                emphasis: {
                                    color:new ec.graphic.LinearGradient(
                                       0, 1, 0, 0,
                                        [
                                            {offset: 0, color: '#e9acff'},
                                            {offset: 1, color: '#6bbfff'}
                                        ]
                                    ),
                                }
                            },
                            label:{
                                normal:{
                                    show:true,
                                    position:'top'
                                }
                            },
                            barWidth : 30,//柱图宽度
                            data: xData
                        }
                    ]
                };
                //触发loading效果
                myChart.setOption(option);
                myChart.showLoading({
                    animation:false,
                    text : '加载中',
                    textStyle : {fontSize : 14}
                });
                $(window).resize(function(){
                    myChart.resize();
                });
    
                //加载成功后隐藏loading
                myChart.hideLoading();
            }
        );
    };

function formatSeconds(value) {
    var theTime = parseInt(value); // 秒
    var theTime1 = 0; // 分
    var theTime2 = 0; // 小时
    if (theTime > 60) {
        theTime1 = parseInt(theTime / 60);
        theTime = parseInt(theTime % 60);
        if (theTime1 > 60) {
            theTime2 = parseInt(theTime1 / 60);
            theTime1 = parseInt(theTime1 % 60);
        }
    }
    var result = "" + parseInt(theTime) + "秒";
    if (theTime1 > 0) {
        result = "" + parseInt(theTime1) + "分" + result;
    }
    if (theTime2 > 0) {
        result = "" + parseInt(theTime2) + "小时" + result;
    }
    ALL_SEC_INTERVAL_H = parseInt(theTime2);
    ALL_SEC_INTERVAL_M = parseInt(theTime1);
    ALL_SEC_INTERVAL_S = parseInt(theTime);

}
/*初始化地级市 地图背景*/
init_city_map_bg = function (obj) {
    var cityMap = {
        "北京市": "110100",
        "天津市": "120100",
        "上海市": "310100",
        "重庆市": "500100",
        "崇明县": "310200", // ??
        "湖北省直辖县市": "429000", // ??
        "铜仁市": "522200", // ??
        "毕节市": "522400", // ??
        "石家庄市": "130100",
        "唐山市": "130200",
        "秦皇岛市": "130300",
        "邯郸市": "130400",
        "邢台市": "130500",
        "保定市": "130600",
        "张家口市": "130700",
        "承德市": "130800",
        "沧州市": "130900",
        "廊坊市": "131000",
        "衡水市": "131100",
        "太原市": "140100",
        "大同市": "140200",
        "阳泉市": "140300",
        "长治市": "140400",
        "晋城市": "140500",
        "朔州市": "140600",
        "晋中市": "140700",
        "运城市": "140800",
        "忻州市": "140900",
        "临汾市": "141000",
        "吕梁市": "141100",
        "呼和浩特市": "150100",
        "包头市": "150200",
        "乌海市": "150300",
        "赤峰市": "150400",
        "通辽市": "150500",
        "鄂尔多斯市": "150600",
        "呼伦贝尔市": "150700",
        "巴彦淖尔市": "150800",
        "乌兰察布市": "150900",
        "兴安盟": "152200",
        "锡林郭勒盟": "152500",
        "阿拉善盟": "152900",
        "沈阳市": "210100",
        "大连市": "210200",
        "鞍山市": "210300",
        "抚顺市": "210400",
        "本溪市": "210500",
        "丹东市": "210600",
        "锦州市": "210700",
        "营口市": "210800",
        "阜新市": "210900",
        "辽阳市": "211000",
        "盘锦市": "211100",
        "铁岭市": "211200",
        "朝阳市": "211300",
        "葫芦岛市": "211400",
        "长春市": "220100",
        "吉林市": "220200",
        "四平市": "220300",
        "辽源市": "220400",
        "通化市": "220500",
        "白山市": "220600",
        "松原市": "220700",
        "白城市": "220800",
        "延边朝鲜族自治州": "222400",
        "哈尔滨市": "230100",
        "齐齐哈尔市": "230200",
        "鸡西市": "230300",
        "鹤岗市": "230400",
        "双鸭山市": "230500",
        "大庆市": "230600",
        "伊春市": "230700",
        "佳木斯市": "230800",
        "七台河市": "230900",
        "牡丹江市": "231000",
        "黑河市": "231100",
        "绥化市": "231200",
        "大兴安岭地区": "232700",
        "南京市": "320100",
        "无锡市": "320200",
        "徐州市": "320300",
        "常州市": "320400",
        "苏州市": "320500",
        "南通市": "320600",
        "连云港市": "320700",
        "淮安市": "320800",
        "盐城市": "320900",
        "扬州市": "321000",
        "镇江市": "321100",
        "泰州市": "321200",
        "宿迁市": "321300",
        "杭州市": "330100",
        "宁波市": "330200",
        "温州市": "330300",
        "嘉兴市": "330400",
        "湖州市": "330500",
        "绍兴市": "330600",
        "金华市": "330700",
        "衢州市": "330800",
        "舟山市": "330900",
        "台州市": "331000",
        "丽水市": "331100",
        "合肥市": "340100",
        "芜湖市": "340200",
        "蚌埠市": "340300",
        "淮南市": "340400",
        "马鞍山市": "340500",
        "淮北市": "340600",
        "铜陵市": "340700",
        "安庆市": "340800",
        "黄山市": "341000",
        "滁州市": "341100",
        "阜阳市": "341200",
        "宿州市": "341300",
        "六安市": "341500",
        "亳州市": "341600",
        "池州市": "341700",
        "宣城市": "341800",
        "福州市": "350100",
        "厦门市": "350200",
        "莆田市": "350300",
        "三明市": "350400",
        "泉州市": "350500",
        "漳州市": "350600",
        "南平市": "350700",
        "龙岩市": "350800",
        "宁德市": "350900",
        "南昌市": "360100",
        "景德镇市": "360200",
        "萍乡市": "360300",
        "九江市": "360400",
        "新余市": "360500",
        "鹰潭市": "360600",
        "赣州市": "360700",
        "吉安市": "360800",
        "宜春市": "360900",
        "抚州市": "361000",
        "上饶市": "361100",
        "济南市": "370100",
        "青岛市": "370200",
        "淄博市": "370300",
        "枣庄市": "370400",
        "东营市": "370500",
        "烟台市": "370600",
        "潍坊市": "370700",
        "济宁市": "370800",
        "泰安市": "370900",
        "威海市": "371000",
        "日照市": "371100",
        "莱芜市": "371200",
        "临沂市": "371300",
        "德州市": "371400",
        "聊城市": "371500",
        "滨州市": "371600",
        "菏泽市": "371700",
        "郑州市": "410100",
        "开封市": "410200",
        "洛阳市": "410300",
        "平顶山市": "410400",
        "安阳市": "410500",
        "鹤壁市": "410600",
        "新乡市": "410700",
        "焦作市": "410800",
        "濮阳市": "410900",
        "许昌市": "411000",
        "漯河市": "411100",
        "三门峡市": "411200",
        "南阳市": "411300",
        "商丘市": "411400",
        "信阳市": "411500",
        "周口市": "411600",
        "驻马店市": "411700",
        "省直辖县级行政区划": "469000",
        "武汉市": "420100",
        "黄石市": "420200",
        "十堰市": "420300",
        "宜昌市": "420500",
        "襄阳市": "420600",
        "鄂州市": "420700",
        "荆门市": "420800",
        "孝感市": "420900",
        "荆州市": "421000",
        "黄冈市": "421100",
        "咸宁市": "421200",
        "随州市": "421300",
        "恩施土家族苗族自治州": "422800",
        "长沙市": "430100",
        "株洲市": "430200",
        "湘潭市": "430300",
        "衡阳市": "430400",
        "邵阳市": "430500",
        "岳阳市": "430600",
        "常德市": "430700",
        "张家界市": "430800",
        "益阳市": "430900",
        "郴州市": "431000",
        "永州市": "431100",
        "怀化市": "431200",
        "娄底市": "431300",
        "湘西土家族苗族自治州": "433100",
        "广州市": "440100",
        "韶关市": "440200",
        "深圳市": "440300",
        "珠海市": "440400",
        "汕头市": "440500",
        "佛山市": "440600",
        "江门市": "440700",
        "湛江市": "440800",
        "茂名市": "440900",
        "肇庆市": "441200",
        "惠州市": "441300",
        "梅州市": "441400",
        "汕尾市": "441500",
        "河源市": "441600",
        "阳江市": "441700",
        "清远市": "441800",
        "东莞市": "441900",
        "中山市": "442000",
        "潮州市": "445100",
        "揭阳市": "445200",
        "云浮市": "445300",
        "南宁市": "450100",
        "柳州市": "450200",
        "桂林市": "450300",
        "梧州市": "450400",
        "北海市": "450500",
        "防城港市": "450600",
        "钦州市": "450700",
        "贵港市": "450800",
        "玉林市": "450900",
        "百色市": "451000",
        "贺州市": "451100",
        "河池市": "451200",
        "来宾市": "451300",
        "崇左市": "451400",
        "海口市": "460100",
        "三亚市": "460200",
        "三沙市": "460300",
        "成都市": "510100",
        "自贡市": "510300",
        "攀枝花市": "510400",
        "泸州市": "510500",
        "德阳市": "510600",
        "绵阳市": "510700",
        "广元市": "510800",
        "遂宁市": "510900",
        "内江市": "511000",
        "乐山市": "511100",
        "南充市": "511300",
        "眉山市": "511400",
        "宜宾市": "511500",
        "广安市": "511600",
        "达州市": "511700",
        "雅安市": "511800",
        "巴中市": "511900",
        "资阳市": "512000",
        "阿坝藏族羌族自治州": "513200",
        "甘孜藏族自治州": "513300",
        "凉山彝族自治州": "513400",
        "贵阳市": "520100",
        "六盘水市": "520200",
        "遵义市": "520300",
        "安顺市": "520400",
        "黔西南布依族苗族自治州": "522300",
        "黔东南苗族侗族自治州": "522600",
        "黔南布依族苗族自治州": "522700",
        "昆明市": "530100",
        "曲靖市": "530300",
        "玉溪市": "530400",
        "保山市": "530500",
        "昭通市": "530600",
        "丽江市": "530700",
        "普洱市": "530800",
        "临沧市": "530900",
        "楚雄彝族自治州": "532300",
        "红河哈尼族彝族自治州": "532500",
        "文山壮族苗族自治州": "532600",
        "西双版纳傣族自治州": "532800",
        "大理白族自治州": "532900",
        "德宏傣族景颇族自治州": "533100",
        "怒江傈僳族自治州": "533300",
        "迪庆藏族自治州": "533400",
        "拉萨市": "540100",
        "昌都地区": "542100",
        "山南地区": "542200",
        "日喀则地区": "542300",
        "那曲地区": "542400",
        "阿里地区": "542500",
        "林芝地区": "542600",
        "西安市": "610100",
        "铜川市": "610200",
        "宝鸡市": "610300",
        "咸阳市": "610400",
        "渭南市": "610500",
        "延安市": "610600",
        "汉中市": "610700",
        "榆林市": "610800",
        "安康市": "610900",
        "商洛市": "611000",
        "兰州市": "620100",
        "嘉峪关市": "620200",
        "金昌市": "620300",
        "白银市": "620400",
        "天水市": "620500",
        "武威市": "620600",
        "张掖市": "620700",
        "平凉市": "620800",
        "酒泉市": "620900",
        "庆阳市": "621000",
        "定西市": "621100",
        "陇南市": "621200",
        "临夏回族自治州": "622900",
        "甘南藏族自治州": "623000",
        "西宁市": "630100",
        "海东地区": "632100",
        "海北藏族自治州": "632200",
        "黄南藏族自治州": "632300",
        "海南藏族自治州": "632500",
        "果洛藏族自治州": "632600",
        "玉树藏族自治州": "632700",
        "海西蒙古族藏族自治州": "632800",
        "银川市": "640100",
        "石嘴山市": "640200",
        "吴忠市": "640300",
        "固原市": "640400",
        "中卫市": "640500",
        "乌鲁木齐市": "650100",
        "克拉玛依市": "650200",
        "吐鲁番地区": "652100",
        "哈密地区": "652200",
        "昌吉回族自治州": "652300",
        "博尔塔拉蒙古自治州": "652700",
        "巴音郭楞蒙古自治州": "652800",
        "阿克苏地区": "652900",
        "克孜勒苏柯尔克孜自治州": "653000",
        "喀什地区": "653100",
        "和田地区": "653200",
        "伊犁哈萨克自治州": "654000",
        "塔城地区": "654200",
        "阿勒泰地区": "654300",
        "自治区直辖县级行政区划": "659000",
        "台湾省": "710000",
        "香港特别行政区": "810100",
        "澳门特别行政区": "820000"
    };
    // 路径配置
    require.config({
        paths: {
            'echarts': './res/common-lib/echarts/build/dist'
        }
    });
    // 使用
    require(
        [
            'echarts/echarts',
            'echarts/chart/map'
        ],
        function (ec) {
            var ecConfig = require('echarts/config');
            var myChart = ec.init(document.getElementById('mapContainer_bg'));
            var mapType = [];
            var mapGeoData = require('echarts/util/mapData/params');
            //console.log(mapGeoData)
            for (var city in cityMap) {
                mapType.push(city);
                // 自定义扩展图表类型
                mapGeoData.params[city] = {
                    getGeoJson: (function (c) {
                        var geoJsonName = cityMap[c];
                        return function (callback) {
                            $.getJSON('res/common-lib/echarts/china-main-city/' + geoJsonName + '.json', callback);
                        }
                    })(city)
                }
            }
            var option = {
                tooltip: {
                    show: false,
                },
                series: [{
                    tooltip: {
                        formatter: ''
                    },
                    type: 'map',
                    mapLocation: {
                        x: 'center',
                        y: 'top',
                        width: '99%'
                    },
                    roam: false,
                    mapType: obj.target,
                    selectedMode: 'single',
                    itemStyle: {
                        normal: {
                            borderWidth: 4,
                            borderColor: '#ff9271',
                            color: 'rgba(255,255,255,0)',
                            label: {
                                show: false,
                            }
                        },
                        emphasis: { // 也是选中样式
                            borderWidth: 4,
                            borderColor: '#37c5f0',
                            color: 'rgba(255,255,255,255)',
                            label: {
                                show: true,
                            }
                        }
                    },
                    data: []
                }]
            };
            var data_append_arr = [];

            //触发loading效果
            myChart.setOption(option);
            myChart.showLoading({
                animation: false,
                text: '加载中',
                textStyle: {
                    fontSize: 14
                }
            });
            $(window).resize(function () {
                myChart.resize();
            });

            //加载成功后隐藏loading
            myChart.hideLoading();
        }
    );
};

/**当日时间设置函数 */
function tick() {
    var today;
    today = new Date();
    $("#change_time").html(showLocale(today));
    window.setTimeout("tick()", 1000);
}

function showLocale(objD) {
    var str, colorhead, colorfoot;
    var yy = objD.getYear();
    if (yy < 1900) yy = yy + 1900;
    var MM = objD.getMonth() + 1;
    if (MM < 10) MM = '0' + MM;
    var dd = objD.getDate();
    if (dd < 10) dd = '0' + dd;
    var hh = objD.getHours();
    if (hh < 10) hh = '0' + hh;
    var mm = objD.getMinutes();
    if (mm < 10) mm = '0' + mm;
    var ss = objD.getSeconds();
    if (ss < 10) ss = '0' + ss;
    var ww = objD.getDay();
    if (ww == 0) colorhead = "";
    if (ww > 0 && ww < 6) colorhead = "";
    if (ww == 6) colorhead = "";
    if (ww == 0) ww = "星期日";
    if (ww == 1) ww = "星期一";
    if (ww == 2) ww = "星期二";
    if (ww == 3) ww = "星期三";
    if (ww == 4) ww = "星期四";
    if (ww == 5) ww = "星期五";
    if (ww == 6) ww = "星期六";
    colorfoot = "";
    str = yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss;
    return (str);
}