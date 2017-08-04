var LEFT = 'ArrowLeft';
var RIGHT = 'ArrowRight';
var UP = 'ArrowUp';
var DOWN = 'ArrowDown';
var point=00;

$(document).ready(function(){

  var player= {x:1, y:1};
  
  function updateDisplay(){
      var gridHTML = generateGridHTML(grid);
      $('.container').html(gridHTML);
  }
  setValue(grid,player,PLYR);
  updateDisplay();
  
  function setPlayerPosition (destination,destinationValue)
  {
      if(destinationValue===FOOD){
        point++;
        $('p').text(point)
      }
      if(destinationValue === null || destinationValue === WALL){
          return  false;
      }
      setValue(grid, destination,PLYR);
      setValue(grid, player, NONE);
      player = destination;
      return true;
  }

  $(document).keydown(function(event){
    var key = event.key;
    var neighbors = findNeighbors(grid,player);
    var destination = null;

    if (key === LEFT){
        destination=neighbors.left;
        $('div.plyr').addClass('left');
    }
    if (key === UP){
        destination = neighbors.up;
        $('div.plyr').addClass('up');
    }
    if (key === RIGHT){
        destination = neighbors.right;
    }
    if (key === DOWN){
        $('div.plyr').addClass('down');
        destination = neighbors.down;
    }

    var destinationValue = null;
    if (destination){
        event.preventDefault();
        destinationValue = findValue(grid,destination);
    }
    var shouldUpdateDisplay = setPlayerPosition(destination,destinationValue);

    if(shouldUpdateDisplay){
        updateDisplay();
    }
  })

    
});