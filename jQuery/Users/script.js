$(document).ready(function(){
    $('button').click(function(){
        event.preventDefault();
        $('p.new').append($('div.user').html());

    });

});