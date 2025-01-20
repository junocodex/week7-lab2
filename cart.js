"use strict";

let tableBody = document.getElementById("table-body");
let showCartButton = document.getElementById("showCart");

const shoppingCart = [
  { id: 1, name: "Echo Dot", price: 29.99, quantity: 1 },
  { id: 2, name: "Fire TV Stick", price: 39.99, quantity: 2 },
  { id: 3, name: "Kindle Paperwhite", price: 119.99, quantity: 1 },
  { id: 4, name: "Echo Show 5", price: 89.99, quantity: 0 },
  { id: 5, name: "Fire Tablet", price: 49.99, quantity: 3 },
  { id: 6, name: "Ring Video Doorbell", price: 99.99, quantity: 1 },
];

showCartButton.addEventListener("click", () => {
  const rows = shoppingCart
    .map((item) => {
      return `
             <tr>
                  <td>${item.name}</td>
                  <td>${item.price}</td>
                  <td>${item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                </tr>
        `;
    })
    .join("");

  tableBody.innerHTML = rows;

  const totalCost = shoppingCart.reduce((runningTotal, item) => {
    return runningTotal + item.price * item.quantity;
  }, 0);

  document.getElementById("total").innerText = totalCost.toFixed(2);
});
