// nav bar function
function myFunction() {
  let x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// Mobile tap interaction
document.addEventListener('DOMContentLoaded', function() {
  const tapIndicator = document.querySelector('.tap-indicator');
  const titleElements = {
    name: {
      element: document.getElementById('name'),
      originalText: 'Juan Martinez',
      hoverText: 'About'
    },
    frontEnd: {
      element: document.getElementById('front-end'),
      originalText: 'Front-End',
      hoverText: 'Back-End'
    },
    web: {
      element: document.getElementById('web'),
      originalText: 'Web',
      hoverText: 'Application'
    },
    developer: {
      element: document.getElementById('developer'),
      originalText: 'Developer',
      hoverText: 'Developer'
    }
  };

  let isShowingHoverText = false;

  // Show/hide tap indicator based on screen size
  function updateTapIndicator() {
    if (window.innerWidth < 1024) {
      tapIndicator.style.display = 'block';
    } else {
      tapIndicator.style.display = 'none';
    }
  }

  // Toggle between original and hover text
  function toggleTexts() {
    isShowingHoverText = !isShowingHoverText;
    
    Object.values(titleElements).forEach(({ element, originalText, hoverText }) => {
      element.textContent = isShowingHoverText ? hoverText : originalText;
      
      // Add a subtle scale animation
      element.style.transform = 'scale(0.95)';
      setTimeout(() => {
        element.style.transform = 'scale(1)';
      }, 200);
    });
  }

  // Add tap functionality
  document.querySelector('.content-wrapper').addEventListener('click', toggleTexts);

  // Update tap indicator on resize
  window.addEventListener('resize', updateTapIndicator);

  // Initial check
  updateTapIndicator();
});

// Calculator function for homework project
function calculate() {
  let num1 = document.getElementById("value1").value;
  let num2 = document.getElementById("value2").value;
  let operator = document.getElementById("operator").value;
  let result;

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
