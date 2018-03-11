var waitForFinalEvent = (function () {
  var timers = {};
  return function (callback, ms, uniqueId) {
    if (!uniqueId) {
      uniqueId = "Don't call this twice without a uniqueId";
    }
    if (timers[uniqueId]) {
      clearTimeout (timers[uniqueId]);
    }
    timers[uniqueId] = setTimeout(callback, ms);
  };
})();

$(window).resize(function () {
    waitForFinalEvent(function(){
      resizeScreen();
    }, 500, "some unique string");
});

$(function() {
    resizeScreen();
}); 

var resizeScreen = function() {
    var screenHeightConst = 2500
    var logoRatio = 293/2500
    var mainRatio = 1592/2500
    var divRatio = 78/2500
    var scrHeight = $(window).height();
    var logoHeight = logoRatio * scrHeight;
    var mainHeight = mainRatio * scrHeight;
    var divHeight = divRatio * scrHeight;
    $("#logo").height(logoHeight);
    $("#main").height(mainHeight);
    $(".div_margin").height(divHeight);
}