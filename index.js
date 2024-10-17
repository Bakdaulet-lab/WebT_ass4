console.log("Hello World!");
console.log("My name is Bakdaulet. And im 18 years old");

let age=18;
console.log(`Im ${age} years old`);
let myName="Bakdaulet";
console.log(`My name is ${myName}`);
let student = true;
console.log(student);


let a; 
let b;
let c;

function calc(){
a=window.prompt("Enter side A:");
a=Number(a);

b=window.prompt("Enter side B:");
b=Number(b);

c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));

document.getElementById('c').innerHTML=`The answer is ${c}`;

}

function showDate(){
    let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();

today = dd + '/' + mm + '/' + yyyy;

document.getElementById('date').innerHTML=`Current date is ${today}`;
}

function getLeapYear(){
    function isLeapYear(year) {
    
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }
  
  const year = parseInt(prompt("Enter a year to check:"));
  
  if (isNaN(year)) {
    document.getElementById('leapYear').innerHTML="Invalid input. Please enter a valid year.";
  } else {
   
    if (isLeapYear(year)) {
      document.getElementById('leapYear').innerHTML=`${year} is a leap year.`;
    } else {
      document.getElementById('leapYear').innerHTML=`${year} is not a leap year.`;
    }
    
  }
}

function Mult(){
answer = document.getElementById('1st').value * document.getElementById('2st').value;
answer=Number(answer);
document.getElementById('answer').innerHTML=`The result is: ${answer}`
}

function Div(){
    answer = document.getElementById('1st').value / document.getElementById('2st').value;
    answer=Number(answer);
    document.getElementById('answer').innerHTML=`The result is: ${answer}`
}

function temperature(){


function toCelsius(temp){
    return (temp-32)*(5/9);
}

function toFarengeit(temp){
    return temp*9/5+32;
}

if(document.getElementById('cel').checked)
    document.getElementById('tempLabel').innerHTML=toCelsius(document.getElementById('temp').value) + "C";

else if(document.getElementById('far').checked)
    document.getElementById('tempLabel').innerHTML=toFarengeit(document.getElementById('temp').value) + "F";

else(document.getElementById('tempLabel').innerHTML="Choose one of the variants");


}

function checkEvenOdd() {
    
    let number = parseInt(document.getElementById('numberInput').value);

    
    if (isNaN(number)) {
        document.getElementById('result').innerHTML = "Please enter a valid number!";
        return;
    }

    
    if (number % 2 === 0) {
        document.getElementById('result').innerHTML = number + " is even.";
    } else {
        document.getElementById('result').innerHTML = number + " is odd.";
    }
}

function findLargestAndSmallest() {
    
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let num3 = parseFloat(document.getElementById('num3').value);

    
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        document.getElementById('result2').innerHTML = "Please enter valid numbers!";
        return;
    }

   
    let largest = Math.max(num1, num2, num3);
    let smallest = Math.min(num1, num2, num3);

   
    document.getElementById('result2').innerHTML = `
        <p>Largest number: ${largest}</p>
        <p>Smallest number: ${smallest}</p>
    `;
}

function heron(){
let a=parseInt(document.getElementById('Alength').value);
let b=parseInt(document.getElementById('Blength').value);
let c=parseInt(document.getElementById('Clength').value);

let S=(a+b+c)/2;
S=Number(S);
let result3=Math.sqrt(S*(S-a)*(S-b)*(S-c));

result3=Number(result3);
document.getElementById('result3').innerHTML= `The area is ${result3}`;

}

function factorial(x){
    if(x==0){
        return 1;
    }
    else{
        return x*factorial(x-1);
    }
}


function CounterVowelConsonants(){

let InputString=document.getElementById('counter').value;
    let cntV=0;
    let cntC=0;
    for(let i=0;i< InputString.length; i++){
        let char=InputString[i].toLowerCase();
        if(char==="a" || char==="i" || char==="u" || char==="o" || char==="e"){
            cntV++;
        }
        else if (char >= 'a' && char <= 'z') { 
            cntC++;
        }

    }
    cntC=Number(cntC);
    cntV=Number(cntV);
    document.getElementById('cntV').innerHTML=`The number of Vowels ${cntV}`;
    document.getElementById('cntC').innerHTML=`The number of Consonants ${cntC}`;
    
}

function Transform_into_HandM(){

    let Seconds = parseInt(document.getElementById('hoursec').value);
    let Minuts = Seconds/60;
    let Hours = Minuts/60;
    document.getElementById('hours').innerHTML = `Seconds transformed into hours = ${Hours}`;
    document.getElementById('min').innerHTML = `Seconds transformed into minuts = ${Minuts}`;
    
}


function MostFrequentNum(){

    let inputArray = document.getElementById('arrNumber').value.split(',').map(Number);

    let MostFrequentMap = {};
    let MostFreqNum = null;
    let MaxFreq=0;

    for(let num of inputArray){
        if(MostFrequentMap[num]){
            MostFrequentMap[num]++;
        }
        else{
            MostFrequentMap[num] = 1;
        }

        if(MostFrequentMap[num]>MaxFreq){
         MaxFreq = MostFrequentMap[num];
         MostFreqNum = num;
        }

    }

    document.getElementById('MostFreqNum').innerHTML = `Most frequent number in given array is ${MostFreqNum}`;
}


function Fibonacci(){

    function fibo(n){
        
        if (n <= 1) {
            return n;
          } else {
            return fibo(n - 1) + fibo(n - 2);
          }

    }

    let res = fibo(parseInt(document.getElementById('fibo').value));
    document.getElementById('fibo2').innerHTML = `Your fibonacci number is ${res}`;

}

function calculateDaysToNewYear() {
    
    let today = new Date();

    
    let currentYear = today.getFullYear();
    let nextYear = currentYear + 1;
    let newYearDate = new Date(nextYear, 0, 1);  

   
    let timeDifference = newYearDate - today;

    
    let daysLeft = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    
    document.getElementById('res2').innerHTML = `There are ${daysLeft} days left until New Year!`;
}