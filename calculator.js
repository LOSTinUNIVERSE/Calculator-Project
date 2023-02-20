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
const calculator = document.createElement("div")
calculator.id = "calculator"
container.appendChild(calculator)
// numberSection
const numbersSection = document.createElement("div");
calculator.appendChild(numbersSection)
numbersSection.classList.add("numbers")
let i = 1 
while (i <=10) {
    const number = document.createElement("button")
    numbersSection.appendChild(number)
    number.textContent = i
    if(i == 10){
    number.textContent = 0
    }
i++ ;
}

// functions


// incorrect approach
// operator = add(n1,n2)
// operator = subtract(n1,n2)
// operator = multiply(n1,n2)
// operator = divide(n1,n2)
// return operator 
