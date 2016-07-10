$(document).ready(function () {
});

var objects = 0;

function newDiv() {
    var $div = $("<div class='a'>");
    $(".animatedDivs").append($div);
    objects++;
    console.log(objects);
    animateDiv($div);
}

function animateDiv($div) {
        var newq = makeNewPosition();
        var oldq = $div.offset();
        var speed = calcSpeed([oldq.top, oldq.left], newq);
        $div.animate({
            top: newq[0],
            left: newq[1]
        }, speed, function () {
            animateDiv($div);
        });
        $div.hover(function() {
          $div.stop();
        }, function (){
          animateDiv($div);
        });
    };

function makeNewPosition() {
    var h = $(window).height() - 64;
    var w = $(window).width() - 64;
    var nh = Math.floor(Math.random() * h);
    var nw = Math.floor(Math.random() * w);
    return [nh, nw];
}

function calcSpeed(prev, next) {
    var x = Math.abs(prev[1] - next[1]);
    var y = Math.abs(prev[0] - next[0]);
    var greatest = x > y ? x : y;
    var speedModifier = .15;
    var speed = Math.ceil(greatest / speedModifier);
    return speed;
}

$("#object").mousedown(function(event) {
    $(event.target).removeClass("a");
    $(event.target).addClass("b");
    objects--;
    console.log(objects);
});
