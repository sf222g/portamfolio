$(function() {
  
    var pageTop = $('html, body');
    //各sectionの位置を入れる配列
    var secTopArr = new Array();
    //現在の番号
    var current = -1;
    //カラー設定の配列
    var bgColor = new Array('#f7f3eb','#ebf6f7');
    //各sectionの位置を入れる
    $('.offset-count').each(function (i) {
        secTopArr[i] = $(this).offset().top;
    });
    //スクロールイベント
    $(window).scroll(function () {
        for (var i = secTopArr.length-1; i>=0; i--) {
            if ($(window).scrollTop() > secTopArr[i] - 300) {
                chengeBG(i);
                break;
            }
        }
    });
    //背景変更
    function chengeBG(secNum) {
        if (secNum != current) {
            current = secNum;
            $('.aboutMe-sec').stop().animate({backgroundColor: bgColor[current]},2000);
        }
    }
});