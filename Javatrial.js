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
number=document.getElementById("number");
const ans=Math.floor(Math.random()*maximum-minimum+1)+minimum; 
let attempts=0;
let guess;
let running=true;
while(running){
    number.textContent= guess=window.prompt("ENTER YOUR GUESS NUMBER BETWEEN "+ minimum +" AND "+maximum );
   
    guess=Number(guess);

    if(isNaN(guess)){
        window.alert('Please enter a valid number!!');
    }
    else if(guess<minimum||guess>maximum){
        window.alert('please enter the number in range!!');
    }
    else{
        attempts++;
        if(guess<ans){
            window.alert('too low!!');
        }
        else if(guess>ans){
            window.prompt('too high!!')
        }
        else{
            window.alert('CONGRATULATIONS👏👏👏 THE CORRECT GUESS WAS '+ guess +" IT HAS TOOK YOU "+attempts+" ATTEMPTS.");
            running=false;
        }
    }
}       