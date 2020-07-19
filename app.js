// *********Chapter 21-25 *****     Assignment 6 *****   Task 1

// var firstName=prompt("Enter First Name","");
// var lastName=prompt("Enter last Name","");
// var fullName=firstName+lastName;
// alert(fullName);

// *********Chapter 21-25 *****     Assignment 6 *****   Task 2

// var mobileName=prompt("Enter Favorite ","");
// document.write("My Favorite phone is: "+mobileName+"<br>Length of string: "+mobileName.length);

// *********Chapter 21-25 *****     Assignment 6 *****   Task 3

// var Word=prompt("Enter a Word ","");
// var findValue=prompt("Enter a Letter to find ","");
// if(Word.indexOf(findValue)){
//     document.write("String: "+Word+"<br>Index of '"+findValue+"' : "+Word.indexOf(findValue));
// }

// *********Chapter 21-25 *****     Assignment 6 *****   Task 4

// var Word="Hello World";
// var findValue="l";
// var reverseArray=Word.split("").reverse().join();
// // alert(Word);
// if(reverseArray.indexOf(findValue)){
//     document.write("String: "+Word+"<br>Index of '"+findValue+"' : "+Word.indexOf(findValue));
// }

// *********Chapter 21-25 *****     Assignment 6 *****   Task 5

// var Word="Pakistan";
// var findValue=3;
// var split=Word.split("")
// // alert(split[findValue]);
// document.write("String: "+Word+"<br>Character at index "+findValue+"' : "+split[findValue]);

// *********Chapter 21-25 *****     Assignment 6 *****   Task 6

// var firstName=prompt("Enter First Name","");
// var lastName=prompt("Enter last Name","");
// alert(firstName+lastName);

// *********Chapter 21-25 *****     Assignment 6 *****   Task 7

// var city="Hyderabad";
// var res=city.replace("Hyder","Islam")
// document.write("City: "+city+"<br>After replacement:"+res);

// *********Chapter 21-25 *****     Assignment 6 *****   Task 8

// var message ="Ali and Sami are best friends. They play cricket and football together.";
// var res="";
// // alert(message);
// var messageArray=message.split(" ") //// here we provide space for perticular word as a array index
// // alert(messageArray);
// for(var i=0;i<messageArray.length;i++){
//     if(messageArray[i]=="and")
//     {
//         messageArray=message.replace("and","&");
//         i;
//         // alert(i);
//         document.write(i);
//     }
// }
// document.write("<br>"+messageArray);

// alert(messageArray);
// document.write("Text: "+sentence+" <br>There are "+count+" occurrence(s) of word 'the'");

// *********Chapter 21-25 *****     Assignment 6 *****   Task 9

// var num=472;
// var numString=num.toString();
// // alert(typeof numString);
// document.write("Value: "+numString+"<br>Type: "+typeof numString+"<br>Value: "+num+"<br>Type: "+typeof num);

// **********Chapter 21-25 ****     Assignment 6 *****   Task 10

// var smallWords=prompt("Enter a Word","");
// var CapWords=smallWords.toUpperCase()
// // alert(smallWords);
// document.write("User input: "+smallWords+"<br>Upper case: "+CapWords)

// **********Chapter 21-25 ****     Assignment 6 *****   Task 11

// var smallWords=prompt("Enter a Word","");
// ////alert(typeof smallWords);

// var smallWords=smallWords.toLocaleLowerCase();
// var CapWords=smallWords.split("")
// CapWords[0]=CapWords[0].toUpperCase();
// //// alert(CapWords[0].toUpperCase());
// //// alert(CapWords);
// //// var myJSON=JSON.stringify(CapWords)
// //// var converttoString=CapWords.toString()
// //// alert(typeof converttoString);
// document.write("User input: "+smallWords+"<br>Title case: "+CapWords+"<br>");

