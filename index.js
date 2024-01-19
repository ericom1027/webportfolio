const wordsSet1 = ['Full Stack Web Developer'];

let part1;
let i = 0;
let offset1 = 0;
const len1 = wordsSet1.length;
let forwards1 = true;
let skip_count1 = 0;
const skip_delay = 15;
const speed = 70;

const wordflick = function (wordsSet, elementSelector) {
  let len = wordsSet.length;
  let i = 0;
  let offset = 0;
  let forwards = true;
  let skip_count = 0;

  setInterval(function () {
    if (forwards) {
      if (offset >= wordsSet[i].length) {
        ++skip_count;
        if (skip_count === skip_delay) {
          forwards = false;
          skip_count = 0;
        }
      }
    } else {
      if (offset === 0) {
        forwards = true;
      }
    }

    part1 = wordsSet[i].substr(0, offset);

    if (skip_count === 0) {
      if (forwards) {
        offset++;
      } else {
        offset--;
      }
    }

    $(elementSelector).text(part1);
  }, speed);
};

$(document).ready(function () {
  wordflick(wordsSet1, '.words1');
});

