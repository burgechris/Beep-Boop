//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('#random').val());
    var showme = boopiedoopie(userInput);

    $('#output').text(showme);

  });
});

//Business Logic

function boopiedoopie(userInput) {
  var numbers = '';
  for (var i = 0; i <= userInput; i++) {
    numbers += (i + ', ');
  }

  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i].includes('3')) {
      numbers.replace([i], "I'm sorry, Dave. I'm afraid I can't do that.");
      console.log(numbers);
    } else if (numbers[i].includes(2)) {
      numbers[i] = 'Boop!';
    } else if (numbers[i].includes(1)) {
      numbers[i] = 'Beep!';
    }
  }

  return numbers;
};