// //// one more
// a=smallWords.charAt(0).toUpperCase()+smallWords.slice(1);
// document.write("<br>"+a);

// **********Chapter 21-25 ****     Assignment 6 *****   Task 12

// var num=35.36;
// var numString=num+"";
// numString=numString.replace(".","");
// // alert(typeof numString)
// // alert(numString);
// document.write("Number: "+num+"<br>Result: "+numString);

// **********Chapter 21-25 ****     Assignment 6 *****   Task 13

// var userName=prompt("Enter a User Name");
// if(userName.indexOf(33)){
//     alert("Please enter a valid username");
// }
/////problem can't understand how to solve
// **********Chapter 21-25 ****     Assignment 6 *****   Task 14

// var A=["cake", "apple pie", "cookie", "chips", "patties"]
// var check=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?","");
// if(A.indexOf(check) !==-1){
//     alert("Yes! Is available in our bakery");
// }else{
//     alert("We are sorry! is not available in our bakery");

// }                                                                                0=48 9=57

// **********Chapter 21-25 ****     Assignment 6 *****   Task 15

// var password=prompt("Enter Password ");
// // var convert=password.charCodeAt();
// for(var i=0;i<=password.length;i++){
//     if(48<=password.charCodeAt() && password.charCodeAt()<=57){
//         document.write("Password can not begin with a number");
//         break;
//     }
//     if(password.length<5){
//         document.write("Your Password is short");
//         break;
//     }
//     if(65<=password.charCodeAt() || password.charCodeAt()<=90 || 97<=password.charCodeAt() || password.charCodeAt()<=122 || 48<=password.charCodeAt() || password.charCodeAt()<=57){
//         document.write("Good Password");
//         break;
//     }
// }

// **********Chapter 21-25 ****     Assignment 6 *****   Task 16

// var university="University of Karachi";
// universityArray=university.split("");
// for(var i=0;i<university.length;i++){
//     document.write(universityArray[i]+"<br>");
// }
//// document.write(universityArray);

// **********Chapter 21-25 ****     Assignment 6 *****   Task 17

// var Word="Pakistan";
// var split=Word.split("")
// document.write("User input: "+Word+"<br>Last Character of input "+split[Word.length-1]);

// **********Chapter 21-25 ****     Assignment 6 *****   Task 18

// var sentence="The quick the brown fox the jumps over the lazy dog."
// var sentenceArray=sentence.split(" ") //// here we provide space for perticular word as a array index
// var count=0;
// for(var i=0;i<sentence.length;i++){
//     if(sentenceArray[i]==="the" || sentenceArray[i]==="The"){
//         count++;
//         // alert(count);
//     }
// }
// document.write("Text: "+sentence+" <br>There are "+count+" occurrence(s) of word 'the'");

// ***********Chapter 26-30 **     Assignment 6 *****   Task 1

// var num=prompt("Enter a number");
// // var num=3.452;
// document.write("number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

// ***********Chapter 26-30 **     Assignment 6 *****   Task 2

// var num=prompt("Enter a Negative number");
// // var num=3.452;
// document.write("number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

// ***********Chapter 26-30 **     Assignment 6 *****   Task 3

// var number=prompt("Enter a number");
// document.write("The absolute value of "+number+" is "+Math.abs(number));

// ***********Chapter 26-30 **     Assignment 6 *****   Task 4

// var bigDecimal = Math.random();
// // document.write(bigDecimal+"<br>");
// var improvedNum = (bigDecimal * 6) + 1;
// // document.write(improvedNum+"<br>");
// var numberOfStars = Math.floor(improvedNum);
// // document.write(numberOfStars);
// document.write("random dice value: "+numberOfStars);

// ***********Chapter 26-30 **     Assignment 6 *****   Task 5

