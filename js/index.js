function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("flower");
  // Get the output text
  var text = document.getElementById("number-label");
  var secondoption = document.getElementById("if-bouquet");
  var rose = document.getElementById("flower1");
  var tulip = document.getElementById("flower2");
  var lily = document.getElementById("flower3");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    secondoption.style.display = "none";
    rose.style.display = "block";
    tulip.style.display = "block"; lily.style.display = "block";

  } else {
    text.style.display = "none";
    secondoption.style.display = "block";
    rose.style.display = "none";
    tulip.style.display = "none"; lily.style.display = "none";

  }
}
function myFunction2() {
  // Get the checkbox
  var checkBox = document.getElementById("bouquet");
  // Get the output text
  var text = document.getElementById("do-this");
  var secondoption = document.getElementById("if-flower");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
    secondoption.style.display = "none";
  } else {
    text.style.display = "none";
    secondoption.style.display = "block";
  }
}