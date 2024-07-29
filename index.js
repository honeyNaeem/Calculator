var result = document.getElementById('result');


function calculation(param){

    if(param === '='){
        let cal = eval(result.value);
        result.value = cal
    }
    else if(param === 'AC'){
        result.value = 0
    }else if(param === "x"){
        result.value = result.value.substring(0,result.value.length-1);

    }
    else{
        if(result.value == 0){
            result.value = param;
        }else{
            result.value += param;

        }
    }
    result.value = result.value.substring(0,10);
    
}