
// allow user to enter text in to time blocks
// save the time blocks to local storage 
// color code the time blocks using different background colors 

// adds the current day to the jumbotron 
 $('#currentDay').html(moment().format("dddd MMM Do YYYY"))

var timeList = ['9AM','10AM','11AM','12PM','1PM','2PM','3PM','4PM','5PM']
for(i = 0; i < timeList.length; i++){
    var hour = timeList[i]
    // hour.addClass('hour')
    $('.container').append(hour)
}