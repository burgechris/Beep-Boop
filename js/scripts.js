//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userNumber = $('input#random').val();
    var range = '';

    for(var i = 0; i <= userNumber; i += 1) {
      if (userNumber.includes('3')){
        var dave = "I'm sorry, Dave. I'm afraid I can't do that."
        console.log(dave);
      } else if (userNumber.includes('2')) {
        var beep = 'Boop!';
        console.log(beep);
      } else if (userNumber.includes('1')) {
        var beep = 'Beep!';
        console.log(beep);
      }
    }
  });
});

//Business Logic

function outputNumber(userNumber) {
}
