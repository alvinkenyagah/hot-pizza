//smooth scroll into view
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//calculate cost of order

var toppings = getElementById("topping").value;
var crusts = getElementById("crusts").value;
var sizes = getElementById("sizes").value;
var delivery = getElementById("delivery").value;
var npizzas = parseFloat(getElementById("npizzs").value);

function myFunction() {
  alert("Confirmed Your order:  ");
}
