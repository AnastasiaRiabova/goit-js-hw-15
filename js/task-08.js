const formRef = document.querySelector(".login-form");

const handleFormSubmit = (e) => {
    e.preventDefault();

    const { email, password } = e.target.elements;

    if (!email.value.trim() || !password.value.trim()) {
        alert("All fields have to be filled!");
        return;
    }

    const resultObject = { email: email.value, password: password.value };
    console.log(resultObject);

    e.target.reset();
}

formRef.addEventListener("submit", handleFormSubmit);