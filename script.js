var a = 0;
var b = 0;
var dz = "";
//zrobione: wyświetlacz, dodawanie, odejmowanie, mnożenie, dzielenie
function przycisk(jaki){
    //alert(jaki);
    var elem = document.getElementById('wyswietlacz');
    var elem = document.getElementById('wyswietlacz');
    if(elem.value == "0"){
        elem.value = jaki;
    } else {
        elem.value += jaki;
    }
}

function przecinek(){
    var elem = document.getElementById('wyswietlacz');
    if(elem.value.indexOf(",")==-1){
        elem.value += ",";
    }
}


function dzialanie(jakie){
    //alert(jakie);
    var elem = document.getElementById('wyswietlacz');
    a = parseFloat(elem.value.replace(",","."));
    dz = jakie;
    elem.value = "0";
}


function rownasie(){
    var elem = document.getElementById('wyswietlacz');
    b = parseFloat(elem.value.replace(",","."));
    var c = 0;
    switch (dz) {
        case "+": c = a + b; break;
        case "*": c = a * b; break;
        case "-": c = a - b; break;
        case "/": if (b == 0) {
            alert("Nie można dzielić przez 0");
            c = b;
        } else {
            c = a / b;
        }
        break;
    }
    c = c * 1000;
    c = Math.round(c);
    c = c / 1000;
    elem.value = c.toString().replace(".",",")
}

function plusminus(){
    var elem = document.getElementById('wyswietlacz');
    if(elem.value < 0){
        elem.value = elem.value * -1;
    } else if(elem == 0){
        elem.value = 0;
    } else if(elem.value > 0){
        elem.value = elem.value * -1;
    }
}

function C(){
    var elem = document.getElementById('wyswietlacz');
    elem.value = 0;
}

function CE(){
    var elem = document.getElementById('wyswietlacz');
    elem.value = 0;
}

function strzalka(){
    var elem = document.getElementById('wyswietlacz');
    elem.value = 0;
}