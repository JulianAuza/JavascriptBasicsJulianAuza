var payment=0;
var amt=.01

function monthPayment(){
    for(var i=1; i<31;i++){
        amt=(amt*2);
        console.log(amt);
        if(amt=>10,000){
            console.log(i);
            break;
        }
    }
}

monthPayment()