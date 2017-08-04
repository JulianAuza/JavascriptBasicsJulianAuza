$(document).ready(function () {

  var $id = $('img','id');

  
  $('img').click(function(){
      $.get( "http://anapioficeandfire.com/api/houses"+ $id, function( repos ){
        console.log(id)
      
     });
  

    });








// function getUserRepos (searchName, type ,$ul) {
//   $.get( "https://api.github.com/"+ type +'/'+ searchName + "/repos", function( repos ) {
   
//     for (var i = 0; i < repos.length; i+=1) {
//       // Console Log Each Key We Want
//       var repo = repos[i];
//       // console.log(repo.name);
//       // console.log(repo.description);
//       // console.log(repo.pushed_at);
//       // console.log(repo.html_url);
//       // console.log('-----------');
//       var anchor = '<a href="' + repo.html_url + '">' + repo.name + '</a>';
//       var desc = '<p>'+ repo.description+'</p>';
//       var li = '<li>' + anchor + '<br>'+ repo.pushed_at + desc +'</li>';
//       console.log("THE LIST ITEM STRING WE'VE MADE", li)
//       $ul.append(li);
//      // $ul.append('<li>'repo.pushed_at'</li>');

//     }
  //}
});
