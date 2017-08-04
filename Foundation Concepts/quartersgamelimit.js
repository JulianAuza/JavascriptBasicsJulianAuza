function quartersGame(X,Y){
    var quarters=X
    while(quarters>0){
        quarters-=1;
        if(Math.random()*100<1){
            quarters+= Math.trunc(Math.random()*50)+50
            console.log(quarters);
        }
        if (quarters>=Y){
             break;
        }
        else{
            console.log(quarters);
        }
    }
   // console.log(quarters)
}

quartersGame(10,40);