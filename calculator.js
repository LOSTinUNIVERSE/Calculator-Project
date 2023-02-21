function add(a,b){
      numDisplay.textContent = a + b  
    }
function subtract(a,b){
    numDisplay.textContent = a - b
}
function multiply(a,b){
    numDisplay.textContent = a * b
}
function divide(a,b){
    numDisplay.textContent = a / b
}


const container = document.getElementById("container")

const numDisplay =document.getElementById("numDisplay")

const numbers = document.getElementsByClassName("numbers")

let numberContainer1 =""
let numberContainer2 =""
let opContainer3 =""

for (let i =0; i <=10; i++ ){
    numbers[i].addEventListener('click', filler)
    numbers[i].id = `number${i}`
    numbers[i].textContent = i
    if (i ==10){
        numbers[i].id ="dot"
        numbers[i].textContent ="."
    }
}

let tempContainer = ''
function filler(){
numberContainer1 += this.textContent
tempContainer += this.textContent 
numDisplay.textContent = tempContainer
}

const symbols = ["+", "-","*","/"]
const opSection = document.getElementById("opSection")
const operators = opSection.children
 let i = 0
 while (i < 4){
    operators[i].classList = "operators";
    operators[i].textContent =symbols[i];
    operators[i].addEventListener('click', operatorRefresher);
    i++
}
function operatorRefresher(){
        numberContainer2 = numberContainer1;
        numberContainer1 ='';
        opContainer3 = this.textContent
        tempContainer += this.textContent
        numDisplay.textContent += this.textContent
}
// operators[1].textContent = '=='
// console.log(operators[1].textContent)



const clearBtn =document.getElementById('clear')
clearBtn.addEventListener("click", ()=>{
    numberContainer1 = ""
    numDisplay.textContent = ""
    tempContainer =''
})
const btnEqual = document.getElementById("equal")
btnEqual.addEventListener("click", operate)
let string = "11"
function operate (){
    let changedToNumber1  = Number(numberContainer1) 
    let changedToNumber2  = Number(numberContainer2) 
    if (opContainer3 =="+"){
         add(changedToNumber2,changedToNumber1)
    }
    if (opContainer3 == "-"){
         console.log(subtract(changedToNumber2,changedToNumber1))
    }
    if (opContainer3 == "*"){
         console.log(multiply(changedToNumber2,changedToNumber1))
    }
    if (opContainer3 == "/"){
         console.log(divide(changedToNumber2,changedToNumber1))
    }
}
