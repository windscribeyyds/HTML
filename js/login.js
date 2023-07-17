// 设置全屏
$('#alarm-fullscreen-toggler').on('click', function (e) {
    var element = document.documentElement;     // 返回 html dom 中的root 节点 <html>
    if (!$('body').hasClass('full-screen')) {
        $('body').addClass('full-screen');
        $('#alarm-fullscreen-toggler').addClass('active');
        // 判断浏览器设备类型
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {   // 兼容火狐
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {    // 兼容谷歌
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {   // 兼容IE
            element.msRequestFullscreen();
        }
    }
    console.log(window)
    console.log(window.parent.document.getElementById("page"))
    // parent.document.getElementById("page").onchange =
    //     function () { page.scr="./main.html" }
});

