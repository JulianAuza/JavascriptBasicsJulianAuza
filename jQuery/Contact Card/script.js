$(document).ready(function(){
    var fname = $('input[name="fname"]');
    var lname = $('input[name="lname"]');
    var desc = $('input[name="desc"]');

    // var fname=$(input.fname).val();
    // var lname=$(input.lname).val();
    // var desc=(input.desc).val();
    $('button.addUser').click(function(){
        var $fname = fname.val();
        var $lname = lname.val();
        var $desc = desc.val();
        event.preventDefault();
        //$('p.visitorCards').append("hello");
        // $('div.pokemon').append('<img src="http://pokeapi.co/media/img/1.png" alt="bulbasaur">')
        $('p.visitorCards').append('<p> class"visitorText" <\p>');
    });

});