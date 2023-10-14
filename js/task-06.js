const inputRef = document.querySelector("#validation-input");

const handleOnBlur = (e) => {

    const validLength = Number(inputRef.dataset.length);
    const value = e.target.value;

    if (value.length !== validLength) {
        inputRef.classList.remove("valid");
        inputRef.classList.add("invalid");
        return
    }

    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");

}
inputRef.addEventListener("blur", handleOnBlur);