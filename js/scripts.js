// global
var userName;

// bank end






// front end

userName = prompt('Welcome, valued customer! What is your name?');

$('#pizzaform').submit(function(event) {
  event.preventDefault();
  var size = $('#size option:selected').val();
  var topping = $('input[name="topping"]:checked').val();
  console.log(size);
  console.log(topping);
});