// var randomValue=Math.random();
// // document.write("value "+value);
// var aproxValue2=(randomValue*2)+1;
// // document.write("<br>value2 "+aproxValue2);
// var result=Math.floor(aproxValue2);
// // document.write("<br>value3 "+value3);
// if(result===2){
//         document.write(result+"<br>random coin value: Heads");
// }else{
//         document.write(result+"<br>random coin value: Tails");
// }

// ***********Chapter 26-30 **     Assignment 6 *****   Task 6

// var bigDecimal = Math.random();
// // document.write(bigDecimal+"<br>");
// var improvedNum = (bigDecimal * 100);
// // document.write(improvedNum+"<br>");
// var numberOfStars = Math.floor(improvedNum);
// // document.write(numberOfStars);
// document.write("random number between 1 and 100: "+numberOfStars);

// ***********Chapter 26-30 **     Assignment 6 *****   Task 7

// var userWeight=+prompt("Enter Your Weight");
// var bigDecimal = Math.random();
// // document.write(bigDecimal+"<br>");
// var improvedNum = (bigDecimal * 10);
// // document.write(improvedNum+"<br>");
// var numberOfStars = +improvedNum.toFixed(1); //here wi tofixed because round of don't displace decimal points
// // numberOfStars.toFixed(5);
// // document.write(numberOfStars);
// document.write("The weight of user is "+(userWeight+numberOfStars));

// ***********Chapter 26-30 **     Assignment 6 *****   Task 8

// var bigDecimal = Math.random();
// // document.write(bigDecimal+"<br>");
// var improvedNum = (bigDecimal * 10);
// // document.write(improvedNum+"<br>");
// var numberOfStars = Math.floor(improvedNum);
// // document.write(numberOfStars);
// // document.write("random dice value: "+numberOfStars);
// var userValue=prompt("Enter a number between 1 to 10");
// if(numberOfStars===userValue){
//         alert("Congratulate!");
// }else{
//         alert("Sorry! The Secret key is "+numberOfStars);
// }

// **********Chapter 31-34********     Assignment 6 *****   Task 1

// var date=Date();
// document.write(date);

// **********Chapter 31-34********     Assignment 6 *****   Task 2

//// date.toString();     //here is a mistake that date to string not save in any variable.
//// var month=date.slice(0,3)
//// var b=date.toString();
//// var month=b.(0,3)    //new key word is important for getTime getDay ...
//// document.write("Current Month: "+month);
//// var currentMonth=Date.getMonth();
//// document.write(currentMonth);
// var date=new Date();
// var month=date.getMonth();
// if(month===0){
//         document.write("Current Month: January");
// }
// else if(month===1){
//         document.write("Current Month: February");
// }else if(month===2){
//         document.write("Current Month: March");
// }else if(month===3){
//         document.write("Current Month: April");
// }else if(month===4){
//         document.write("Current Month: May");
// }else if(month===5){
//         document.write("Current Month: June");
// }else if(month===6){
//         document.write("Current Month: July");
// }else if(month===7){
//         document.write("Current Month: August");
// }else if(month===8){
//         document.write("Current Month: September");
// }else if(month===9){
//         document.write("Current Month: October");
// }else if(month===10){
//         document.write("Current Month: November");
// }else if(month===11){
//         document.write("Current Month: December");
// }

// **********Chapter 31-34********     Assignment 6 *****   Task 3

// var date=new Date();
// var day=date.toString(); //here date convert into string and save in day
//     day=day.slice(0,3); // now here day update with slice
// alert("Today is "+day)

// **********Chapter 31-34********     Assignment 6 *****   Task 4

// var date=new Date();
// var day=date.toString(); //here date convert into string and save in day
//     day=day.slice(0,3); // now here day update with slice
// // alert("Today is "+day)
// if(day==="Sun" || day==="sun" || day==="Sat" || day==="sat"){
//         alert("Its Fun Day")
// }else{
//         alert("Its Working Day")
// }

// **********Chapter 31-34********     Assignment 6 *****   Task 5

