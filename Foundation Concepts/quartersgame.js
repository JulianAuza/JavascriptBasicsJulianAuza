function quartersGame(X){
    var quarters=X
    while(quarters>0){
        quarters-=1;
        if(Math.random()*100<1){
            quarters+= Math.trunc(Math.random()*100)+50
            console.log(quarters);
        }
        if (quarters>500){
             break;
        }
        else{
            console.log(quarters);
        }
    }
   // console.log(quarters)
}

quartersGame(10);