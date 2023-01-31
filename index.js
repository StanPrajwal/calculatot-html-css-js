const inputEl = document.getElementById("input")


function getInput(value) {
   
    inputEl.value += value
}
function getResult(){
    inputEl.value = eval(inputEl.value)
}
function clearField(){
    inputEl.value = ""
}