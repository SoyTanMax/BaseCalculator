function convertNumber(){
    var base_convert = function(number, initial_base, change_base) {
        if ((initial_base && change_base) <2 || (initial_base && change_base)>36)
         return 'Base between 2 and 36';
        
         return parseInt(number + '', initial_base)
         .toString(change_base);
     }
     
    var result = (base_convert(document.getElementById("number").value,document.getElementById("fBase").value,document.getElementById("tBase").value));
    document.getElementById("result").innerHTML = result;
}


    
    
