
function arrowArray(arr){
    var arrNew=[];
    for(var i = 0; i< arr.length; i++){
        arrNew.push("->"+arr[i]);
    }
    console.log(arrNew);

}

arrowArray([1,4,10,0,-3]);