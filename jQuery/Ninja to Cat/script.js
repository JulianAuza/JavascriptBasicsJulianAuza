$(document).ready(function() {
    
     $("img").click(function(){
        var $img = $(this);

        var src = $img.attr('src');
        var altsrc= $img.attr('data-alt-src');

        $img.attr('src',altsrc);
        $img.attr('data-alt-src',src)
       

    
     
   });

});