//  global variables
 var save = $('.saveBtn')
 var time = parseInt(moment().format('H'))
 var row = $('.timeBlock')    

// adds the current day to the jumbotron 
 $('#currentDay').html(moment().format("d   ddd MMM Do YYYY"))

// Set up save function that takes the textarea value and sticks it in local storage 
save.on('click', function(){
    event.preventDefault();
    var text = $(this).siblings('.agenda').val()
    var id = $(this).parent().attr('id')
    localStorage.setItem(id, text);
  });

// function that loops through the length of the row variable and appends classes
// based on the current time as compared to the rows id values
// Also fils in the text area with local storage info
function currentStatus(){
    for( var i = 0; i < row.length; i++){
         let param = parseInt(row[i].id)
         $('#'+ row[i].id + ' .agenda').val(localStorage.getItem(row[i].id))
        switch(true){
          case param < time:
               $(row[i]).removeClass('present')
               $(row[i]).removeClass('future')
               $(row[i]).addClass('past')
               break
          case  param === time:
               $(row[i]).removeClass('future')
               $(row[i]).removeClass('past')
               $(row[i]).addClass('present')
               break
          default:
               $(row[i]).removeClass('past')
               $(row[i]).removeClass('present')
               $(row[i]).addClass('future')
    }   
}
}



currentStatus()