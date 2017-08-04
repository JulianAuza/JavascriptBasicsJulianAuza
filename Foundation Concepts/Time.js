//console.log (Date())

var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

//console.log(HOUR++)

function gimmeTime(){
    var TIME= (HOUR+":"+MINUTE)
    console.log(TIME)
    if(MINUTE>=50){
        HOUR=HOUR+1;
        console.log("it is almost "+HOUR)
    }
    if(MINUTE<=15 && PERIOD == "PM"){
        console.log("It is just after "+HOUR+" in the evening.")
    }
    if(MINUTE<=15 && PERIOD == "AM"){
        console.log("It is just after "+HOUR)
    }
}

gimmeTime()