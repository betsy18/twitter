window.addEventListener('load', function(event) {
  var textArea = document.getElementById('textArea');
  var save = document.getElementById('save');
  var character = document.getElementById('character');
  var container = document.getElementById('container');

  textArea.addEventListener('keypress', function() {
    character.textContent = textArea.value.length + 1;
    console.log(character);
    if (character.textContent > 139) {
      save.disabled = true;
      character.textContent = 140 - textArea.value.length;
      character.classList.add('red');
      character.classList.remove('blue');
      character.classList.remove('green');
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
        text.textContent = textArea.value;
        container.appendChild(text);
        container.classList.add('form');
        console.log(text);
        textArea.value = '';
      }
    });
  });
});

