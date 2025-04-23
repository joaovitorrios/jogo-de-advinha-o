let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa = 0;

const input = document.getElementById("inputNumero");
const botao = document.getElementById("botaoAdivinhar");
const mensagem = document.getElementById("mensagem");
const reiniciar = document.getElementById("reiniciar");

botao.addEventListener("click", () => {
  const palpite = Number(input.value);
  tentativa++;

  if (palpite === numeroAleatorio) {
    mensagem.textContent = `Parabéns! Você acertou em ${tentativa} tentativa(s)! 🎉`;
    mensagem.style.color = "green";
  } else if (palpite > numeroAleatorio) {
    mensagem.textContent = "Tente um número menor.";
    mensagem.style.color = "red";
  } else {
    mensagem.textContent = "Tente um número maior.";
    mensagem.style.color = "red";
  }

  input.value = "";
  input.focus();
});

reiniciar.addEventListener("click", () => {
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  tentativa = 0;
  mensagem.textContent = "";
  input.value = "";
  input.focus();
});
