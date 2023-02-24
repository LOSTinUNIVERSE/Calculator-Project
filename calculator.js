function add(a,b){
    numberContainer2 = a + b
    numberContainer2 = Math.round((numberContainer2 + Number.EPSILON)*100) /100  
    numDisplay.textContent = numberContainer2
    }
function subtract(a,b){
    numberContainer2 = a - b  
    numberContainer2 = Math.round((numberContainer2 + Number.EPSILON)*100) /100  
    numDisplay.textContent = numberContainer2
}
function multiply(a,b){
    numberContainer2 = a * b  
    numberContainer2 = Math.round((numberContainer2 + Number.EPSILON)*100) /100  
    numDisplay.textContent = numberContainer2
}
function divide(a,b){
    numberContainer2 = a / b  
    numberContainer2 = Math.round((numberContainer2 + Number.EPSILON)*100) /100  
    numDisplay.textContent = numberContainer2
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
        numbers[i].addEventListener('click',dotSpecial)
    }
}
function dotSpecial(){
   this.disabled =true
}

let tempContainer = ''
 
// ! filler function is here

function filler(){
    numberContainer1 += this.textContent

    numDisplay.textContent = numberContainer1
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
    if (numberContainer2 ==''){
        numberContainer2 = numberContainer1;
        numberContainer1='';
    }
    if (numberContainer2 !=='' && numberContainer1 !==''){
        operate()
    }
    opContainer3= this.textContent

}


const clearBtn =document.getElementById('clear')
clearBtn.addEventListener("click", clear)
function clear (){
    numberContainer1= ""
    numDisplay.textContent = ""
    numberContainer2 =""
    opContainer3 = ''
    document.getElementById('dot').disabled =false
}
const btnEqual = document.getElementById("equal")
btnEqual.addEventListener("click", operate)

function operate (){
    if(numberContainer1 == 0 && opContainer3 =="/"){
        alert("Sorry, you can't divide by 0!!!");
     return   clear()
    }
    if(numberContainer1 =='' || numberContainer2 == "" || opContainer3 == ''){
       return alert('NOT ENTERED NUMBER !!!');
    }
    let changedToNumber1  = Number(numberContainer1) 
    let changedToNumber2  = Number(numberContainer2) 
    
    if (opContainer3 =="+"){
         add(changedToNumber2,changedToNumber1)
    }
    if (opContainer3 == "-"){
         subtract(changedToNumber2,changedToNumber1)
    }
    if (opContainer3 == "*"){
         multiply(changedToNumber2,changedToNumber1)
    }
    if (opContainer3 == "/"){
         divide(changedToNumber2,changedToNumber1)
    }
    // doubtful moment 
    numberContainer1 =''
}
// ! backspace
// function undo(){
//     numberContainer1 = numberContainer1.substring(1, numberContainer1.length -1)
    // numberContainer2.substring(1,2)
//     numDisplay.textContent=numDisplay.textContent.substring(1, numberContainer1.length -1)
// }
// const backSpace = document.getElementById('backSpace')   
// backSpace.addEventListener ("click", undo)
// const dot = document.getElementById("dot")