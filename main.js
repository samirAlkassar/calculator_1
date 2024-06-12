const expr = [];
function number(number) {
    if (number == '**'){
        document.getElementById("result").innerHTML += '^';
    }
    else {
        document.getElementById("result").innerHTML += number;
    }
    
    expr.push(number);
    return expr;
}
function eval_(){
    txt = ""
    for (let i of expr) {
        txt += i
    }
    document.getElementById("result").innerHTML = eval(txt);
    while(expr.length > 0) {
        expr.pop();
    }
}

function AC() {
    document.getElementById("result").innerHTML = 0;
    while(expr.length > 0) {
        expr.pop();
    }
}

function theme() {
    

}
