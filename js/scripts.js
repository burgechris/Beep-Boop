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
  var integersArray = [];
  for (var i = 0; i <= userInput; i++) {
    integersArray.push([i]);
  }

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
