const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  console.log('a');
  var body = document.querySelector('body');
  body.addEventListener('keydown', function onKeyDownHandler(event) {
    var e = event;//
    console.log(`e:${e}`);//
    const key = parseInt(e.detail || e.which);
    console.log(`key:${key}`);
    var index = 0;
    if (key === code[index]) {
      index++;

      if (index === code.length) {
        console.log(e);
        alert("Hurray!");

        index = 0;
      }
    } else {
      index = 0;
    }
  })
}
init()
