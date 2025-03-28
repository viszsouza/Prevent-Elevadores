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
        currentIndex += e.id === 'anterior' ? -1 : 1;
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

// Bloquear se o form for enviado com algum campo vazio
function verificarForm() {
    let campos = document.querySelectorAll("#formulario input");
    let preenchido = true;

    // Verifica se todos os campos estão preenchidos
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            preenchido = false;
        }
    });

    if (!preenchido) {
        document.getElementById("erro-msg").style.display = "block";
        return; // Impede o envio
    }

    document.getElementById("erro-msg").style.display = "none"; // Esconde a mensagem de erro

    enviarParaWhatsApp();
    
}

// Enviando para o WhatsApp (Formulário)
function enviarParaWhatsApp() {
    let campos = document.querySelectorAll("#formulario input");
    let preenchido = true;

    // Verifica se todos os campos estão preenchidos
    campos.forEach(campo => {
        if (!campo.value.trim()) {
            preenchido = false;
        }
    });

    if (!preenchido) {
        document.getElementById("erro-msg").style.display = "block";
        return; // Impede o envio
    }

    document.getElementById("erro-msg").style.display = "none"; // Esconde a mensagem de erro

    let nome = document.getElementById("nome").value.trim();
    let telefone = document.getElementById("telefone").value.trim();
    let equipamento = document.getElementById("equipamento").value.trim();
    let email = document.getElementById("email").value.trim();
    let empresa = document.getElementById("empresa").value.trim();
    let cidade = document.getElementById("cidade").value.trim();

    let numeroWhatsApp = "5581996550146"; // Número desejado

    let texto = `Nome: ${nome}\nEmail: ${email}\nTelefone: ${telefone}\nEmpresa: ${empresa}\nEquipamento: ${equipamento}\nCidade: ${cidade}`;

    let url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(texto)}`;
    
    window.open(url, "_blank");
}