const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  
  console.log('a');
  var body = document.querySelector('body');
  body.addEventHandler('click', function onKeyDownHandler(event) {
    var e = event;
    console.log(e);
    const key = parseInt(e.detail || e.which);
    console.log(key);
    if (key === alphabet[index]) {
      index++;

      if (index === alphabet.length) {
        console.log(e);
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })

}
