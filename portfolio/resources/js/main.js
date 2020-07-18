/*
 * 読み込み完了後の処理
 */
{
  window.addEventListener('load', function () {
    const scroll = document.getElementById('keyVisualScroll');
    const ScrollText = document.getElementById('jsScrollText');
    const scrollArrow = document.getElementById('jsScrollArrow');

    setTimeout(function () {
      scroll.classList.add('-display');
    },1500);

    setTimeout(function () {
      scroll.classList.add('blinking');
    },3000);
  })
}



/*
 * スライダー
 */
(function () {
  // スライダー対象の画像を配列として取得
  const slideImages = document.getElementById('slideImages');
  const slideImage = slideImages.querySelectorAll('.jsSlideImage');

  let num = 1;
  const time = 6000;
  window.addEventListener('load', function () {
    slideImage[0].classList.add('-display');
  });
  
  setInterval( function () {
    slideImage.forEach( function (value, index) {
      slideImage[index].classList.remove('-display');
    });

    slideImage[num].classList.add('-display');
    num += 1;

    if (num === slideImage.length) {
      num = 0;
    }
  }, time);
}());



/*
 * 詳しく見るボタン
 */
$(function () {
  const $jsDisplayButton = $('.jsDisplayButton');
  const openText = '詳しく見る';
  const closeText = '閉じる';
  $jsDisplayButton.text(openText);

  $jsDisplayButton.on('click', function () {
    let buttonThis = $(this);
    buttonThis.prev().stop().animate({'height': 'toggle'}, { duration: 400, easing: 'swing', });
    buttonThis.toggleClass('-open');

    setTimeout( function () {
      if( buttonThis.hasClass('-open') ) {
        buttonThis.text(closeText);
      } else {
        buttonThis.text(openText);
      }
    },400);
  });
});



/*
 * クリップボードにコピー
 */
const copyButton = document.querySelectorAll('.jsCopyButton');
copyButton.forEach( function (v, i) {
  copyButton[i].addEventListener('click', function () {
    const el = this.previousElementSibling
    el.select();
    document.execCommand('copy');
    const thisButton = this
    thisButton.textContent = 'Copied!'

    setTimeout( function () {
      thisButton.textContent = 'Copy'
    }, 1000);
  });
})


/*
 * 要素が画面内に入ったらclass付与
 */
$(window).scroll(function (){
  $(".jsDp").each(function(){
    const hit = $(this).offset().top;
    const scroll = $(window).scrollTop();
    const wHeight = $(window).height();
    let dataOffset = $(this).data('offset');

    if ( scroll > hit - wHeight + wHeight / dataOffset ){
      $(this).addClass("-display");
    }
  });
});



/*
 * スムーススクロール（こちらは以前から使いまわしているものを引用）
 */
$(function () {
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
