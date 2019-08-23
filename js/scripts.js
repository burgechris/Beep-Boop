//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#random').val();
    var numberVersion = parseInt(userInput);
    var newString = '';

    if (userInput.includes('3')) {
      return "I'm sorry, Dave. I'm afraid I can't do that."
    } else if (userInput.includes('2')) {
      return 'Boop!';
    } else if (userInput.includes('1')) {
      return 'Beep!';
    }

    for (var i = 0; i <= numberVersion; i++) {
      newString += i;
    }

    $('#output').text(newString);

  });
});

//Business Logic
