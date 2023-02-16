
      function myFunction() {
        document.getElementById("demo").innerHTML = "Hello Dear Visitor!</br> We are happy that you've chosen our website to learn programming languages. We're sure you'll become one of the best programmers in your country. Good luck to you!";
      }
//makes random boxes
      var x = document.getElementById("theBoxes");
x.addEventListener("click", myFunction)
function myFunction() {
  var box = document.createElement('div');
  box.classList.add('myDiv');
  document.body.appendChild(box); 
}