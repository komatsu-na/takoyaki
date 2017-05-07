// タコを走らせる
$(function(){
  $("#tako").animate({
    top: "20%"
  }, 1000).animate({
    top: "80%"
  }, 1000);
  setTimeout(arguments.callee, 1000);
});

// タコ焼きをとばす
$(function() {
  $("button").click(function() {
    // 飛ばしたたこ焼きが消えるまでイベント無効
    if ($("#takoyaki").length < 1) {
      $("div").append("<img src='./image/takoyaki.gif' id='takoyaki'/>");
      var takoyaki = $("#takoyaki")
      takoyaki.css({
        "position": "absolute",
        "top": $("#tako").css("top"),
        "left": $("#tako").css("left")
      });
      takoyaki.animate({
        left: "0%"
      }, 500)
      setTimeout(function() {
        takoyaki.remove();
      }, 500);
    }
  });
});
