    var students = [ 
     {first_name:  'Michael', last_name : 'Jordan'},
     {first_name : 'John', last_name : 'Rosales'},
     {first_name : 'Mark', last_name : 'Guillen'},
     {first_name : 'KB', last_name : 'Tonel'}
    ]
    
function fullNames(){
    for(var i = 0; i < students.length; i++){
    var fullnames = students[i].first_name +" "+students[i].last_name;
    console.log(fullnames);
    }
//console.log(fullnames);
}

fullNames();