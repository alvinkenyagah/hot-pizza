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



function order(){

  let toppings = document.getElementById("topping");
  let crusts = document.getElementById("crusts");
  let sizes = document.getElementById("sizes");
  let delivery = document.getElementById("delivery");
  let npizzas = document.querySelector('#npizza').value;

  let cost = document.querySelector('#cost');


let checkout = npizzas*(parseInt(delivery.value)+parseInt(sizes.value)+ parseInt(crusts.value)+ parseInt(toppings.value))

console.log(checkout)


let ordered = document.createElement('h1')


ordered.textContent = "Your order will be delivered to your address"

cost.append(ordered)






}