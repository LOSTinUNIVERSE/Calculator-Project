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
console.log(numberContainer1);
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
        console.log(numberContainer1,numberContainer2,opContainer3);
}
// operators[1].textContent = '=='
// console.log(operators[1].textContent)



const clearBtn =document.getElementById('clear')
clearBtn.addEventListener("click", ()=>{
    numberContainer1 = ""
    numDisplay.textContent = ""
    tempContainer =''
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
