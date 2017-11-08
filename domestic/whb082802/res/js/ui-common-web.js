/*遮罩层显示*/
function openMask(){
    $('body ').append('<div class="mask-layers" style="position: fixed;left: 0;top: 0;width: 100%;height: 100%;' +
        'background-color: #000;opacity: .3;-webkit-opacity: 0.3;-moz-opacity: .3;-khtml-opacity: .3;' +
        'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=30);z-index: 999;">' +
        '</div>');
    $("body").css("overflow","hidden");
}
function closeMask(){
    $(".mask-layers").remove();
    $("body").css("overflow","auto");
}
/*遮罩层和进度gif显示*/
function openProgress(){
    $('body').append('<img class="progresss" src="images/progress.gif" style="position: absolute;top: 50%;left: 50%;width: 56px;height: 56px;margin: -28px 0 0 -28px;z-index: 1000;"/>' +
        '<div class="mask-layers" style="position: fixed;left: 0;top: 0;width: 100%;height: 100%;' +
        'background-color: #000;opacity: .5;-webkit-opacity: 0.3;-moz-opacity: .5;-khtml-opacity: .5;filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=30);z-index: 999;"></div>')
    $(".mask-layers").on("click",function(e){
        e.preventDefault();
    });
    $(".progresss").show();
    $("body").css("overflow","hidden");
}
function closeProgress(){
    $(".mask-layers").remove();
    $('.progresss').remove();
    $(".mask-layers").on("click",function(e){
        e.preventDefault();
    });
    $("body").css("overflow","auto");
}
/*提示信息*/
function openPrompt(str){
    $('body').append('<div class="prompts" style="position: fixed;top: 50%;width:100%;text-align: center"><span style="display:inline-block;padding: 0 30px;margin-top:-50px;text-align: center;font-size: 18px;line-height: 46px;color: #fff;' +
        'background-color: #000;opacity: .5;-webkit-opacity: 0.5;-moz-opacity: .5;-khtml-opacity: .5;' +
        'filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=50);border-radius: 5px;z-index: 1002;">'+str+'</span></div>');
    setTimeout(function(){
     $('.prompts').remove();
     },2000);
};
