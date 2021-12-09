var readlineSync = require('readline-sync');

var userName = readlineSync.question('May I have your name? ')
console.log("Hey! "+ userName + " How well do you know me ?")
var score = 0;
var questions =[{question:"where do i live ? ",answer:"Raipur"},{question:"what is my age ? ",answer:"24"},{question:"which book i read last? ",answer:"ikigai"},{question:"what is my favourite sport ? ",answer:"badminton"},{question:"what is my favourite roll ? ",answer:"shwarma"}]

for(i=0; i<questions.length; i++){
var userAnswer = readlineSync.question(questions[i].question)
// var userAnswer = readlineSync.questions
if (userAnswer.toUpperCase() === questions[i].answer.toUpperCase()){
  score++
  console.log("Your Score:" + score)

}
else{
console.log("Your Score:" + score)

}
}
console.log("FINAL SCORE: " + score)