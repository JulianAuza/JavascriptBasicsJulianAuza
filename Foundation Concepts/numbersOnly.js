function numbersOnly(arr){
    var arrNew=[];
    for(var i=0; i< arr.length; i++){
        if (typeof arr[i]==="number"){
            arrNew.push(arr[i])
        }
    }
    console.log(arrNew);
}

numbersOnly(["hello",3,4,5,"nah"]);