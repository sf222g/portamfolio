$(function() {
  $('.slider').slick({
    dots:true, //ページャーを表示（スライダー下の黒い丸）
    centerMode: true, //要素を中央寄せにする
    centerPadding:'80px', //両サイドの見えている部分のサイズ
    autoplay:true, //自動で画像を切り替える
    autoplaySpeed:8000, //自動で画像が切り替えられるまでの時間 1000 = 1秒
     
    //レスポンシブでの動作を指定
    responsive: [
      {
        breakpoint: 640,  //ブレイクポイントを指定
        settings: {
          centerPadding:'50px',
        }
      },
      {
        breakpoint: 480,
        settings: {
        centerMode: false,
      }
    }]
  });
});