// var date=new Date();
// var day=date.getDate();
// alert(day);
// if(day <16){
//         alert("First fifteen Days of the month")
// }else{
//         alert("Last Days of the month")
// }

// **********Chapter 31-34********     Assignment 6 *****   Task 6

// var date=new Date();
// var msec=date.getTime();
// document.write("Current Date: "+date);
// document.write("<br>Elapsed milliseconds since January 1,1970: "+msec);
// document.write("<br>Elapsed minutes since January 1,1970: "+msec/60);

// **********Chapter 31-34********     Assignment 6 *****   Task 7

// var date=new Date();
// var mode=date.getHours();
// document.write("Current Date: "+mode);
// if(mode<12){
//         alert("Its AM");
// }else{
//         alert("Its PM");
// }

// **********Chapter 31-34********     Assignment 6 *****   Task 8

// var date=new Date();
// var day=date.getFullYear()
// alert("Later Date: Thu Dec 31 2020 00:00:00 GMT+0500(PKT)");

// **********Chapter 31-34********     Assignment 6 *****   Task 9

// var firstRamzan=new Date("June 18,2015"); //apni date insert
//     firstRamzan=firstRamzan.getTime(); //apni date tk k time milli per rakh k set krwao getime() k function sy
// var currentDays=new Date();     // aj ka date and overwrite
//     currentDays=currentDays.getTime();  // aj k date tk ka time in milli
// var totalDays=(currentDays-firstRamzan)/(1000*60*60*24);  //convert into days and also take difference
//     totalDays=Math.floor(totalDays); //roundoff and overwrite
//     alert(totalDays)

// ***********Chapter 31-34*******     Assignment 6 *****   Task 10

// var refDate=new Date("Dec 05,2015"); //apni date insert
//     refDate=refDate.getTime(); //apni date tk k time milli per rakh k set krwao getime() k function sy
//     var currentDays=new Date();     // aj ka date and overwrite
//     currentDays=currentDays.getTime();  // aj k date tk ka time in milli
// var totalSec=(currentDays-refDate)/(1000);  //convert into seconds and also take difference
//     totalSec=Math.floor(totalSec); //roundoff and overwrite
//     document.write("On reference date Sat Dec 05 2015 GMT+0500(PKT)");
//     document.write("<br>"+totalSec+" seconds had passed since beginning of 2015");

// ***********Chapter 31-34*******     Assignment 6 *****   Task 11

// var currentDate=new Date();
// //     currentDate=currentDate.getTime()
//     document.write("<br>"+currentDate)
// var agoHour=(currentDate.getHours())-1;
// // document.write("<br>"+agoHour)
// // var ago=currentDate;
// //     ago=ago.setTime(agoHour)
// document.write("<br>"+ago);

//// KINDLY HELP HOW TO SOVE

// ***********Chapter 31-34*******     Assignment 6 *****   Task 12

// var currentDate=new Date();
// document.write(currentDate);
// var yearago=currentDate.getUTCFullYear()-100;
// document.write("<br>"+yearago);
// // currentDate=currentDate;
// var hunYearAgo=new Date(yearago);
//     // hunYearAgo=hunYearAgo.getTime();
// document.write("<br>"+hunYearAgo);

// ***********Chapter 31-34*******     Assignment 6 *****   Task 13

// var age=prompt("Enter Your Age");
// var currentYear=new Date();
//     currentYear=currentYear.getUTCFullYear();
// var dob=currentYear-age;
// document.write("Your age is "+age+"<br>Your birth year is "+dob)

// ***********Chapter 31-34*******     Assignment 6 *****   Task 14

