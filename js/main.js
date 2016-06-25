window.onload = function() {
  // Select all buttons
  var buttons = document.getElementsByTagName('span'),
  // Select the result-field
  result = document.querySelectorAll('.result p')[0],
  // Select the clearAll-button
  clear = document.getElementsByClassName('clear')[0]

  for (var i = 0; i < buttons.length; i += 1) {
    //  This loops through all the buttons to add onclick-event
    // if the inside of that button is not '=' --> we will
    // add the conclick-function: addvalue(i).
    // if it is '=' --> add the onclick-function: calculate(i)

    if (buttons[i].innerHTML === '=') {
      buttons[i].addEventListener("click", calculate(i))
    } else {
      buttons[i].addEventListener("click", addValue(i))
    }
  }

  function addValue(i) {
    // we need to replace the '÷' and the 'x' symbols,
    // because js cant calculate with it. the if-statement replaces
    // those symbols with the correct symbol

    if (butttons[i].innerHTML === '÷') {
      result.innerHTML += '/';
    } else if (buttons[i].innerHTML === 'x') {
      result.innerHTML += '*';
    } else {
      result.innerHTML += buttons[i].innerHTML;
    }
  }

  function calculate(i) {
    return function () {
      result.innerHTML = eval(result.innerHTML)
    }
  }

  clear.onclick = function () {
    result.innerHTML = '';
  }

}


