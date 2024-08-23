let display = document.getElementById("display")
let btnallClear = document.getElementById("btnallClear")
let btnDelete = document.getElementById("btnDelete")
let btnDivision = document.getElementById("btnDivision")
let btnOne = document.getElementById("btnOne")
let btnTwo = document.getElementById("btnTwo")
let btnThree = document.getElementById("btnThree")
let btnMultiply = document.getElementById("btnMultiply")
let btnFour = document.getElementById("btnFour")
let btnFive = document.getElementById("btnFive")
let btnSix = document.getElementById("btnSix")
let btnAdd = document.getElementById("btnAdd")
let btnSeven = document.getElementById("btnSeven")
let btnEight = document.getElementById("btnEight")
let btnNine = document.getElementById("btnNine")
let btnSubtract = document.getElementById("btnSubtract")
let btnDecimal = document.getElementById("btnDecimal")
let btnZero = document.getElementById("btnZero")
let btnCalculate = document.getElementById("btnCalculate")

// Buttons For DISPLAYING Numbers
btnOne.addEventListener("click", function () {
    display.value = display.value + btnOne.value
})


btnTwo.addEventListener("click", function () {
    display.value = display.value + btnTwo.value
})


btnThree.addEventListener("click", function () {
    display.value = display.value + btnThree.value
})


btnFour.addEventListener("click", function () {
    display.value = display.value + btnFour.value
})


btnFive.addEventListener("click", function () {
    display.value = display.value + btnFive.value
})


btnSix.addEventListener("click", function () {
    display.value = display.value + btnSix.value
})


btnSeven.addEventListener("click", function () {
    display.value = display.value + btnSeven.value
})


btnEight.addEventListener("click", function () {
    display.value = display.value + btnEight.value
})


btnNine.addEventListener("click", function () {
    display.value = display.value + btnNine.value
})


btnZero.addEventListener("click", function () {
    display.value = display.value + btnZero.value
})

// Additional button
btnAdd.addEventListener("click", function() {
    display.value = display.value + btnAdd.value
})
// SUBTRACTION BUTTON
btnSubtract.addEventListener("click", function() {
    display.value = display.value + btnSubtract.value
})
// Division button
btnDivision.addEventListener("click", function() {
    display.value = display.value + btnDivision.value
})
// Multiplication button
btnMultiply.addEventListener("click", function() {
    display.value = display.value + btnMultiply.value
}) 
// Decimal button
btnDecimal.addEventListener("click", function() {
    display.value = display.value + btnDecimal.value
})
// Delete button
btnDelete.addEventListener("click", function() {
    display.value = display.value.substring(0, display.value.length - 1)
})



// Clear Display
btnallClear.addEventListener("click", function () {
    display.value = ""
})

// Calculate Buttons
btnCalculate.addEventListener("click", function(){
    display.value = eval(display.value)
})





