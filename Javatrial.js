  //CIRCUMFERENCE
const PI=Math.PI;
let Radius;
let Circumference;
document.getElementById("myS").onclick=function(){
    Radius=document.getElementById("myI").value;
    Radius=Number(Radius);
    Circumference=2*PI*Radius;
    document.getElementById("myRes").textContent='The circumference='+Circumference;  
}
      //COUNTER PROGRAM
const DECREASE=document.getElementById("but1");
const RESET=document.getElementById("but2");
const INCREASE=document.getElementById("but3");
const COUNTLABEL=document.getElementById("lab1");
let count=0;
DECREASE.onclick=function(){
    count--;
    COUNTLABEL.textContent=count;
}
RESET.onclick=function(){
    count=0;
    COUNTLABEL.textContent=count;
}
INCREASE.onclick=function(){
    count++;
    COUNTLABEL.textContent=count;
}
              //AGE CALCULATION
let agei=document.getElementById("agei");
ageb=document.getElementById("ageb");
let age;
ageb.onclick=function(){
    agei=document.getElementById("agei").value;
    agei=Number(agei);
    age=2025-agei;
displayage.textContent='Your are '+ age +' years old';
}
         //DICE ROLL
roll=document.getElementById("roll");
label1=document.getElementById("label1");
label2=document.getElementById("label2");
label3=document.getElementById("label3");
let max=6;
let min=1;
let randomnum1;
let randomnum2;
let randomnum3;
roll.onclick=function(){
    randomnum1=Math.floor(Math.random()*max)+min;
    randomnum2=Math.floor(Math.random()*max)+min;
    randomnum3=Math.floor(Math.random()*max)+min;
label1.textContent=randomnum1;
label2.textContent=randomnum2; 
label3.textContent=randomnum3;
}
        //NUMBER GUESSING GAME
 const minimum=1;
 const maximum=100;
 const gsubmit=document.getElementById("gsubmit");
let number=document.getElementById("number");
 const ans = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
 let attempts=0;
 let guess;
 gsubmit.onclick=function(){
    guess=document.getElementById("guess").value;
    guess=Number(guess);
     if(isNaN(guess)){
        number.textContent= 'invalid number!!';
     }
     else if(guess<minimum||guess>maximum){
         number.textContent= 'not range!!';
     }
     else{
         attempts++;
         if(guess<ans){
              number.textContent='too low!!';
        }
        else if(guess>ans){
             number.textContent='too high!!';
        }
         else{
             number.textContent='correct!  guess no.was '+guess + ' total attempts= '+attempts;
         }
     }
 };



         //GRADING SYSTEM
let score=document.getElementById("score");  
let grade=document.getElementById("grade");
let myresult=document.getElementById("myresult");
myresult.onclick=function(){
    score=document.getElementById("score").value;
    score=Number(score);
    if(score>100){
        grade.textContent='UNREALISTIC';
    }
    else if(score>=80){
        grade.textContent='Grade A';
    }
    else if(score>=60){
        grade.textContent='Grade B';
    }
    else if(score>=50){
        grade.textContent='Grade C';
    }
    else if(score>=40){
        grade.textContent='Grade D';
    }
    else {
        grade.textContent='Grade E';
    }
}

         //TEMPERATUTE CONVERSION
 const value=document.getElementById("value");
 const tofahreinheit=document.getElementById("tofahreinheit");
 const tocelcius=document.getElementById("tocelcius");
 const show=document.getElementById("show");
 let temp;
function convert(){
if(tofahreinheit.checked){
    temp=Number(value.value);
    temp=temp*9/5+32;
    show.textContent=' To Fahreinheit= '+temp.toFixed(1)+'F';
}
else if(tocelcius.checked){
    temp=Number(value.value);
    temp=(temp-32)*5/9;
    show.textContent=' To Celcius= '+temp.toFixed(1)+'C';
}
else{
    show.textContent='SELECT A UNIT';
}
}
    