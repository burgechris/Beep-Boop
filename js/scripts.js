//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userNumber = $('input#random').val();

    for(var i = 0; i <= userNumber; i += 1) {
      if (userNumber[i] === '1') {
        return 'beep';
        console.log('beep');
      }
    }
  });
});

//Business Logic

function outputNumber(userNumber) {
}
