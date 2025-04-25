function add (num1,num2)
{
    return parseInt(num1) + parseInt(num2);;
}
function subtract(num1, num2)
{
    return parseInt(num1)-parseInt(num2);
}
function multiply (num1, num2)
{
    return parseInt(num1) * parseInt(num2);
}
function divide (num1, num2)
{
    return parseInt(num1)/parseInt(num2);
}
function operate (num1, operator, num2)
{
    let res;
    switch(operator)
    {
        case '+':
            res = add(num1, num2);
            break;
        case '-':
            res = subtract(num1,num2);
            break;
        case 'x':
            res = multiply(num1,num2);
            break;
        case '/':
            res = divide(num1,num2);
            break;
    }
    return res;
}
let num1,num2,operator,oResp;
num1="";
num2="";
operator="";
oResp="";
let justCalculated = false;
//tratar entrada de numeros y visualizacion en pantalla
let digitList = document.querySelectorAll(".number");
digitList.forEach(element => {
    element.addEventListener('click',(event)=>{
        let target = event.target;
        if (operator=="" && !justCalculated)
        {
            if (num1!="")
            {
                num1 = num1 + target.textContent;
            }
            else {
                num1 = target.textContent;
            }
        }
        else{
            if (num2!="")
            {
                num2 = num2 + target.textContent;
            }
            else {
                num2 = target.textContent;
            }
        }
        let screen = document.querySelector(".screen");
        if (operator==""){
            screen.textContent = num1;
            console.log(num1);
        }
        else {
            screen.textContent = num2;
            console.log(num2);
        }
    })
});
//tratar operador
let chosenOperator = document.querySelectorAll(".operator");
chosenOperator.forEach(element => {
    element.addEventListener('click',(event)=>{
        let target = event.target;
        operator = target.textContent;
        num1 = parseInt(num1)+0;
    })
})
//tratar =
let equals = document.querySelector(".equal");
equals.addEventListener('click',(event)=>{
    num2 = parseInt(num2)+0;
    oResp = operate(num1,operator,num2);
    justCalculated = true;
    num1 = "" + oResp;
    num2 = "";
    let screen = document.querySelector(".screen");
    screen.textContent = oResp;
    console.log("Num1: "+num1);
    console.log("Num2: "+num2);
    console.log(oResp);
})
//tratar botton clear
let clear = document.querySelector(".clear");
clear.addEventListener('click',(event)=>{
    num1="";
    num2="";
    operator="";
    oResp="";
    let screen = document.querySelector(".screen");
    screen.textContent="0";
    justCalculated=false;
})
