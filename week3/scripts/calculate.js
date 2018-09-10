function doIt() {
  // Variables for HTML element DOM references.
  var num1Ref, num2Ref, answerRef;

  // Variables declarations.
  var num1, num2, num3, answer;

  // Get references to DOM elements.
  num1Ref = document.getElementById("num1");
  num2Ref = document.getElementById("num2");
  num3Ref = document.getElementById("num3")
  answerRef = document.getElementById("answer");
  typeAnswer = document.getElementById('typeNumber');
  // Convert strings to numbers, e.g., "21" to 21.
  num1 = Number(num1Ref.value);
  num2 = Number(num2Ref.value);
  num3 = Number(num3Ref.value);

  // Perform addition operation then assignment operation
  answer = num1 + num2 + num3;

  // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
  answerRef.innerText = answer;

  if (answer >= 0) {
    // Value of answer is positive.
    // Set the class of the answer label to "positive".
    answerRef.className = "positive";
  } else {
    // Value of answer is not positive, i.e., negative.
    // Set the class of the answer label to "negative".
    answerRef.className = "negative";
  }

  if (answer % 2 === 0) {
    typeAnswer.className = "even-number";
    typeAnswer.innerText = "(even)"
  } else if (answer % 2 !== 0) {
    typeAnswer.className = "odd-number";
    typeAnswer.innerText = "(odd)"
  }
}

function subtraction(){
  // Variables for HTML element DOM references.
  let num1Ref, num2Ref, answerRef;

  // Variables declarations.
  let num1, num2, num3, answer;

  // Get references to DOM elements.
  num1Ref = document.getElementById("number1");
  num2Ref = document.getElementById("number2");
  num3Ref = document.getElementById("number3")
  answerRef = document.getElementById("answer2");
  typeAnswer = document.getElementById('typeNumber2');
  // Convert strings to numbers, e.g., "21" to 21.
  num1 = Number(num1Ref.value);
  num2 = Number(num2Ref.value);
  num3 = Number(num3Ref.value);

  // Perform addition operation then assignment operation
  answer = num1 - num2 - num3;

  // Update "answer" label DOM to show result using "innerText" property. innerText is a property of label tag.
  answerRef.innerText = answer;

  if (answer >= 0) {
    // Value of answer is positive.
    // Set the class of the answer label to "positive".
    answerRef.className = "positive";
  } else {
    // Value of answer is not positive, i.e., negative.
    // Set the class of the answer label to "negative".
    answerRef.className = "negative";
  }

  if (answer % 2 === 0) {
    typeAnswer.className = "even-number";
    typeAnswer.innerText = "(even)"
  } else if (answer % 2 !== 0) {
    typeAnswer.className = "odd-number";
    typeAnswer.innerText = "(odd)"
  }
}
