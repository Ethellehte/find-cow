$(document).ready(function() {
  var room = $('#room');
  var moo = $('.cow');
  var againbutton = $('.restart_butt');

  var cow = {
    cowX: null,
    cowY: null
  }

  againbutton.click(function() {
    location.reload();
  });

  againbutton.hide();


  function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  $('.butt').click(function() {
    cow.cowX = getRandomNumber(0, 750);
    cow.cowY = getRandomNumber(0, 550)
    room.css("background-color", "black")
    moo.css({
      "margin-top": cow.cowY + 'px',
      "margin-left": cow.cowX + 'px',
      "background-image": "url('img/cow.jpeg')",
      "background-repeat": "no-repeat",
      "background-position": "10 40",
      "border": "1px solid black",
      "width": "50px",
      "height": "50px"
    }).hide();
  });


room.click(function(e) {
var audio = new Audio('http://www.wavlist.com/soundfx/003/cow-moo2.wav');
x = e.pageX;
y = e.pageY;
var dist = Math.sqrt( Math.pow((cow.cowX - x), 2) + Math.pow((cow.cowY - y), 2) );
if (dist < 30) {
  againbutton.show();
  moo.show();
}	else if (dist < 100) {
  var volume = ((100-dist)/100);
  audio.volume = volume;
  audio.play();
  console.log(dist)
} else if (dist > 100) {
  console.log('корова очень далеко');
}
});

});
