let input = document.querySelector(".input");
// let del = document.querySelector(".delete");
let numbers = document.querySelector(".num");
let amallar = document.querySelector(".amallar");
let equal = document.querySelector(".teng");
let btns = document.querySelectorAll("button");

input.innerHTML = 0;
console.log(btns);

for (i of btns) {
    i.addEventListener("click", (event) => {
        if (event.target.innerHTML === 'C') {
            input.innerHTML = '0';
        }
        else if (event.target.innerHTML === 'Del') {
            let val = input.innerHTML;
            val = val.split("");
            val.pop();
            input.innerHTML = val.join("");
            input.innerHTML == "" ? input.innerHTML = "0" : input.innerHTML
            val = "";
        }
        else if (event.target.innerHTML === "=") {
            console.log(input.innerHTML);
            console.log(eval(input.innerHTML));
            input.innerHTML = eval(input.innerHTML);
        }
        else if (event.target.innerHTML === "+") {
            input.innerHTML = eval(input.innerHTML) + "+";
        }
        else if (event.target.innerHTML === "-") {
            input.innerHTML = eval(input.innerHTML) + "-";
        }
        else if (event.target.innerHTML === "/") {
            input.innerHTML = eval(input.innerHTML) + "/";
        }
        else if (event.target.innerHTML === "*") {
            input.innerHTML = eval(input.innerHTML) + "*";
        }
        else if (event.target.innerHTML === "%") {
            input.innerHTML = eval(input.innerHTML) + "%";
        }
        else {
            input.innerHTML = input.innerHTML.split("")[0] == "0" ?
                input.innerHTML.split("").slice(1, input.innerHTML.split("").length).join("") : input.innerHTML
            input.textContent += event.target.innerHTML;
        }
    })
}
