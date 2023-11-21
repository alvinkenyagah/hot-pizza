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



// function order(){

//   let toppings = document.getElementById("topping");
//   let crusts = document.getElementById("crusts");
//   let sizes = document.getElementById("sizes");
//   let delivery = document.getElementById("delivery");
//   let npizzas = document.querySelector('#npizza').value;

//   let cost = document.querySelector('#cost');


// let checkout = npizzas*(parseInt(delivery.value)+parseInt(sizes.value)+ parseInt(crusts.value)+ parseInt(toppings.value))

// console.log(checkout)





// let ordered= `Total cost: ${checkout} KSH`

// cost.innerHTML = ordered


// }



function order() {
  let toppings = document.getElementById("topping");
  let crusts = document.getElementById("crusts");
  let sizes = document.getElementById("sizes");
  let delivery = document.getElementById("delivery");
  let npizzas = document.querySelector('#npizza').value;

  let cost = document.querySelector('#cost');

  let checkout = npizzas * (parseInt(delivery.value) + parseInt(sizes.value) + parseInt(crusts.value) + parseInt(toppings.value));

  // Display SweetAlert prompt for phone number
  Swal.fire({
    title: 'Enter your phone number',
    input: 'text',
    showCancelButton: true,
    confirmButtonText: 'Submit',
    cancelButtonText: 'Cancel',
    inputValidator: (value) => {
      if (!value) {
        return 'Please enter your phone number';
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      const phoneNumber = result.value;

      // Display SweetAlert with random order number
      const orderNumber = Math.floor(Math.random() * 1000000) + 1;
      Swal.fire({
        title: 'Order Placed!',
        text: `Total cost: ${checkout} KSH\nOrder Number: ${orderNumber}`,
        icon: 'success'
      });


    }
  });
}
