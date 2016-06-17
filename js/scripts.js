// global
var userName;

// back end

function pizza(size, crust, toppings) {
  this.size = size;
  this.crust = crust;
  this.toppings = toppings;
}

var sizeCosts = {"personal": 7, "small": 8, "medium": 10, "large": 12, "extra large": 13, "Woah.": 15};
var crustCosts = {"traditional": 0, "New York": 0.5, "Sicilian": 1};
var toppingCosts = {
  "bacon": 1.5,
  "bleu cheese crumble": 1,
  "broccoli": 0.5,
  "four cheese blend": 0.5,
  "hummus": 1.5,
  "pepperoni": 1,
  "pineapple": 0.5,
  "sweet chili sauce": 0.5
};

pizza.prototype.cost = function() {
  var cost = 0;
  cost += sizeCosts[this.size];
  cost += crustCosts[this.crust];
  this.toppings.forEach(function(topping) {
    cost += toppingCosts[topping];
  });
  return cost;
}




// front end

function makePizzaFromForm(variableName) {
  var size = $('#size option:selected').val();
  var crust = $('#crust option:selected').val();
  var toppings = $('input[name="topping"]:checked').map(function() {
    return $(this).val();
  }).get();
  return new pizza(size, crust, toppings);
}

// userName = prompt('Welcome, valued customer! What is your name?');

$('#pizzaform').submit(function(event) {
  event.preventDefault();
  var recentlyCreatedPizza = makePizzaFromForm();
  console.log(recentlyCreatedPizza);
});

$('#pizzaform').change(function() {
  var currentlyCreatingPizza = makePizzaFromForm();
  $('#estimatedcost').text(currentlyCreatingPizza.cost());
});
