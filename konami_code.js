const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  function onKeyDownHandler(e) {
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
  }
}

var body = document.querySelect('body');
