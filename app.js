let btnTranslator = document.querySelector("#btn-translate");
let txtInput = document.querySelector("#txt-input");
// console.log(btnTranslator);
function clickEventHandler(){
    console.log("Input is", txtInput.value)
    console.log("Clicked!");
}
btnTranslator.addEventListener("click", clickEventHandler)

