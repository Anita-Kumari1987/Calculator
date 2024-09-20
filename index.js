function buttonValue(currValue){
  let val = currValue.value;
  if(val === '+' || val === '-' || val === '/' || val === '*'){
    operatorVar = val;
  } else if(firstVar === ''){
    firstVar = val;
  }else{
    secondVar=val;
  }
  document.getElementById("enter_here").value = document.getElementById("enter_here").value+val;

}

let firstVar='';
let operatorVar='';
let secondVar='';
function operate(){
    if(operatorVar=="+"){
      document.getElementById("enter_here").value = parseFloat(firstVar)+parseFloat(secondVar);
    } else if(operatorVar == "-"){
      document.getElementById("enter_here").value = parseFloat(firstVar-secondVar);
    } else if(operatorVar == "*"){
      document.getElementById("enter_here").value = parseFloat(firstVar*secondVar);
    } else if(operatorVar == "/"){
      document.getElementById("enter_here").value = parseFloat(firstVar/secondVar);
    }
}

function clearDisplay(){
  firstVar='';
  operatorVar='';
  secondVar= '';
  document.getElementById('enter_here').value= '';
}

