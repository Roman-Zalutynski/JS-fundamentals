const secretNum = 5;
let tries = 1;
// My solution:
// function guessNum(num) {
//    tries += 1;
//    if (tries <= 3) {
//       num === secretNum ? alert('You win,congrats') : alert('try again');
//    } else {
//       alert('You loose you attempts, reload your page!');
//    }
// }

// solution from the video:
// Math.ceil(Math.random() * 10);

function guessNum(num) {
   if (tries >= 3) return alert('Game over, reload the page');

   if (num === secretNum) {
      alert('You guess');
   } else {
      alert('Try once more, your attempts - ' + tries);
      tries++;
   }
}