import throttle from "lodash.throttle"; 
const form = document.querySelector(".feedback-form");

const input = document.querySelector("input");
const textarea = document.querySelector("textarea");

const state = localStorage.getItem("feedback-form-state");

if (state) {
    input.value = JSON.parse(state).email;
    textarea.value = JSON.parse(state).message;
}

const submitCallback = () => {
    console.log(input.value, textarea.value); 
    const info = {
        email: input.value,
        message: textarea.value
    }
    localStorage.setItem("feedback-form-state", JSON.stringify(info));
}

form.addEventListener("input", throttle(submitCallback, 500));

form.addEventListener("submit", (event) => {
    localStorage.removeItem("feedback-form-state");
    console.log({
        email: input.value,
        message: textarea.value
    });
    form.reset();
    // input.value = "";
    // textarea.value = "";
    event.preventDefault();
})