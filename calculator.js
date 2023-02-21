function add(a,b){
    return  a + b
}
function subtract(a,b){
    return  a - b
}
function multiply(a,b){
    return  a * b
}
function divide(a,b){
    return  a / b
}
function operate (operator,n1,n2){
    if (operator == add){
        return add(n1,n2)
    }
    if (operator == subtract){
        return subtract(n1,n2)
    }
    if (operator == multiply){
        return multiply(n1,n2)
    }
    if (operator == divide){
        return divide(n1,n2)
    }
}
console.log(operate(subtract,3,4))
const container = document.getElementById("container")
const numDisplay =document.getElementById("numDisplay")
const numbers = document.getElementsByClassName("numbers")
let numberContainer = ""
for (let i =0; i <=10; i++ ){
    numbers[i].addEventListener('click', filler)
    numbers[i].id = `number${i}`
    numbers[i].textContent = i
    if (i ==10){
        numbers[i].id ="dot"
        numbers[i].textContent ="."
    }
}
function filler(){
numberContainer += this.textContent
console.log(numberContainer);
numDisplay.textContent = numberContainer
}

const symbols = ["+", "-","*","/"]
const opSection = document.getElementById("opSection")
const operators = opSection.children
 let i = 0
 while (i < 4){
    operators[i].classList = "operators";
    operators[i].textContent =symbols[i];
    operators[i].addEventListener('click', filler)
    i++
}
for (let item of operators) {
    console.log(item.textContent);
}

const clearBtn =document.getElementById('clear')
clearBtn.addEventListener("click", ()=>{
    numberContainer = ""
    numDisplay.textContent = ""
})







// previous approach
// const calculator = document.createElement("div")
// calculator.id = "calculator"
// container.appendChild(calculator)
// numberSection
// const numbersSection = document.createElement("div");
// calculator.appendChild(numbersSection)
// numbersSection.classList.add("numbers")
// let i = 1 
// while (i <=10) {
    // const number = document.createElement("button")
    // numbersSection.appendChild(number)
    // number.textContent = i
    // if(i == 10){
    // number.textContent = 0
    // }
// i++ ;
// }
// calculator.appendChild(opSection)
// 
// functions
// const opSection = document.createElement("div")
// calculator.appendChild(opSection)
// opSection.id ="opSection"
// for (let i= 1; i <=4; i++){
    // const operator = document.createElement("button")
    // operator.textContent=`operator${i}`
    // opSection.appendChild(operator)
    // operator.id = `operator${i}`
// }
// incorrect approach
// operator = add(n1,n2)
// operator = subtract(n1,n2)
// operator = multiply(n1,n2)
// operator = divide(n1,n2)
// return operator 
