/*
 *
 * Images fullPlay
 * Author: Join Fisher
 * Version: 1.0 (1-Jun-2016)
 *
 */

(function($) {
    
        $.fn.fullImages = function(fisher) {
    
            var fisher = $.extend({
                ImgWidth: null,
                ImgHeight: null,
                autoplay: null,
                fadeTime: null
            },
            fisher)
    
            var count = $(this).find("iframe").length; 
            var nValue = 0;
            var oValue = 0;
            var _this = $(this);
           
            _this.find("iframe:eq(0)").fadeIn("slow");
    
            var setIntervalImg = setInterval(function() {
    
                nValue++
                if (nValue == count) {
                    nValue = 0;
                }
                _this.find(" iframe:eq(" + (nValue) + ")").fadeIn(fisher.fadeTime);
                _this.find(" iframe:eq(" + (oValue) + ")").fadeOut(fisher.fadeTime);
                oValue = nValue % count;
    
            },
            fisher.autoplay);
    
            resizeFun();
            $(window).resize(function(e) {
                resizeFun();
            });
    
            function resizeFun() {
    
                /*轮播图全屏*/
                var imgH = fisher.ImgHeight;
                var imgW = fisher.ImgWidth;
                var hValue = imgH / imgW;
                var wValue = imgW / imgH;
    
                if ($(window).width() / $(window).height() < wValue) {
    
                    _this.find("iframe").css("width", $(window).height() * wValue);
                    _this.find("iframe").css("margin-left", -(($(window).height() * wValue) - $(window).width()) / 2);
                    _this.find("iframe").css("height", $(window).height());
    
                } else {
    
                    _this.find("iframe").css("width", $(window).width());
                    _this.find("iframe").css("margin-left", 0);
                    _this.find("iframe").css("height", $(window).width() * hValue);
    
                }
    
            }
    
        };
    
    } (jQuery));