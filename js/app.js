window.addEventListener('load', function(event) {
  var textArea = document.getElementById('textArea');
  var save = document.getElementById('save');
  var character = document.getElementById('character');
  var container = document.getElementById('container');

  save.addEventListener('click', function(event) {
    // para verificar que tenga contenido 
    if (textArea.value) {
      var text = document.createElement('p');
      text.textContent = textArea.value;
      container.appendChild(text);
      console.log(text);
      text.value = '';
      container.classList.add('form');
    }
  });
});