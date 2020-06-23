// ****************     Assignment 6 *****   Task 1 **Chapter 21-25 **********

// var firstName=prompt("Enter First Name","");
// var lastName=prompt("Enter last Name","");
// var fullName=firstName+lastName;
// alert(fullName);

// ****************     Assignment 6 *****   Task 2 **Chapter 21-25 **********

// var mobileName=prompt("Enter Favorite ","");
// document.write("My Favorite phone is: "+mobileName+"<br>Length of string: "+mobileName.length);

// ****************     Assignment 6 *****   Task 3 **Chapter 21-25 **********

// var Word=prompt("Enter a Word ","");
// var findValue=prompt("Enter a Letter to find ","");
// if(Word.indexOf(findValue)){
//     document.write("String: "+Word+"<br>Index of '"+findValue+"' : "+Word.indexOf(findValue));
// }

// ****************     Assignment 6 *****   Task 4 **Chapter 21-25 **********

// var Word="Hello World";
// var findValue="l";
// var reverseArray=Word.split("").reverse().join();
// // alert(Word);
// if(reverseArray.indexOf(findValue)){
//     document.write("String: "+Word+"<br>Index of '"+findValue+"' : "+Word.indexOf(findValue));
// }

// ****************     Assignment 6 *****   Task 5 **Chapter 21-25 **********

// var Word="Pakistan";
// var findValue=3;
// var split=Word.split("")
// // alert(split[findValue]);
// document.write("String: "+Word+"<br>Character at index "+findValue+"' : "+split[findValue]);

// ****************     Assignment 6 *****   Task 6 **Chapter 21-25 **********

// var firstName=prompt("Enter First Name","");
// var lastName=prompt("Enter last Name","");
// alert(firstName+lastName);

// ****************     Assignment 6 *****   Task 7 **Chapter 21-25 **********

// var city="Hyderabad";
// var res=city.replace("Hyder","Islam")
// document.write("City: "+city+"<br>After replacement:"+res);

// ****************     Assignment 6 *****   Task 8 **Chapter 21-25 **********

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


// ****************     Assignment 6 *****   Task 9 **Chapter 21-25 **********

// var num=472;
// var numString=num.toString();
// // alert(typeof numString);
// document.write("Value: "+numString+"<br>Type: "+typeof numString+"<br>Value: "+num+"<br>Type: "+typeof num);

// ****************     Assignment 6 *****   Task 10 **Chapter 21-25 **********

// var smallWords=prompt("Enter a Word","");
// var CapWords=smallWords.toUpperCase()
// // alert(smallWords);
// document.write("User input: "+smallWords+"<br>Upper case: "+CapWords)

// ****************     Assignment 6 *****   Task 11 **Chapter 21-25 **********

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
// document.write("User input: "+smallWords+"<br>Title case: "+CapWords);


// ****************     Assignment 6 *****   Task 12 **Chapter 21-25 **********

// var num=35.36;
// var numString=num+"";
// numString=numString.replace(".","");
// // alert(typeof numString)
// // alert(numString);
// document.write("Number: "+num+"<br>Result: "+numString);

// ****************     Assignment 6 *****   Task 13 **Chapter 21-25 **********

// var userName=prompt("Enter a User Name");
// if(userName.indexOf(33)){
//     alert("Please enter a valid username");
// }
        /////problem can't understand how to solve
// ****************     Assignment 6 *****   Task 14 **Chapter 21-25 **********

// var A=["cake", "apple pie", "cookie", "chips", "patties"] 
// var check=prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?","");
// if(A.indexOf(check) !==-1){
//     alert("Yes! Is available in our bakery"); 
// }else{
//     alert("We are sorry! is not available in our bakery");

// }                                                                                0=48 9=57

// ****************     Assignment 6 *****   Task 15 **Chapter 21-25 **********

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

// ****************     Assignment 6 *****   Task 16 **Chapter 21-25 **********

// var university="University of Karachi";
// universityArray=university.split("");
// for(var i=0;i<university.length;i++){
//     document.write(universityArray[i]+"<br>"); 
// }
//// document.write(universityArray);

// ****************     Assignment 6 *****   Task 17 **Chapter 21-25 **********

// var Word="Pakistan";
// var split=Word.split("")
// document.write("User input: "+Word+"<br>Last Character of input "+split[Word.length-1]);

// ****************     Assignment 6 *****   Task 18 **Chapter 21-25 **********

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

// ****************     Assignment 6 *****   Task 1 **Chapter 26-30 **********

// var num=prompt("Enter a number");
// // var num=3.452;
// document.write("number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

// ****************     Assignment 6 *****   Task 2 **Chapter 26-30 **********

// var num=prompt("Enter a Negative number");
// // var num=3.452;
// document.write("number: "+num+"<br>round off value: "+Math.round(num)+"<br>floor value: "+Math.floor(num)+"<br>ceil value: "+Math.ceil(num));

// ****************     Assignment 6 *****   Task 3 **Chapter 26-30 **********

// var number=prompt("Enter a number");
// document.write("The absolute value of "+number+" is "+Math.abs(number));

// ****************     Assignment 6 *****   Task 4 **Chapter 26-30 **********

// var bigDecimal = Math.random();
// // document.write(bigDecimal+"<br>");
// var improvedNum = (bigDecimal * 6) + 1;
// // document.write(improvedNum+"<br>");
// var numberOfStars = Math.floor(improvedNum);
// // document.write(numberOfStars);
// document.write("random dice value: "+numberOfStars);

// ****************     Assignment 6 *****   Task 5 **Chapter 26-30 **********

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

// ****************     Assignment 6 *****   Task 6 **Chapter 26-30 **********

// var bigDecimal = Math.random();
// // document.write(bigDecimal+"<br>");
// var improvedNum = (bigDecimal * 100);
// // document.write(improvedNum+"<br>");
// var numberOfStars = Math.floor(improvedNum);
// // document.write(numberOfStars);
// document.write("random number between 1 and 100: "+numberOfStars);

// ****************     Assignment 6 *****   Task 7 **Chapter 26-30 **********

// var userWeight=+prompt("Enter Your Weight");
// var bigDecimal = Math.random();
// // document.write(bigDecimal+"<br>");
// var improvedNum = (bigDecimal * 10);
// // document.write(improvedNum+"<br>");
// var numberOfStars = +improvedNum.toFixed(1); //here wi tofixed because round of don't displace decimal points
// // numberOfStars.toFixed(5);
// // document.write(numberOfStars);
// document.write("The weight of user is "+(userWeight+numberOfStars));

// ****************     Assignment 6 *****   Task 8 **Chapter 26-30 **********

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

// ****************     Assignment 6 *****   Task 1 **Chapter 31-34 **********

// var date=Date();
// document.write(date);

// ****************     Assignment 6 *****   Task 2 **Chapter 31-34 **********

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

// ****************     Assignment 6 *****   Task 3 **Chapter 31-34 **********



// ****************     Assignment 6 *****   Task 4 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 5 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 6 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 7 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 8 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 9 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 10 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 11 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 12 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 13 **Chapter 31-34 **********
// ****************     Assignment 6 *****   Task 14 **Chapter 31-34 **********