// var units=410; charges=16;bill=units*charges;late=350;lateBill=bill+late;
// document.write("<h1>K-Electric Bill<br></h1>");
// document.write("<br>Customer Name: <b>ABC Customer</b>");
// document.write("<br>Month:<b> February</b>");
// document.write("<br>Number of units: <b>"+units+"</b>");
// document.write("<br>Charges per unit: <b>"+charges+"</b>");
// document.write("<br><br>Net Amount Payable (within Due Date): <b>"+bill+"</b>");
// document.write("<br>Late payment surcharge: <b>"+late+"</b>");
// document.write("<br>Gross Amount Payable (after Due Date): <b>"+lateBill+"</b>");

// ***********Chapter 35-38*******     Assignment 6 *****   Task 1

// function time(){
//         var date=new Date();
//         alert(date);
// }
// time();

// ***********Chapter 35-38*******     Assignment 6 *****   Task 2

// function greet(firstName,lastName){
//         alert("Welcome "+(firstName+lastName));
// }
// var firstName=prompt("Enter your First Name")
// var lastName=prompt("Enter your Last Name")
// greet(firstName,lastName);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 3

// function add(Num1,Num2){
//         var result=Num1+Num2
//         return result;
// }
// var num1=+prompt("Enter First Number");
// var num2=+prompt("Enter Second Number");
// var result=add(num1,num2);
// alert("Result is "+result);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 4

// function calculator(firstValue,operator,SecondValue){
// //here only calculate
//         if(operator === "-")
//             {
//                 var c=a-b;
//                 return c;
//             }
//         else if(operator === "*")
//             {
//                 var c=a*b;
//                 return c;
//             }
//         else if(operator === "/")
//             {
//                 var c=a/b;
//                 return c;
//             }
//         else if(operator === "+")
//             {
//                 var c=a+b;
//                 return c;
//             }
//         else if(operator === "%")
//             {
//                 var c=b/a;
//                 return c;
//             }
// }
// var a=+prompt("","Enter First Value");
// var operator=prompt("","Enter Operator to Perform")
// var b=+prompt("","Enter Second Value");
// var result=calculator(a,operator,b);
// if(operator === "-") //here if use because a/c to question return and also explain what operation done here.
// {
//     document.write("Difference of "+a+" and "+b+" is "+result+".");
// }
// else if(operator === "*")
// {
//     document.write("Multiple of "+a+" and "+b+" is "+result+".");
// }
// else if(operator === "/")
// {
//     document.write("Division of "+a+" by "+b+" is "+result+".");
// }
// else if(operator === "+")
// {
//     document.write("Sum of "+a+" and "+b+" is "+result+".");
// }
// else if(operator === "%")
// {
//     document.write("Modulus of "+a+" and "+b+" is "+result*100+"% .");
// }

// ***********Chapter 35-38*******     Assignment 6 *****   Task 5

// function square(Num){
//         alert("Square of "+Num+" is "+Num*Num);

// }
// var Value=prompt("Enter a Value for Its Square");
// square(Value);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 6

// function factorial(Num){
//         for(var i=Num-1;i>=1;i--){
//                 Num=Num*i
//         }
//         alert(Num);
// }
// var Value=prompt("Enter a Number");
// factorial(Value);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 7

// function count(start,end){
//         document.write("<h1>Counting</h1>Starting "+start+"<br>Ending "+end+"<br>")
//         for(var i=start;i<=end;i++){
//                 document.write("<br>"+i);
//         }
// }
// var num1=+prompt("Enter Starting Value");
// var num2=+prompt("Enter Ending Value");
// count(num1,num2);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 8

// function square(value){
//         value=value*value
//         return value
// }
// function countHypo(base2,perp2){
//         // console.log("<br>base2 "+base2)
//         //console.log("<br>perp2 "+perp2)
// var   base3=square(base2);
// var   perp3=square(perp2);
//         //console.log("<br>base2 "+base2)
//        // console.log("<br>perp2 "+perp2)
// var hyposqu=perp3+base3;
// var hypo=Math.sqrt(hyposqu)
// document.write("Base :"+base2+"<br>Perpendicular :"+perp2+"<br>Hypotenuse :"+hypo)
// document.write("<br><br><br>BaseSquare :"+base3+"<br>PerpendicularSquare :"+perp3+"<br>HypotenuseSquare :"+hyposqu)

