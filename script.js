const nomes = [
  "Priscila", "João", "Maria", "Lucas", "Ana Beatriz", "Rafael", "Juliana", "Bruno",
  "Camila", "Felipe", "Larissa", "Gustavo", "Amanda", "Thiago", "Daniela", "Pedro",
  "Isabela", "Leonardo", "Vanessa", "Diego", "Marcelo", "Eduardo", "Bianca", "Ricardo",
  "Sabrina", "André", "Patrícia", "Carla", "Fernanda", "Gabriel", "Tatiane", "Moisés"
];

const acao = "acabou de comprar";

const popup = document.getElementById("popup");
let ultimaMensagem = "";

function gerarMensagem() {
  const nome = nomes[Math.floor(Math.random() * nomes.length)];
  return `<strong>${nome}</strong> ${acao}`;
}

function mostrarPopup() {
  let novaMensagem;
  do {
    novaMensagem = gerarMensagem();
  } while (novaMensagem === ultimaMensagem);
  ultimaMensagem = novaMensagem;

  popup.innerHTML = novaMensagem;
  popup.classList.add("show");
  popup.classList.remove("hide");

  setTimeout(() => {
    popup.classList.remove("show");
    popup.classList.add("hide");
  }, 3000);

  const tempoProximo = Math.floor(Math.random() * (9000 - 5000 + 1)) + 5000;
  setTimeout(mostrarPopup, tempoProximo);
}

mostrarPopup();
