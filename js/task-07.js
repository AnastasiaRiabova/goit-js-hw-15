const inputRangeRef = document.querySelector("#font-size-control");
const textFieldRef = document.querySelector("#text");

const initialSize = inputRangeRef.value;
textFieldRef.style.fontSize = `${initialSize}px`;
inputRangeRef.addEventListener("input", (e) => {
    const fontSize = e.target.value;
    textFieldRef.style.fontSize = `${fontSize}px`;
});