// }
// var base1=+prompt("Enter Base Value");
// var perp1=+prompt("Enter Perpendicular Value");
// //console.log("<br>base1 "+base1)
// //console.log("<br>perp1 "+perp1)
// countHypo(base1,perp1);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 9

// function areaFind(value1,value2){
//         document.write("<h1>Area of a Triangle</h1>")
//         document.write("<br>Height: "+value2+"<br>Width: "+value1+"<br>Area: "+value1*value2);
// }
// var width=+prompt("Enter Width of a Triangle")
// var height=+prompt("Enter Height of a Triangle")
// areaFind(width,height)

// ***********Chapter 35-38*******     Assignment 6 *****   Task 10

// function checkPalindrome(word){
//         var check="";
//         for(var i=word.length-1;i>=0;i--){
//                 check+=word[i]
//         }
//         if(word===check){
//                 document.write(word+" is a Palindrome Word")
//         }else{
//                 document.write(word+" is not a Palindrome Word")
//         }
// }
// var userWord=prompt("Enter a Word");
// checkPalindrome(userWord);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 11

// //// var input="the good fox";
// //// console.log(input);
// //// var split=input.split(" ");
// //// console.log(split);
// //// var a=split[0].toString().charAt(0).toUpperCase()+split[0].slice(1);
// //// console.log(a);
// //// var b=split[1].toString().charAt(0).toUpperCase()+split[1].slice(1);
// //// console.log(b);
// //// var c=split[2].toString().charAt(0).toUpperCase()+split[2].slice(1);
// //// console.log(c);
// //// console.log(a+b+c);
// var input=prompt("Enter a sentence");
// upperCase(input);
// function upperCase(input){
//         // console.log(input);
//         var convert=[];     //here array declear for saving Convert Word
//         var split=input.split(" ")  //here " " <- space use to split words with array(as a object)
//         // console.log(split);
//         for(var i=0;i<split.length;i++){        //here split.length q k hamen split jitny words hoa hen un k start ho change krna hai or wo kitny ye btayega
//                  convert[i]=split[i].toString().charAt(0).toUpperCase()+split[i].slice(1);
// }//1st array to string 2nd firstletter convert into uppercase
// //3rd add( concadinate kro) slice(1) sy not slice(0)X q k (0)index per capital word hai or hamen us k agy sy add krna hai
// // 4th convert[i] yahn hum wapis array me save kr rhen
//         convert=convert.toString()    //here array sy string per ly aye wapis
//         document.write("Input Sentence: "+input+"<br>Convert Sentence:  "+convert);
// }

// ***********Chapter 35-38*******     Assignment 6 *****   Task 12

// var input=prompt("Enter a Sentence");
// var split=input.split(" ");

// ***********Chapter 35-38*******     Assignment 6 *****   Task 13

// var sentence=prompt("Enter a Sentence");
// var Letter=prompt("Enter a Letter");
// var count=0;
// for(var i=0;i<sentence.length;i++){
//         if(sentence[i]==Letter){
//                 count++;
//         }
// }
// document.write("Input Sentence is : "+sentence+"<br>Search Letter '"+Letter.toUpperCase()+"' Comes: "+count);

// ***********Chapter 35-38*******     Assignment 6 *****   Task 14

// function calcCircumference(radiusVal){
//         var circum=Math.floor(2*Math.PI*radiusVal);
//         document.write("Radius is :"+radiusVal+"<br>Circumference of Circle is :"+circum)
// }
// function calcArea(radiusVal){
//         var area=Math.floor(Math.PI*radiusVal*radiusVal)
//         document.write("<br>Area of Circle is :"+area)
// }
// var radius=+prompt("Enter Radius of a Circle")
// calcCircumference(radius);
// calcArea(radius);
