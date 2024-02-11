//Q1

let age=15;
if(age>=10 && age<=20){
  console.log("Yes, age between 10 and 20")
}

//Q2
let marks=50
switch(marks){
  case 90:console.log("A+");break;
    case 80:console.log("A");break;
    case 70:console.log("B");break;
    case 60:console.log("C");break;
  default: console.log("Fail")
    
}

//Q3
let num=15;
if(num%2==0 && num%3==0)
  console.log("Divisible by 2 and 3")
else
  console.log("Not divisible by 2 and 3")

//Q4
let num1=15;
if(num1%2==0 || num1%3==0)
  console.log("Divisible by 2 or 3")
else
  console.log("Not divisible by 2 or 3")

//q5
let age1=15;
console.log(age1>18?"You can drive":"You cannot drive")