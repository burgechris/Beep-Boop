//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userNumber = $('input#random').val();

    // var range = function(start_num, end_num) {
    //
    // }

    for(var i = 0; i <= userNumber; i += 1) {
      if (userNumber.includes('3')){
        var output = "I'm sorry, Dave. I'm afraid I can't do that."
      } else if (userNumber.includes('2')) {
        var output = 'Boop!';
      } else if (userNumber.includes('1')) {
        var output = 'Beep!';
      }
    }
    $('#output').text(output);
  });
});

//Business Logic
