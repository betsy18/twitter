window.addEventListener('load', function(event) {
  var textArea = document.getElementById('textArea');
  var save = document.getElementById('save');
  var character = document.getElementById('character');
  var container = document.getElementById('container');

  textArea.addEventListener('keypress', function(event) {
    character.textContent = textArea.value.length + 1;
    if (character.textContent > 139) {
      save.disabled = true;
      character.textContent = 140 - textArea.value.length;
      character.classList.add('red');
    } else if (character.textContent >= 120 && character.textContent < 130) {
      character.classList.add('green');
    } else if (character.textContent >= 130 && character.textContent < 140) {
      character.classList.add('blue');
      character.classList.remove('green');
    } 

    save.addEventListener('click', function(event) {
    // para verificar que tenga contenido 
      if (textArea.value) {
        var text = document.createElement('p');
        var date = document.createElement('p');
        date.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
        text.textContent = textArea.value;
        container.appendChild(text);
        container.appendChild(date);
        container.classList.add('form');
        textArea.value = '';
      } else {
        save.disabled = true;
      }
    });
  });
});

