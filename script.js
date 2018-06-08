//set variables 
var lastNumber  = null;
var currentNumber = null;
var operator = null;
var results = null;
var decimalSet = false;

function displayOutput(myNewValue){
  document.getElementsByClassName("output")[0].setAttribute("value", myNewValue);
}

function doMath(xin, yin, operator){
  switch (operator) {
        case "divide":
            return xin / yin;
            break;
        case "multiply":
            return xin * yin;
            break;
        case "add":
            return +xin + +yin;
            break;
        case "subtract":
            return xin - yin;
            break;
  }
}

function calculatorLogic(xin){
  console.log("logic called");
  if(lastNumber != null && currentNumber != null && operator != null){
    //if all values have been set
    //example: 3 x 3 / ....
    results = doMath(lastNumber, currentNumber, operator);
    operator = xin;
    lastNumber = results;
    currentNumber = null;
    displayOutput(results);
  } else
  if(lastNumber == null && currentNumber != null && operator == null){
      //if only the currentNumber is set, assume equation still being built
      //example: 3 / ....
      operator = xin;
      lastNumber = currentNumber;
      currentNumber = null;
      displayOutput(lastNumber);
  } else
  if(lastNumber == null && currentNumber == null && operator == null){
    //If no values have been set, assume user error
    //example / ....
    displayOutput("0");
  } else {
    console.log("Unexpected error occured: check switch logic at buttonClick().multiply");
  }
}

function buttonClick(xin) {
  let myValue = xin.getAttribute("value");

  //if operator has been set....
  switch (myValue){
        case "all-clear":
            //button changes between AC and C, and value for button changes between all-clear and clear
            //Once a character is entered, AC changes to C. If C is clicked, clear is called on switch and
            //changes value to all-clear.
            //if AC clicked again, all-clear is called on switch, and lastNumber and operator are reset
            currentNumber = null;
            lastNumber = null;
            operator = null;
            results = null;
            decimalSet = false;
            //document.getElementsByClassName("clear")[0].innerHTML = "AC";
            displayOutput("0");
            break;

        case "clear":
            //button changes between AC and C, and value for button changes between all-clear and clear
            //Once a character is entered, AC changes to C. If C is clicked, clear is called on switch and
            //changes value to all-clear.
            //if AC clicked again, all-clear is called on switch, and lastNumber and operator are reset
            currentNumber = null;
            results = null;
            decimalSet = false;
            document.getElementsByClassName("clear")[0].innerHTML = "AC";
            document.getElementsByClassName("clear")[0].setAttribute("value", "all-clear");
            displayOutput("0");
            break;

        case "percent":
            //results take priority over currentNumber, since currentNumber is not always the last outputed number
            if(results != null){
              displayOutput(results /= 100);
            } else
            if(currentNumber != null){
              displayOutput(currentNumber /= 100);
            }
            break;

        case "opposite":
            //results take priority over currentNumber, since currentNumber is not always the last outputed number
            if(results != null){
              displayOutput(results *= -1);
            } else
            if(currentNumber != null){
              displayOutput(currentNumber *= -1);
            }
            break;

        case "divide":
            console.log("Divide found on switch");
            calculatorLogic(myValue);
            break;

        case "multiply":
            console.log("multiply found on switch");
            calculatorLogic(myValue);
            break;

        case "subtract":
            console.log("Subtract found on switch");
            calculatorLogic(myValue);
            break;

        case "add":
            console.log("Add found on switch");
            calculatorLogic(myValue);
            break;

        case "period":
            document.getElementsByClassName("clear")[0].innerHTML = "C";
            if(decimalSet == false){
                (currentNumber == null) ? currentNumber = 0 + "." : currentNumber += ".";
                decimalSet = true;
            } else {
              console.log("Number is already a decimal");
            }
            displayOutput(currentNumber);
            break;

        case "equals":
            console.log("logic called");
            if(lastNumber != null && currentNumber != null && operator != null){
              //if all values have been set
              //example: 3 x 3 / ....
              results = doMath(lastNumber, currentNumber, operator);
              //operator and currentNumber are NOT reset
              //user can hit EQUALS multiple times to perform same math with
              //updated results
              lastNumber = results;
              displayOutput(results);
            } else
            if(lastNumber == null && currentNumber != null && operator == null){
                //if only the currentNumber is set, assume equation still being built
                //example: 3 / ....
                operator = xin;
                lastNumber = currentNumber;
                currentNumber = null;
                displayOutput(lastNumber);
            } else
            if(lastNumber == null && currentNumber == null && operator == null){
              //If no values have been set, assume user error
              //example / ....
              displayOutput("0");
            } else {
              console.log("Unexpected error occured: check switch logic at buttonClick().multiply");
            }
            break;

        default:
            //button changes between AC and C, and value for button changes between all-clear and clear
            //Once a character is entered, AC changes to C. If C is clicked, clear is called on switch and
            //changes value to all-clear.
            //if AC clicked again, all-clear is called on switch, and lastNumber and operator are reset
            document.getElementsByClassName("clear")[0].innerHTML = "C";
            document.getElementsByClassName("clear")[0].setAttribute("value", "clear");
            (currentNumber == null) ? currentNumber = myValue : currentNumber += myValue;
            displayOutput(currentNumber);
            break;


  } //end switch
} //end function
