// global
var userName;
var cartDisplay;

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

function cart() {
  this.pizzas = [],
  this.totalCost = 0;
};

cart.prototype.updateCheckoutTotal = function() {
  var checkoutTotal = 0;
  this.pizzas.forEach(function(pizza) {
    checkoutTotal += pizza.cost();
  });
  this.totalCost = checkoutTotal;
}


// front end

function makePizzaFromForm() {
  var size = $('#size option:selected').val();
  var crust = $('#crust option:selected').val();
  var toppings = $('input[name="topping"]:checked').map(function() {
    return $(this).val();
  }).get();
  return new pizza(size, crust, toppings);
}

function addToCart(pizza) {
  myCart.pizzas.push(pizza);
  myCart.updateCheckoutTotal();//update cart total
  $('#carttotal').text("$" + myCart.totalCost);
  var toppingsList = "";
  pizza.toppings.forEach(function(topping) {
    toppingsList += topping + " ";
  });
  if (pizza.toppings.length === 0)
    toppingsList += "just cheese";
  var cartDisplay = "<tr><td>1</td><td>" + pizza.size + "</td><td>" + pizza.crust + "</td><td>" + toppingsList + "</td></tr>";
  $('#cartitems').append(cartDisplay);
}

// userName = prompt('Welcome, valued customer! What is your name?');

var myCart = new cart();
var recentlyCreatedPizza;

$('#pizzaform').submit(function(event) {
  event.preventDefault();
  var recentlyCreatedPizza = makePizzaFromForm();
  addToCart(recentlyCreatedPizza);
});

$('#pizzaform').change(function() {
  var currentlyCreatingPizza = makePizzaFromForm();
  $('#estimatedcost').text(currentlyCreatingPizza.cost());
});
