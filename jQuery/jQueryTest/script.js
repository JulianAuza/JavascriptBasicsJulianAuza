
$(document).ready(function () {
//click Section
    $('button.click').click(function () {
        alert("You just used click");
    });
//Hide

    $('button.hide').click(function () {
        $( "p.hide" ).hide();
    });

//Show
//     function demoVisibility() {
//     document.getElementById("myP2").style.visibility = "hidden";
// }
    
    $("p.show").hide();

    $('button.show').click(function () {
        $( "p.show" ).show();
    });

//Toggle
    $('button.toggle').click(function () {
        $( "p.toggle" ).toggle();
    });
//SlideDown
    $("p.slideDown").hide();

    $('button.slideDown').click(function () {
        $( "p.slideDown" ).slideDown( 1000, function() {
         });
    });
//SlideUp
    //$("p.slideUp").hide();

    $('button.slideUp').click(function () {
        $( "p.slideUp" ).slideUp( 1000, function() {
        });
    });
//Slide Toggle

    $( "button.toggle" ).click(function() {
        $( "p.toggle" ).slideToggle( "slow" );
    });

//Fade in
    $("p.fadeIn").hide();

    $("button.fadeIn").click(function(){
    $("p.fadeIn").fadeIn();
    });
//Fade Out

    $( "button.fadeOut" ).click(function() {
    $( "p.fadeOut" ).fadeOut( "slow", function() {
        // Animation complete.
    });
});
//Add Class
    $("button.addClass").click(function(){
        $("p.addClass").toggleClass("classy") 
    });
//Before
    $("button.before").click(function(){
        $("p.before").before("<p>before</p>") 
    });
//After
    $("button.after").click(function(){
        $("p.after").after("<p>after</p>") 
    });
//Append
    $("button.append").click(function(){
        $("p.append").append("<p>append</p>") 
    });
//Html
    $("button.html").click(function(){
        $("p.html").html("<span class='red'>Hello <b>Again</b></span>") 
    });
//attr
    $("button.attr").click(function(){
        $("p.attr").attr("<span class='red'>Hello <b>Again</b></span>") 
    });
    
});