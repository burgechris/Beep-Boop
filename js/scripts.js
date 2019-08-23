//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userInput = $('#random').val();
    var display = result(userInput);
    $('#output').text(display);

    if (parseInt(userInput).includes()) {
      return true;
    }
    else {
      alert('Enter a number, fool.')
    }

  });
});

//Business Logic

function result(userInput) {
  if (userInput.includes('3')) {
    return "I'm sorry, Dave. I'm afraid I can't do that."
  } else if (userInput.includes('2')) {
    return 'Boop!';
  } else if (userInput.includes('1')) {
    return 'Beep!';
  }
  var numberVersion = parseInt(userInput);
  var numbers = '';
  for (var i = 0; i <= numberVersion; i++) {
    numbers += (i + ', ');
  }

  return numbers;
};
