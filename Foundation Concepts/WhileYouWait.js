var daysTilBday=15;

function bdayCountDown(){
    while(daysTilBday>0){
        if(daysTilBday>5){
            if(daysTilBday>30){
                console.log("It's ok! It'll get here :)")
                break;
            }
            if(daysTilBday<30){
                console.log("Woohooo almost there!")
                break;
            }
        }
        else{
            console.log("OMAGAH SO CLOSE! START CELEBRATING!!")
            break;
        }

    }
}

bdayCountDown()