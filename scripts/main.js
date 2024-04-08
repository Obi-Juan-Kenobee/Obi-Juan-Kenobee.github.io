// nav bar function
 // toggle between removing and adding the "responsive" class to topnav when the user clicks on the icon
 function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  // function to change text
  function changeText() {
    if (
      document.getElementById("touch").innerHTML == "Tap anywhere" &&
      document.getElementById("front-end").innerHTML == "Front-End" &&
      document.getElementById("web").innerHTML == "Web" &&
      document.getElementById("developer").innerHTML == "Developer" &&
      document.getElementById("name").innerHTML == "Juan Martinez"
    ) {
      document.getElementById("touch").innerHTML = "Thank you!";
      document.getElementById("front-end").innerHTML = "Back-End";
      document.getElementById("web").innerHTML = "Application";
      document.getElementById("developer").innerHTML = "Developer";
      document.getElementById("name").innerHTML = "About";
    } else {
      document.getElementById("touch").innerHTML = "Tap anywhere";
      document.getElementById("front-end").innerHTML = "Front-End";
      document.getElementById("web").innerHTML = "Web";
      document.getElementById("developer").innerHTML = "Developer";
      document.getElementById("name").innerHTML = "Juan Martinez";
    }
  }

  // Calculator function for howework project
function calculate() {
    var num1 = document.getElementById("value1").value;
    var num2 = document.getElementById("value2").value;
    var operator = document.getElementById("operator").value;
    var result;

    if (operator == "+") {
        result = parseInt(num1) + parseInt(num2);
    } else if (operator == "-") {
        result = parseInt(num1) - parseInt(num2);
    } else if (operator == "*") {
        result = parseInt(num1) * parseInt(num2);
    } else if (operator == "/") {
        result = parseInt(num1) / parseInt(num2);
    } else if (operator == "%") {
        result = parseInt(num1) % parseInt(num2);
    }
    document.getElementById("result").innerHTML = `${num1} ${operator} ${num2} = ${result}`; // displays result;
}
