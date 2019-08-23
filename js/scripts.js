//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userInput = $('input#random').val();
    var display = result(userInput);
    console.log(display);
    var output = '';
    var numberString = '';

    function result(userInput) {
      if (userInput.includes('3')) {
         return "I'm sorry, Dave. I'm afraid I can't do that."
      } else if (userInput.includes('2')) {
         return 'Boop!';
      } else if (userInput.includes('1')) {
        return 'Beep!';
      } else {
        for (var i = 0; i <= parseInt(userInput); i++) {
          output += i;

        }
      }
    };

    $('#output').text(display);

  });
});

//Business Logic
