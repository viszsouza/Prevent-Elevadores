// Variável - Media query
var larguraTela = window.innerWidth;


// Carrossel Serviços
function direcaoServicos(e){
    // Variável - Direção dos cards do carrossel
    var direcao = document.getElementById("contentSlide");


    // Media query ... - 398px
    if(larguraTela <= 398){
        // Mover pra direita
        if (e == 1){
            direcao.scrollLeft = direcao.scrollLeft - 280;
        }
        // Mover pra direita
        else if(e == 2){
            direcao.scrollLeft = direcao.scrollLeft + 280;
        };
    }

    // Media query 390px - 458px
    if(larguraTela >= 459 && larguraTela <= 458){
        // Mover pra direita
        if (e == 1){
            direcao.scrollLeft = direcao.scrollLeft - 280;
        }
        // Mover pra direita
        else if(e == 2){
            direcao.scrollLeft = direcao.scrollLeft + 280;
        };
    }
    
    // Media query 459px - 598px
    if(larguraTela >= 459 && larguraTela <= 598){
        // Mover pra direita
        if (e == 1){
            direcao.scrollLeft = direcao.scrollLeft - 500;
        }
        // Mover pra direita
        else if(e == 2){
            direcao.scrollLeft = direcao.scrollLeft + 500;
        };
    }

    // Media query 599px - 940px
    if(larguraTela >= 599 && larguraTela <= 940){
        // Mover pra direita
        if (e == 1){
            direcao.scrollLeft = direcao.scrollLeft - 620;
        }
        // Mover pra direita
        else if(e == 2){
            direcao.scrollLeft = direcao.scrollLeft + 620;
        };
    }
}