// Class Assignment Chapter 14-16----------------------

// Q1-------------

// var arr = [];

// Q2-------------

// var studentsName = [];

// Q3-------------

// var arr = ["abc"];

// console.log(arr);

// Q4--------------

// var arr = [12];

// console.log(arr);

// Q5--------------

// var arr = [];

//  arr [0]  = true;

//  arr [1] = false;

// console.log(arr);

// Q6------------

// var arr = [];

// arr[0] = 12;
// arr[1] = "abc";
// arr[2] = false;

// console.log(arr);

// Q7-------------


// var arr = [];

// arr[0] = "SSC";
// arr[1] = "HSC";
// arr[2] = "BCS";
// arr[3] = "BS";
// arr[4] = "BCOM";
// arr[5] = "MS";
// arr[6] = "M.Phil.";
// arr[7] = "PhD";

// document.write("<h1>" + "Qualification" + "</h1>" + "<br>" + "1) SSC" + "<br>" +"2) HSC"+ "<br>" + "3) BCS" + "<br>" + "4) BS" + "<br>" + "5) BCOM" + "<br>" + "6) MS" + "<br>" + "7) M.Phil." + "<br>" + "8) PhD");


// console.log(arr);

// Q8--------------

// var studentsName = [];

// studentsName[0] = "Michael";
// studentsName[1] = "John";
// studentsName[2] = "Tony";

// var studentsScore =[];

// studentsScore[0] = 320;
// studentsScore[1] = 230;
// studentsScore[2] = 480;

// var totalMarks = 500;

// var percentage1 = (studentsScore [0]/totalMarks) * 100;

// var percentage2 = (studentsScore [1]/totalMarks) * 100;

// var percentage3 = (studentsScore [2]/totalMarks) * 100;

// document.write("Score of " + studentsName[0] + "is " + studentsScore[0] + ".Percentage: " + percentage1 + "%" + "<br>" );

// document.write("Score of " + studentsName[1] + "is " + studentsScore[1] + ".Percentage: " + percentage2 + "%" + "<br>" );

// document.write("Score of " + studentsName[2] + "is " + studentsScore[2] + ".Percentage: " + percentage3 + "%" + "<br>" );

// Q9----------

// var colorNames = ["red" , "green" , "blue"];

//  document.write(colorNames);

// a-----------

//  var userColor = prompt("Enter your color name (a)");

//  colorNames.unshift(userColor);

// document.write(colorNames);

// b----------------

// var userColor1 = prompt("Enter your color name (b)");

// colorNames.push(userColor1);

// document.write(colorNames);

// c--------------

// var colorNames = ["red " , "green " , "blue "];

// colorNames.unshift("white " , "black ");

// document.write(colorNames);

// d--------------

// var colorNames = ["red " , "green " , "blue "];

// colorNames.shift();

// document.write(colorNames);

// e--------------

// var colorNames = ["red " , "green " , "blue "];

// colorNames.pop();

// document.write(colorNames);

// f--------------

// var colorNames = [" red " , " green " , " blue "];

// var index = +prompt("Enter your index numder to add color?");

// var userColor3 = prompt("Enter your color");

//  indexNumber = index;

//  colorNames = [

//     colorNames.slice(0, index),userColor3,  colorNames.slice(index) ];

//  document.write(colorNames); 

// g-------------

// var colorNames = [" red " , " green " , " blue "];

// var index = +prompt("Enter your index numder to delete color?");

// var userColor4 = +prompt("how many numbers you want to delete?");

// colorNames.splice(index, userColor4);

// document.write(colorNames); 

// console.log(colorNames);

// Q10---------------

// var studentsScore = [ 320 , 230 , 480 , 120 ];

// studentsScore.sort();

// console.log (studentsScore);

// document.write("Scores of Students: 320 , 230 , 480 , 120" + "<br>" + "Ordered Scores of Students: " + studentsScore);

// Q11--------------

// var cities =["Karachi" , "Lahore" , "Islamabad" , "Quetta" , "Peshawer"];

// var copy = cities.slice(2 , 5);

// console.log(copy);

// document.write("Cities List: " + "<br>" + cities + "<br>" + "<br>");

// document.write("Selected Cities List: " + "<br>" + copy);

// Q12--------------

// var arr = ["This ", "is ", "my ", "cat"];

// var arrValue = arr.join("");

// console.log(arrValue);

// document.write("Array: " + "<br>" + arr + "<br>" + "<br>");

// document.write("String: " + "<br>" + arrValue );

// Q13-------------

// var arr = [];

// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");

// document.write("Devices: " +"<br>" + arr + "<br>" + "<br>");

// console.log(arr);

// document.write("Out:" + "<br>" + arr.shift() + "<br>");

// console.log(arr);

//  document.write("Out:" + "<br>" + arr.shift() + "<br>");

//  console.log(arr);

//  document.write("Out:" + "<br>" + arr.shift() + "<br>" );

//  console.log(arr);

//  document.write("Out:" + "<br>" + arr.shift() + "<br>" );

//  console.log(arr);

// Q14-------------

// var arr = [];

// arr.push("Keyboard");
// arr.push("Mouse");
// arr.push("Printer");
// arr.push("Monitor");

// document.write("Devices: " +"<br>" + arr + "<br>" + "<br>");

// console.log(arr);

// document.write("Out:" + "<br>" + arr.pop() + "<br>");

// console.log(arr);

// document.write("Out:" + "<br>" + arr.pop() + "<br>");

// console.log(arr);

// document.write("Out:" + "<br>" + arr.pop() + "<br>" );

// console.log(arr);

// document.write("Out:" + "<br>" + arr.pop() + "<br>" );

// console.log(arr);

// Q15--------------

// var phoneManufacturers = [ "Apple" , "Samsung" , "Motorola" , "Nokia" , "Sony" , "Haier" ];

// console.log(phoneManufacturers);

// document.write("<select>" +
// "<option value = disabled>" + "Select a Phone Menu" + "</option>" + "<br>" + 
// "<option>" + "Apple " + "</option>" + "<br>" + 
// "<option>" + "Samsung " + "</option>" + "<br>" +
// "<option>" + "Motorola " + "</option>" + "<br>" +
// "<option>" + "Nokia " + "</option>" + "<br>" +
// "<option>" + "sony " + "</option>" + "<br>" +
// "<option>" + "Haier " + "</option>" + "<br>" + "</select>");
