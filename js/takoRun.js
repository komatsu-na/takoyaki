$(function(){
  $("#button").animate({
    top: "20%"
  }, 2500).animate({
    top: "80%"
  }, 2500);
});

$(function() {
  $("button").onClick(function() {
    if ($("#takoyaki").length < 1) {
      $("div").append("<img src='./image/takoyaki.gif' id='takoyaki'/>");
      var takoyaki = $("#takoyaki")
      takoyaki.css({
        "position": "absolute",
        "top": $("#tako").css("top"),
        "left": $("#tako").css("left")
      });
      setTimeout(function() {
        takoyaki.remove();
      }, 500);
    }
  });
});
