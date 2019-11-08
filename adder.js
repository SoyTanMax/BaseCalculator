function addNumber(){
    var number1 = parseInt(document.getElementById("number1").value,document.getElementById("Base1").value);
    var number2 = parseInt(document.getElementById("number2").value,document.getElementById("Base2").value);
    var result = parseInt(number1 + number2, document.getElementById("Base3").value);
    document.getElementById("result2").innerHTML = result;
}

function subtractNumber(){
    var number1 = parseInt(document.getElementById("number1").value,document.getElementById("Base1").value);
    var number2 = parseInt(document.getElementById("number2").value,document.getElementById("Base2").value);
    var result = parseInt(number1 - number2, document.getElementById("Base3").value);
    document.getElementById("result2").innerHTML = result;
}