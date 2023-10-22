/* Function to reverse and display the input string */
function performStringReversal() {
  // Retrieve the string from the input area
  let providedString = document.getElementById("originalString").value;

  // Reverse the string
  let reversedString = "";
  for (let i = providedString.length - 1; i >= 0; i--) {
    reversedString += providedString[i];
  }

  // Display the reversed string
  document.getElementById(
    "reversedStringDisplay"
  ).innerText = `Reversed String: ${reversedString}`;
}
