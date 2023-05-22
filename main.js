const gosp = document.querySelectorAll('[name="gosp"]');
const gosc = document.querySelectorAll("#gosc");
const dogrywka = document.querySelectorAll('[name="dogr"]');
const display = document.querySelector("#display");
const form = document.querySelector("form");
const dodatki = document.querySelectorAll('[name = "dod"]');
let message = "";

const newElementGosp = gosp.value;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  console.log(newElementGosp);
  console.log(gosc.value);
});
