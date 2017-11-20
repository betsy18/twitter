window.addEventListener('load', function(event) {
  // Declarando los eventos a utilizar
  var textArea = document.getElementById('textArea');
  var save = document.getElementById('save');
  var character = document.getElementById('character');
  var container = document.getElementById('container');

  // Cambiando el color de los caracteres
  textArea.addEventListener('keypress', function(event) {
    var maxLength = 140;
    character.textContent = textArea.value.length + 1;
    if (character.textContent > 139) {
      save.disabled = true;
      character.textContent = maxLength - textArea.value.length;
      character.classList.add('red');
    } else if (character.textContent >= 120 && character.textContent < 130) {
      character.classList.add('green');
    } else if (character.textContent >= 130 && character.textContent < 140) {
      character.classList.add('blue');
      character.classList.remove('green');
    } 
    if (event.keyCode === 13) {
      // aplicando el tamaño al textArea
      textArea.style.height = (textArea.scrollHeight) + 'px';
    }

    save.addEventListener('click', function(event) {
    // para verificar que tenga contenido 
      if (textArea.value) {
        var text = document.createElement('p');
        // creando el elemento p para almacenar la fecha y hora
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

