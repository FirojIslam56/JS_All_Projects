var result = document.getElementById("result");
function calculation(val){
    result.innerText = result.innerText + val;
    if(result.innerText.length>19){
        result.innerText = "Number is too big";
    }
}
function equal(){
    let equ = eval(result.innerText);
    result.innerText = equ;
}
function clearFun(){
    result.innerText = null;
}