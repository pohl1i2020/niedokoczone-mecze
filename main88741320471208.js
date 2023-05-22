const elementType = document.querySelector("#elementType");
const elementText = document.querySelector("#elementText");
const elementDate = document.querySelector("#elementDate");
const elementPadding = document.querySelector("#elementPadding");
const elementMargin = document.querySelector("#elementMargin");
const elementColor = document.querySelector("#elementColor");
const elementBGColor = document.querySelector("#elementBGColor");
const elementLetterSpacing = document.querySelector("#elementLetterSpacing");
const elementUpgrade = document.querySelectorAll('[name="textDecoration"]');
const elementAlign = document.querySelectorAll('[name="textAlign"]');
const submitButton = document.querySelector("#submit");
const display = document.querySelector("#display");
const form = document.querySelector("form");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  const newElement = document.createElement(elementType.value);
  newElement.innerHTML = `element ${elementType.value}, ${elementText.value}, data: ${elementDate.value}`;
  newElement.style.color = elementColor.value;
  newElement.style.backgroundColor = elementBGColor.value;
  newElement.style.letterSpacing = elementLetterSpacing.value;

  for (let i = 0; i < elementAlign.length; i++) {
    if (elementAlign[i].checked) {
      newElement.style.textAlign = elementAlign[i].value;
    }
  }
  let zmienna = "";
  for (let i = 0; i < elementUpgrade.length; i++) {
    if (elementUpgrade[i].checked) {
      zmienna += elementUpgrade[i].value + " ";
    }
  }
  newElement.style.textDecoration = zmienna;

  display.appendChild(newElement);
});
