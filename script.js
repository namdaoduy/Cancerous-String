function change(){
    var inString = document.getElementById("InputString").value;
    var len = inString.length;
    var outstring = document.getElementById("demo");
    var count1 = 0;
    var count2 = 0;
    outstring.value = '';

    for (var i = 0; i < len; i++){
        var random = Math.floor((Math.random() * 2) + 1);
        if (random == 1){
            count1++;
            if (count1 < 3){
                outstring.value += inString[i].toLowerCase();
            }
            else {
                outstring.value += inString[i].toUpperCase();
                count1 = 0;
                count2++;
            }
        }
        else if (random == 2){
            count2++;
            if (count2 < 3){
                outstring.value += inString[i].toUpperCase();
            }
            else {
                outstring.value += inString[i].toLowerCase();
                count2 = 0;
                count1++;
            }	
        }
    }
}

document.addEventListener("keyup", (event) => {
    switch (event.keyCode) {
        case 13:
            change();
    }
});

function copy() {
    var text = document.querySelector("#demo");
    text.select();
    document.execCommand("copy");
}