function arrRange(arr) {
    var max = arr[0];
    var min = arr[0];
    var range=[];
    
    for(var i = 1 ; i< arr.length; i++){
        if( arr[i]>max){
            max = arr[i]
        }
        if(arr[i]<min){
            min = arr[i]
        }
    }
    for(var i = min; i<=max; i++){
        range += i + ",";
    }
    console.log([range]);
    
}

arrRange([1,4,10,0,-3]);