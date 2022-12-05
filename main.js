const displayBox = document.querySelector(".displayBox");
const btns = document.querySelectorAll(".btn")
const calc = document.getElementById("calc");
const clearAll = document.getElementById("clearAll");
const clearLast = document.getElementById("clear");

let x;

btns.forEach(item => {
    item.addEventListener("click", print);
})
function print(event) {
    x = event.target.innerText;
    if(displayBox.value == 0) {
        return displayBox.value = x;
    }
    return displayBox.value += x;
}