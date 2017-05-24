$(function(){
  $("#tako").animate({
    top: "20%"
  }, 2500).animate({
    top: "80%"
  }, 2500);
  setTimeout(arguments.callee,5000);
});

$(function() {
  $("button").Click(function() {
    console.log("tako");
    if ($("#takoyaki").length < 1) {
      $("#takoSpace").append("<img src='./image/takoyaki.gif' id='takoyaki'/>");
      var takoyaki = $("#takoyaki")
      takoyaki.css({
        "position": "absolute",
        "top": $("#takoSpace").css("top"),
        "left": $("#takoSpace").css("left")
      });
      takoyaki.animate({left:0},500);
      setTimeout(function() {
        takoyaki.remove();
      }, 500);
    }
  });
});
