var icons = 7;
var index = 0;
var el = $('.lc-icon-animated');

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };

    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());

setInterval(function () {
  requestAnimationFrame(function(){
    el.removeClass('lc-icon-' + (index + 1));
    ////index = (index + 1) % icons;
    var temp;
    temp = Math.round(Math.random() * icons);
    index = (index !== temp) ? temp : (index + 1) % icons;
    el.addClass('lc-icon-' + (index + 1));
  });
}, 2000);