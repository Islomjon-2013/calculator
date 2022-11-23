function res(){
    let num1 = +document.getElementById(`num1`) .value;
    let num2 = +document.getElementById(`num2`).value;
    let count = document.getElementById(`count`)
    let control1= document.getElementById(`control1`);
    let control2= document.getElementById(`control2`);
if (num1 != ""&& num2!=""){
    document.getElementById(`num1`).value=""
    document.getElementById(`num2`).value=""
}



    if(num1 ==""){
        control1.innerHTML='You did not enter 1-number'
    }else{
        control1.innerHTML = ""
    }

    if(num2 == ""){
        control2.innerHTML =`You did not enter 2- number`
    }else{
        control2.innerHTML = "" 
    }
    count.value = num1 + num2
    
}






