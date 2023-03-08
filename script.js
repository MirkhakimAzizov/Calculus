"use strice";
let value = document.querySelector(".wrapper__value");
let elBtn = document.querySelectorAll(".wrapper__btn");
console.log(elBtn);

let numberOne = "";
let numberTwo = "";

elBtn[12].addEventListener("click", (evt) => {
    numberOne = numberOne + "1";
    numberTwo = numberTwo + "1";
    value.innerHTML = numberOne;
});

elBtn[13].addEventListener("click", (evt) => {
    numberOne = numberOne + "2";
    numberTwo = numberTwo + "2";
    value.innerHTML = numberOne;
});

elBtn[14].addEventListener("click", (evt) => {
    numberOne = numberOne + "3";
    numberTwo = numberTwo + "3";
    value.innerHTML = numberOne;
});

elBtn[8].addEventListener("click", (evt) => {
    numberOne = numberOne + "4";
    numberTwo = numberTwo + "4";
    value.innerHTML = numberOne;
});

elBtn[9].addEventListener("click", (evt) => {
    numberOne = numberOne + "5";
    numberTwo = numberTwo + "5";
    value.innerHTML = numberOne;
});

elBtn[10].addEventListener("click", (evt) => {
    numberOne = numberOne + "6";
    numberTwo = numberTwo + "6";
    value.innerHTML = numberOne;

});

elBtn[4].addEventListener("click", (evt) => {
    numberOne = numberOne + "7";
    numberTwo = numberTwo + "7";
    value.innerHTML = numberOne;
});

elBtn[5].addEventListener("click", (evt) => {
    numberOne = numberOne + "8";
    numberTwo = numberTwo + "8";
    value.innerHTML = numberOne;
});

elBtn[6].addEventListener("click", (evt) => {
    numberOne = numberOne + "9";
    numberTwo = numberTwo + "9";
    value.innerHTML = numberOne;
});

elBtn[16].addEventListener("click", (evt) => {
    numberOne = numberOne + "0";
    numberTwo = numberTwo + "0";
    value.innerHTML = numberOne;
});


let numOne;
let numTwo;
let math;
let resalt;

elBtn[7].addEventListener("click", (evt) => {
    numOne = numberOne;
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "/";
    value.innerHTML = "";
});

elBtn[11].addEventListener("click", (evt) => {
    numOne = numberOne;
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "*";
    value.innerHTML = "";
});

elBtn[15].addEventListener("click", (evt) => {
    numOne = numberOne;
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "-";
    value.innerHTML = "";
});

elBtn[19].addEventListener("click", (evt) => {
    numOne = numberOne;
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "+";
    value.innerHTML = "";
});

elBtn[3].addEventListener("click", (evt) => {
    numberOne = "";
    numberTwo = "";
    math = "";
    value.innerHTML = "";
});

elBtn[18].addEventListener("click", (evt) => {
    numTwo = numberTwo;
    numberOne = "";
    numberTwo = "";
    if (math === "/") {
        resalt = Number(numOne) / Number(numTwo);
    } else if (math === "*") {
        resalt = Number(numOne) * Number(numTwo);
    } else if (math === "-") {
        resalt = Number(numOne) - Number(numTwo);
    } else if (math === "+") {
        resalt = Number(numOne) + Number(numTwo);
    }
    console.log(resalt);
    value.innerHTML = resalt;
})