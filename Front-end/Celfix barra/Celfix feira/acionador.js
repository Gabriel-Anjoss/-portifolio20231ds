const elementoOculto = document.getElementById("elemento-oculto");
const elementoAcionador = document.getElementById("elemento-acionador");

elementoAcionador.addEventListener("mouseenter", function() {
  elementoOculto.classList.add("visible");
});

elementoAcionador.addEventListener("mouseleave", function() {
  setTimeout(function() {
    if (!elementoOculto.matches(":hover")) {
      elementoOculto.classList.remove("visible");
    }
  }, 100);
});

elementoOculto.addEventListener("mouseenter", function() {
  // Nada a ser adicionado aqui, a transição cuidará do movimento.
});

elementoOculto.addEventListener("mouseleave", function() {
  elementoOculto.classList.remove("visible");
});

const menus = document.querySelector(".menu-perfil");
const nav = document.querySelector(".navbar");

menus.addEventListener("click", () => nav.classList.toggle("active"));

const menuPerfil = document.querySelector(".menu-perfil");
const perfilImg = document.querySelector(".menu-perfil img");

let isPerson = true; // Variável para controlar o estado da imagem

menuPerfil.addEventListener("click", () => {
  // Inverta o estado da variável
  isPerson = !isPerson;

  // Atualize a imagem com a transição
  perfilImg.style.opacity = 0;
  setTimeout(() => {
    perfilImg.src = isPerson
      ? "Imagens/person.svg"
      : "Imagens/close_FILL0_wght400_GRAD0_opsz24.svg";
    perfilImg.style.opacity = 1;
  }, 200); // Tempo de transição em milissegundos
});