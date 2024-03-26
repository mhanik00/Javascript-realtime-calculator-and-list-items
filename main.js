// !js text printer
// !js unordered list
// !js ordered list
// !js calculator


// *javascript text printer
const inPut = document.getElementById("input");

const prInt = document.getElementById("print");

prInt.addEventListener("click", function () {
    console.log(inPut.value);

    const outPut = document.getElementById("output");
    outPut.innerText = inPut.value;

})
// ********************************


// *javascript unordered list
const uList = document.getElementById("u-list");

const addList = document.getElementById("list");

const ul = document.getElementById("ul");

addList.addEventListener("click", function () {
    console.log(uList.value);
    const li = document.createElement("li");
    li.innerHTML = uList.value;

    ul.appendChild(li);
})
// *********************************

// *javascript ordered list
const oList = document.getElementById("o-list");

const addOList = document.getElementById("ol-list");

const ol = document.getElementById("ol");

addOList.addEventListener("click", function () {
    console.log(oList.value);
    const li = document.createElement("li");
    li.innerHTML = oList.value;
    ol.appendChild(li);
})
// *********************************

// *javascript calculator
const cal = document.getElementById("cal");

const num1 = document.getElementById("num1");

const num2 = document.getElementById("num2");

const res = document.getElementById("res");

cal.addEventListener("click", function () {

    const numberOne = Number(num1.value);
    const numberTwo = Number(num2.value);

    const result = numberOne + numberTwo;

    res.innerText = result;
});
// ***********************************