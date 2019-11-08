function radix(){
    var number = parseInt(document.getElementById("number").value,document.getElementById("base").value);
    var base = document.getElementById("base").value;
    var digits = parseInt(document.getElementById("digits").value, 10);
    var result = Math.pow(base, digits) - number;
    var result2 = result.toString(base);
    document.getElementById("result").innerHTML = result2;
}

function diminishedRadix(){
    var number = parseInt(document.getElementById("number").value,document.getElementById("base").value);
    var base = document.getElementById("base").value;
    var digits = parseInt(document.getElementById("digits").value, 10);
    var result = (Math.pow(base, digits) - 1 ) - number;
    var result2 = result.toString(base);
    document.getElementById("result").innerHTML = result2;
}