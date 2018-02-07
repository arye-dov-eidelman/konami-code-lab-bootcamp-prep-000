const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  console.log('a');
  var body = document.querySelector('body');
  body.addEventListener('keydown', function onKeyDownHandler(event) {
    var e = event;
    const key = parseInt(e.detail || e.which);
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
    console.log(`key:${key}`);
    console.log(`e:${e}`);
    console.log(`index:${index}`);
  })
}
init()
