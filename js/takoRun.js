$(function(){
  $("#tako").animate({
    top: "20%"
  }, 2500).animate({top: "80%"}, 2500);
  setTimeout(arguments.callee, 5000);
});

$(function() {
  $("#button").click(function() {
    if ($("#takoyaki").length < 1) {
      $("div").append("<img src='./image/takoyaki.gif' id='takoyaki'/>");
      var takoyaki = $("#takoyaki")
      takoyaki.css({
        "position": "absolute",
        "top": $("#tako").css("top"),
        "left": $("#tako").css("left")
      });
      takoyaki.animate({left: "0%"}, 1000);
      setTimeout(function() {
        takoyaki.remove();
      }, 1000);
    }
  });
});
