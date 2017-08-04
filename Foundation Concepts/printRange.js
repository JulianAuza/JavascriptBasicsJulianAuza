function printRange(arr){
    var max = 0;
    var min = 0;
    var range ="";

    for(var i=0;i<arr.lenth;i++){
        if (arr[i]>max){
            max=arr[i];
        }
       /* if(arr[i]<min){
            min=arr[i];
        }
        for(var x=min; x<max;x++){
            range += x+',';
        }
    }
    console.log(range);
*/
console.log(max)
}

printRange([2,5,7]);

