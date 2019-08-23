//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#random').val();
    var output = '';
    var numberString = '';

    if (userInput.includes('3')) {
      output =  "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (userInput.includes('2')) {
      output = 'Boop!';
    } else if (userInput.includes('1')) {
      output = 'Beep!';
    } else {
      for (var i = 0; i <= parseInt(userInput); i++) {
        numberString += i;
        var output = numberString.split('');
      }
    }

    $('#output').text(output);

  });
});

//Business Logic
