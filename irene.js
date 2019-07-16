function addFourNumbers(){
    //function without parameters to add four numbers
    var number1 = 20;
    // variable number1 with assigned value of 20
    var number2 = 40;
    // variable number2 with assigned value of 40
    var number3 = 70;
    // variable number3 with assigned value of 70
    var number4 = 34;
    // variable number4 with assigned value of 34
    var total = number1 + number2 + number3 + number4;
    // variable total assigned the result of adding the four variables
    
    console.log("The total is: " + total);
    //printing the total value to the console
    }
    addFourNumbers();
    // calling the function "addFourNumbers" which adds the four variables

function addFourNumberWithParameters(numberone, numbertwo, numberthree, numberfour){
    //function with four parameters to add four numbers

   var result = numberone + numbertwo + numberthree + numberfour;
    // variable result assigned the sum of the four variables
    
    console.log("The result is: " +result);
    //printing the total value to the console
    }
    addFourNumberWithParameters(7, 8, 9, 90);
    // calling the function "addFourNumberWithParameters" which adds the four parameters passed

function printOddNumbers(){
    //function to print odd numbers between 50 and 100
    for (numberone = 50; numberone <= 100; numberone++){
    // for loop containing variable numberone with a declaration, condition and increment statements
        if (numberone%2 != 0){
        // if statement wit a condition for outputting odd numbers
        console.log(numberone);
        // printing the odd numbers to the console
        }
    }
    }
    printOddNumbers();
    // calling the function "printOddNumbers" which prints odd numbers between 50 and 100
