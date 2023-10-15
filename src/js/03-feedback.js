import throttle from "lodash.throttle"; 
const form = document.querySelector(".feedback-form");

const pizza = document.querySelector("input");
const textarea = document.querySelector("textarea");

const state = localStorage.getItem("feedback-form-state");

if (state) {
    pizza.value = JSON.parse(state).email;
    textarea.value = JSON.parse(state).message;
}

const submitCallback = () => {
    console.log(pizza.value, textarea.value); 
    const info = {
        email: pizza.value,
        message: textarea.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(info));
}

form.addEventListener("input", throttle(submitCallback, 500));

form.addEventListener("submit", (event) => {
    localStorage.removeItem("feedback-form-state");
    console.log({
        email: pizza.value,
        message: textarea.value
    });
    form.reset();
    // pizza.value = "";
    // textarea.value = "";
    event.preventDefault();
})