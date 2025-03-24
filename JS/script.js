// HAMBURGUER
const hamburguer = document.querySelector(".hamburguer");
const nav = document.querySelector(".nav");
const navlist = document.querySelector(".nav-list")

navlist.addEventListener("click", () => nav.classList.toggle("active"));
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

// CARROSSEL
// Index do item do meio atual
let currentIndex = window.innerWidth <= 750 ? 0 : 1;

// Evento dos botões do carousel
document.querySelectorAll('.carousel-button').forEach(e => e.addEventListener('click', () => {
    // Se for o da esquerda diminui o valor, se não, aumenta
    if (window.innerWidth >= 751) {
        currentIndex += e.id === 'anterior' ? -3 : 3;
    } else {
        currentIndex += e.id === 'anterior' ? -1 : 1;
    }

    const listaDeCards = document.querySelectorAll('.depoimento');

    // Garantindo que o index não saia do range válido
    // OBS: Com telas maiores, sempre haverão ter três cards na tela, ou seja, o 1o e o último nunca estrão no meio
    if (window.innerWidth <= 750) {
        if (currentIndex < 0) {
            currentIndex = listaDeCards.length - 1;
        } else if (currentIndex > listaDeCards.length - 1) {
            currentIndex = 0;
        }
    } else {
        if (currentIndex < 1) {
            currentIndex = listaDeCards.length - 2;
        } else if (currentIndex > listaDeCards.length - 2) {
            currentIndex = 1;
        }
    }

    // Movendo os cards para que o card do index esteja no meio
    listaDeCards[currentIndex].scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth',
    });
}));

// Enviando para o Whatsapp (Formulário)
function enviarParaWhatsApp() {
    let nome = document.getElementById("nome").value;
    let telefone = document.getElementById("telefone").value;
    let equipamento = document.getElementById("equipamento").value;
    let email = document.getElementById("email").value;
    let empresa = document.getElementById("empresa").value;
    let cidade = document.getElementById("cidade").value;

    
    let numeroWhatsApp = "5581985742601"; // Número desejado
    let texto = `%0ANome: ${nome}%0A
                Email: ${email}%0A
                Telefone: ${telefone}%0A
                Empresa: ${empresa}%0A
                Equipamento: ${equipamento}%0A
                Cidade: ${cidade}`;
    
    let url = `https://wa.me/${numeroWhatsApp}?text=${texto}`;
    window.open(url, "_blank");
}