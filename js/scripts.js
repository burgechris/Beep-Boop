//User-Interface Logic

$(document).ready(function() {
  $('#numberChecker').submit(function(event) {
    event.preventDefault();
    var userInput = parseInt($('#random').val());
    var poopie = boopiedoopie(userInput);

    var showMe = poopie.join(', ')

    $('#output').text(showMe);

  });
});

//Business Logic

function boopiedoopie(userInput) {
  // Creating an empty array to push the integers created from the for loop.
  var integersArray = [];
  for (var i = 0; i <= userInput; i++) {
    integersArray.push([i]);
  }
  // A second for loop to replace the exceptions, as well as turning the array to a string.
  for (var i = 0; i < integersArray.length; i++) {
    if (integersArray[i].toString().includes(3)) {
      integersArray[i] = ("I'm sorry, Dave. I'm afraid I can't do that.");
      console.log(integersArray);
    } else if (integersArray[i].toString().includes(2)) {
      integersArray[i] = 'Boop!';
    } else if (integersArray[i].toString().includes(1)) {
      integersArray[i] = 'Beep!';
    }
  }

  return integersArray;
};
