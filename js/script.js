// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html

function makeReceiptClicked() {
  const choiceCKN = (document.getElementById("option-chicken").checked)
  const choiceGuac = (document.getElementById("checkbox-guac").checked)
  const choiceSourCream = (document.getElementById("checkbox-sourcream").checked)
  const choiceSalsa = (document.getElementById("checkbox-salsa").checked)
  let total = 24
  if (choiceCKN == true) {
    document.getElementById("answer").innerHTML = "Chicken Nachos $24.00 <br /><br />"
  } else {
    document.getElementById("answer").innerHTML = "Beef Nachos $24.00 <br /><br />"
  }
  if (choiceGuac == true) {
    document.getElementById("answer").innerHTML += "Guacamole $3.00 <br />"
    total += 3
  } 
  if (choiceSourCream == true) {
    document.getElementById("answer").innerHTML += "Sour Cream $2.00 <br />"
    total += 2
  } 
  if (choiceSalsa == true) {
    document.getElementById("answer").innerHTML += "Salsa $1.00 <br />"
    total += 1
  }
  document.getElementById("answer").innerHTML += "<br /> Subtotal = $" + total.toFixed(2)
  total *= 1.13
  document.getElementById("answer").innerHTML += "<br /><br /> HST = 13% <br /><br /> Total = $" + total.toFixed(2)
}
