document.getElementById('formNumeros').addEventListener('submit', function(event) {
  event.preventDefault();
  
  let numeroUm = parseFloat(document.getElementById('primeiro').value);
  let numeroDois = parseFloat(document.getElementById('segundo').value);
  
  if(numeroUm < numeroDois) {
      mostrarMensagem('Números Válidos!', 'valid');
  } else {
      mostrarMensagem(`Números Inválidos. O segundo número deve ser maior que ${numeroUm}`, 'invalid');
  }
});

function mostrarMensagem(mensagem, type) {
  var mensagemDiv = document.getElementById('mensagem');
  mensagemDiv.textContent = mensagem;
  
}