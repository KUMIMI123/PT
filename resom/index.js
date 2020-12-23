/* 탑바효과시작 */
console.clear();

function TopBar__init() {
  var $menu1ItemLine = $(".top-bar__menu-1-item-line");

  $(".menu-box-1 > ul > li").mouseenter(function () {
    var $li = $(this);

    var left = $li.position().left;
    var width = $li.outerWidth();

    $menu1ItemLine.css({
      left: left,
      width: width
    });
  });

  $(".top-bar__menu-1 > ul > li").eq(0).mouseenter();
}

TopBar__init();
/* 탑바 효과 끝 */
// 스크롤 트리거 플러그인 활성화
gsap.registerPlugin(ScrollTrigger);

console.clear();

var $window = $(window);
var windowWidth = $window.width();
var windowHeight = $window.height();

$window.resize(function () {
  windowWidth = $(window).width();
  windowHeight = $window.height();
});

function setTimelineToEl(timeline, $el) {
  $el.data('gsap-timeline', timeline);
}

function killTimeline($el) {
  var timeline = $el.data('gsap-timeline');
  
  if ( timeline ) {
    timeline.kill();
  }
}

function SectionTop__init() {
  var wrapMarginRight = 0;
  var $contentLi = $(".section-top__content > li");
  var $bgLi = $(".section-top__bg > li");
  var $bgLiChild = $bgLi.find(" > div");

  var animationDuration = 600;

  var updateBgLiChildWidth = function () {
    var width = windowWidth - wrapMarginRight;
    $bgLiChild.stop().width(width);
  };

  $window.resize(function () {
    updateBgLiChildWidth();
  });
  updateBgLiChildWidth();

  $contentLi.mouseenter(function () {
    var $this = $(this);
    var index = $this.index();
    var $selectedBgLi = $bgLi.eq(index);
    var $selectedBgLiChild = $bgLiChild.eq(index);

    $selectedBgLi.addClass("active");

    var timeline = gsap.timeline();
    
    setTimelineToEl(timeline, $selectedBgLiChild);
    setTimelineToEl(timeline, $selectedBgLi);
    
    var animationDurationSeconds = animationDuration / 1000;

    timeline.to($selectedBgLiChild, {
      left: 0,
      duration:animationDurationSeconds
    });
    
    timeline.to($selectedBgLi, {
      left: 0,
      right:0,
      duration:animationDurationSeconds
    }, "-=" + animationDurationSeconds);

  });

  $contentLi.mouseleave(function () {
    var $this = $(this);
    var index = $this.index();
    var $selectedBgLi = $bgLi.eq(index);
    var $selectedBgLiChild = $bgLiChild.eq(index);

    $selectedBgLi.removeClass("active");

    killTimeline($selectedBgLi);
    $selectedBgLi.css({
      left: "",
      right: ""
    });

    killTimeline($selectedBgLiChild);
    $selectedBgLiChild.css(
      {
        left: ""
      }
    );
  });
}

SectionTop__init();




function SliderBox1__init() {
  $('.slider-box-1 > .slick').slick({
    dots:false,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover:false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    centerPadding:0,
    arrows:true,
    prevArrow:".slider-box-1 > .arrows > .btn-arrow-left",
    nextArrow:".slider-box-1 > .arrows > .btn-arrow-right"
  });
}

SliderBox1__init();

function SliderBox2__init() {
  $(".slider-box-2--1 > .slick").slick({
    dots: false,
    //autoplay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    prevArrow: ".slider-box-2--1 > .arrows > .btn-arrow-left",
    nextArrow: ".slider-box-2--1 > .arrows > .btn-arrow-right"
  });

  $(".slider-box-2--2 > .slick").slick({
    dots: false,
    //autoplay: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    arrows: true,
    prevArrow: ".slider-box-2--2 > .arrows > .btn-arrow-left",
    nextArrow: ".slider-box-2--2 > .arrows > .btn-arrow-right"
  });
}

SliderBox2__init();
