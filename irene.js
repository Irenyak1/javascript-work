/*
A non parameterized function to add four numbers and print the 
total, with declared variables and assigned values respectively

*/
function addFourNumbers()
{
    var number1 = 20;
    var number2 = 40;
    var number3 = 70;
    var number4 = 34;
    var total = number1 + number2 + number3 + number4;
    
    console.log("The total is: " + total);
    
    }
    // calling the function "addFourNumbers" which adds the four variables
    addFourNumbers(); 

/* 
A four parameterized function to add four numbers
and printing the result to the console
*/
function addFourNumberWithParameters(numberOne, numberTwo, numberThree, numberFour)
{
   var result = numberOne + numberTwo + numberThree + numberFour;
    console.log("The result is: " +result);
    
    }
    // calling the function "addFourNumberWithParameters" which adds the four parameters passed
    addFourNumberWithParameters(7, 8, 9, 90);
    
/* 
A function to print odd numbers between 50 and 100 with a for loop
iterating between 50 and 100 and an if statement to output odd
numbers
*/
function printOddNumbers()
{
    for (numberOne = 50; numberOne <= 100; numberOne++)
    {
        if (numberOne%2 != 0)
        {
        console.log(numberOne);
        }
    }
    }
    // calling the function "printOddNumbers" which prints odd numbers between 50 and 100
    printOddNumbers();
    

    // 23/07/2019 OOP

    var student = {
        name :"Osman",
        gender: "male",
        DoB :1970,

        greet: function(){
        var hey = "how are you my students"; // behaviour
        return hey;
        }
}
    console.log(student.greet());
    document.write(student.greet())
    console.log(student.name);
    console.log(Object.keys(student));// list all the keys in object student
    console.log(Object.values(student));// list all types of keys in object student

    // another object
    // function a (ab, cd)
    // {
    //   return ab+cd;
      
    // }
    // function b(){
    // return a(30, 20)+20;
      
    // }
    
    // console.log(b());
  
  
    //another object
  function a (ab, cd)
  {
    var c = ab + cd
    return c;
    
  }
  function b(){
    
    var d = a(30, 20);
    var e = d+a(20,30);
   return e
    
  }
  
  console.log(b());
  // functions
   function house(location, type, color, roofType, numberOfRooms){
    this.location = location;
    this.type = type;
    this.color = color;
    this.roofType = roofType;
    this.numberOfRooms = numberOfRooms;

  }
  
  var house1 = new house("Canaan sites", "Bangalow", "Maroon", "Rectangular", 4);
  var house2 = new house("Oakland", "Bangalow", "Maroon", "Rectangular", 4);
  
  console.log(house1.location);
  console.log(house1);
  
  for (let key in house1){
    console.log(house1[key])
    document.write('<p> <b>'+house1[key]+'</b></p>')
  }
  
  // // house
  // function home(var1, var2, var3, var4, var5){
  //   this.var1 = var1;
  //   this.var2 = var2;
  //   this.var3 = var3;
  //   this.var4 = var4;
  //   this.var5 = var5;
  //   var feed = funct
  // }
  
  // var house3 = new home("Bangalow", "Tank hill", "lubobbo close", "Irene", "gray");
  
  // for (let key in house3){
  //   console.log(house3[key])
  //   console.log("House3 properties are: "+house3[key])
  // }
  
  


  