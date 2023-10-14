import { getRandomHexColor } from './shared.js'

const buttonRef = document.querySelector(".widget button.change-color");
const textFieldRef = document.querySelector(".widget span.color");

const handleClick = () => {
  const color = getRandomHexColor();
  document.body.style.backgroundColor = color;
  textFieldRef.textContent = color;
}

buttonRef.addEventListener("click", handleClick);