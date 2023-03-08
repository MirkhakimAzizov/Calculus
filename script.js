"use strice";
let value = document.querySelector(".wrapper__value");
let elBtn = document.querySelectorAll(".wrapper__btn");
console.log(elBtn);

let numberOne = "";
let numberTwo = "";
let number = "";

elBtn[12].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "1";
        numberTwo = numberTwo + "1";
        number = number + "1";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[13].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "2";
        numberTwo = numberTwo + "2";
        number = number + "2";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[14].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "3";
        numberTwo = numberTwo + "3";
        number = number + "3";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[8].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "4";
        numberTwo = numberTwo + "4";
        number = number + "4";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[9].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "5";
        numberTwo = numberTwo + "5";
        number = number + "5";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[10].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "6";
        numberTwo = numberTwo + "6";
        number = number + "6";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }

});

elBtn[4].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "7";
        numberTwo = numberTwo + "7";
        number = number + "7";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[5].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "8";
        numberTwo = numberTwo + "8";
        number = number + "8";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[6].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "9";
        numberTwo = numberTwo + "9";
        number = number + "9";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[16].addEventListener("click", (evt) => {
    if (numberOne.length < 15) {
        numberOne = numberOne + "0";
        numberTwo = numberTwo + "0";
        number = number + "0";
        value.innerHTML = number;
    } else {
        error = "the maximum number has been reached";
    }
});

elBtn[17].addEventListener("click", (evt) => {
    if (!numberOne.includes(".")) {
        if (numberOne.length < 15) {
            numberOne = numberOne + ".";
            numberTwo = numberTwo + ".";
            number = number + ".";
            value.innerHTML = number;
        } else {
            error = "the maximum number has been reached";
        }
    }
});

let numOne;
let numTwo;
let math;
let resalt;

elBtn[7].addEventListener("click", (evt) => {
    if (numberOne != "") {
        numOne = numberOne;
    }
    numberOne = "";
    number = "";
    numberTwo = "";
    math = "";
    math = "/";
    value.innerHTML = "";
});

elBtn[11].addEventListener("click", (evt) => {
    if (numberOne != "") {
        numOne = numberOne;
    }
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "*";
    number = "";
    value.innerHTML = "";
});

elBtn[15].addEventListener("click", (evt) => {
    if (numberOne != "") {
        numOne = numberOne;
    }
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "-";
    number = "";
    value.innerHTML = "";
});

elBtn[19].addEventListener("click", (evt) => {
    if (numberOne != "") {
        numOne = numberOne;
    }
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "+";
    number = "";
    value.innerHTML = "";
});

elBtn[0].addEventListener("click", (evt) => {
    if (numberOne != "") {
        numOne = numberOne;
    }
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "pow";
    number = "";
    value.innerHTML = "";
});

elBtn[1].addEventListener("click", (evt) => {
    if (numberOne != "") {
        numOne = numberOne;
    }
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "sqrt";
    number = "";
    value.innerHTML = "";
});

elBtn[2].addEventListener("click", (evt) => {
    if (numberOne != "") {
        numOne = numberOne;
    }
    numberOne = "";
    numberTwo = "";
    math = "";
    math = "%";
    number = "";
    value.innerHTML = `${numOne}%`;
});

elBtn[3].addEventListener("click", (evt) => {
    numberOne = "";
    numberTwo = "";
    math = "";
    number = "";
    value.innerHTML = "";
});
let i = 0;
elBtn[18].addEventListener("click", (evt) => {
    numTwo = numberTwo;
    numberOne = "";
    numberTwo = "";
    if (numOne != "" && numTwo != "") {
        if (math === "/") {
            resalt = Number(numOne) / Number(numTwo);
        } else if (math === "*") {
            resalt = Number(numOne) * Number(numTwo);
        } else if (math === "-") {
            resalt = Number(numOne) - Number(numTwo);
        } else if (math === "+") {
            resalt = Number(numOne) + Number(numTwo);
        } else if (math === "pow") {
            resalt = Math.pow(Number(numOne), Number(numTwo));
        }
    } else if (math === "sqrt") {
        resalt = Math.sqrt(Number(numOne));
    } else if (math === "%") {
        resalt = numOne * 100;
    } else {
        resalt = "Invalid format used";
    }
    numberOne = resalt;
    value.innerHTML = resalt;
});