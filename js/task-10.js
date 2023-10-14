import { getRandomHexColor } from './shared.js'

const [inputRef, createBtnRef, destroyBtnRef] = document.querySelector("#controls").children;
const boxContainer = document.querySelector("#boxes");

const initialBoxSize = 30;
const step = 10;

const createBoxes = (amount) => {
  amount = Number(amount);

  const { min, max } = inputRef;
  if (amount < min || amount > max) {
    console.error(`Amount must be between ${min} and ${max}`);
    return;
  }

  const boxes = Array.from({ length: amount }).map((val, index) => {
    const box = document.createElement("div");
    const size = index * step + initialBoxSize;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    return box;
  });

  boxContainer.append(...boxes);
};

const handleDestroyBoxes = () => {
  boxContainer.innerHTML = "";
  inputRef.value = "";
};

const handleCreateBoxes = () => {
  const amount = inputRef.value;
  createBoxes(amount);
}

createBtnRef.addEventListener("click", handleCreateBoxes);
destroyBtnRef.addEventListener("click", handleDestroyBoxes);