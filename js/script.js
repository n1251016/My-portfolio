$(function () {

  //ページ内スクロール
  var navHeight = $(".header").outerHeight();

  $('a[href^="#"]').on("click", function () {
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - navHeight;
    $("html, body").animate({ scrollTop: position, }, 300, "swing");
    return false;
  });

  //ページトップ
  $("#js-page-top").on("click", function () {
    $("body,html").animate({ scrollTop: 0, }, 1500, "swing"
    );
    return false;
  });

  // スクロールで要素を表示
  $(window).on("scroll", function () {
    $(".scroll_show_up").each(function () {
      var target = $(this);
      var targetTop = target.offset().top;
      var windowTop = $(window).scrollTop();
      var windowHeight = $(window).height();

      if (windowTop + windowHeight > targetTop + 100) {
        target.addClass("show");
      }
    });
  });

  // トップへ戻るボタン
  $(function () {
    // topへ戻るボタンにクリックイベントを指定
    $("#go_top").click(function () {
      // <html>,<body>要素を1秒間のアニメーションしながらTOP位置へスクロール
      $("html,body").animate({ scrollTop: 0 }, 1000);
    });

    // windowにスクロールイベントを指定
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        // windowのスクロール位置を取得し、100pxを超えたらTOPへ戻るボタンを表示
        $("#go_top").fadeIn();
      } else {
        // windowのスクロール位置が100pxを超えなければTOPへ戻るボタンを非表示
        $("#go_top").fadeOut();
      }
    });
  });


  // お試し
  $(function () {

    var $target = $(".mv_move_title");
    var text = $target.text();
    $target.text("").addClass("is-typing");

    var i = 0;

    function typing() {
      if (i < text.length) {
        $target.append(text.charAt(i));
        i++;
        setTimeout(typing, 100);
      } else {
        $target.removeClass("is-typing");
      }
    }

    typing();

  });

  $(function () {

    var $target = $(".mv_move_subtitle");
    var text = $target.text();
    $target.text("").addClass("is-typing");

    var i = 0;

    function typing() {
      if (i < text.length) {
        $target.append(text.charAt(i));
        i++;
        setTimeout(typing, 35);
      } else {
        $target.removeClass("is-typing");
      }
    }

    typing();

  });
  $(function () {

    var $target = $(".mv_move_text");
    var text = $target.text();
    $target.text("").addClass("is-typing");

    var i = 0;

    function typing() {
      if (i < text.length) {
        $target.append(text.charAt(i));
        i++;
        setTimeout(typing, 40);
      } else {
        $target.removeClass("is-typing");
      }
    }

    typing();

  });


});

