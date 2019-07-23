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
  