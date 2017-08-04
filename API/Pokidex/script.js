$(document).ready(function(){

for(var i=1;i<152;i++){
var pokeid;
$('p.pokemon').append("<img idnum='"+ i +"'src='http://pokeapi.co/media/img/" + i +".png'/>")
//console.log(i);

}   

$('img').click(function(){
    //alert("image clicked")
        $('div.screen').html("");
        $('div.screen2').html("");
        $($(this)).clone().appendTo('div.screen');
        console.log($(this).attr('idnum'));
        
        var num =$(this).attr('idnum');
        var url ="http://pokeapi.co/api/v2/pokemon/" + num + "/";

    // function infoBox(types) {
    // var str = '';
    // for (var i = 0; i < types.length; i++) {
    //     str = type[1];
    //     console.log(str);
    // }
    // };
    
    $.get(url, function( po ) {
            var name = po.name;
            var imgnum = num;
            var type = po.is_default;
            var height = po.height;
            var weight = po.weight;
         $('div.screen2').html("<p>" +name+"<br>"+ imgnum +"<br>"+ type +"<br>"+ height +"<br>"+ weight+"</p>");
        }, "json");

});


});