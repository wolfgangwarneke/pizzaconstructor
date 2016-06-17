// global
var userName;

function pizza(size, toppings, crust) {
  this.size = size;
  this.toppings = toppings;
  this.crust = crust;
}

// bank end






// front end

userName = prompt('Welcome, valued customer! What is your name?');

$('#pizzaform').submit(function(event) {
  event.preventDefault();
  var size = $('#size option:selected').val();
  var crust = $('#crust option:selected').val();
  var toppings = $('input[name="topping"]:checked').map(function() {
    return $(this).val();
  }).get();
  console.log(size);
  console.log(toppings);
  console.log(crust);
});
