
var wordsSet1 = ['Full Stack Web Developer'];

var part1;
var i = 0;
var offset1 = 0;
var len1 = wordsSet1.length;
var forwards1 = true;
var skip_count1 = 0;
var skip_delay = 15;
var speed = 70;

var wordflick = function () {
  setInterval(function () {
    if (forwards1) {
      if (offset1 >= wordsSet1[i].length) {
        ++skip_count1;
        if (skip_count1 === skip_delay) {
          forwards1 = false;
          skip_count1 = 0;
        }
      }
    } else {
      if (offset1 === 0) {
        forwards1 = true;
        offset1 = 0;
      }
    }

    part1 = wordsSet1[i].substr(0, offset1);

    if (skip_count1 === 0) {
      if (forwards1) {
        offset1++;
      } else {
        offset1--;
      }
    }

    $('.words1').text(part1);
  }, speed);
};

$(document).ready(function () {
  wordflick();
});



