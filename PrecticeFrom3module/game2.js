window.onload = function () {
   document.getElementById('riddle').innerText = riddle.question;
};


const riddle = {
   question: 'Висить грушка не можна зірвати ?',
   correctAnswer: 'hello',
   hints: ['не їстівне', 'не фрукт'],
   tries: 3,

   checkAnswer(answer) {
      if (this.tries) {
         if (answer.toLowerCase().trim(' ') === this.correctAnswer) {
            alert('Bravo, you are guessed');
         } else {
            this.tries--;
            alert(`You're wrong, try again! Tries left : ${this.tries}`);
         }
      } else {
         return alert('Проби закінчились, перезагрузіть сторінку');
      }
   }
};


function check() {
   let userAnswer = document.getElementById('input').value;
   if (userAnswer) {
      riddle.checkAnswer(userAnswer);

   } else {
      alert('Інпут не може бути пустий!!');
   }
}