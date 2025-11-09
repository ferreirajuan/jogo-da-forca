const pauseButton = document.getElementById("pause-button")
const closeButton = document.getElementById("close-button")
const pauseModal = document.getElementById("pause-modal")
const letrasSection = document.querySelector(".letters-section")
const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const bonecoImg = document.getElementById("boneco");
let erros = 1;
const maxErros = 7; 

pauseButton.addEventListener('click', function () {
    pauseModal.classList.remove("hidden");
    document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', function () {
    pauseModal.classList.add("hidden");
    document.body.style.overflow = '';
});

// ----------------------
// Jogo da Forca
// ----------------------
const frutas = [
    "banana",
    "laranja",
    "uva",
    "manga",
    "abacaxi",
    "morango",
    "melancia",
    "pera",
    "kiwi"
];

let totalFrutas = frutas.length;
let numeroAleatorio = Math.floor(Math.random() * totalFrutas);
let palavraSorteada = frutas[numeroAleatorio];

console.log("Fruta sorteada:", palavraSorteada);

// Seleciona o container da palavra
const wordContainer = document.querySelector(".word-container");

// Limpa o container (caso já tenha algo)
wordContainer.innerHTML = "";

// Cria os espaços para cada letra da fruta
for (let i = 0; i < palavraSorteada.length; i++) {
    const letterDiv = document.createElement("div");
    letterDiv.classList.add("letter-from-word");

    const span = document.createElement("span");
    span.textContent = ""; // letra escondida por enquanto

    const underline = document.createElement("div"); // linha embaixo

    letterDiv.appendChild(span);
    letterDiv.appendChild(underline);
    wordContainer.appendChild(letterDiv);
}

for (let letra of alfabeto) {
    const botao = document.createElement("button");
    botao.textContent = letra;
    botao.classList.add("letra-botao");
    letrasSection.appendChild(botao);
}

function atualizarBoneco() {
    // torna visível se estava escondido
    bonecoImg.style.display = "block";

    // altera a imagem conforme o número de erros
    bonecoImg.src = `/assets/elements/hangman-${erros}.svg`;
}


document.querySelectorAll(".letters-section button").forEach(btn => {
    btn.addEventListener("click", () => {
        const letraEscolhida = btn.textContent.toLowerCase();
        btn.disabled = true; // desativa o botão após clicar

        if (palavraSorteada.includes(letraEscolhida)) {
            console.log("Acertou:", letraEscolhida);

            // Pega todos os spans das letras
            const letrasNaTela = document.querySelectorAll(".letter-from-word span");

            // Substitui os espaços pelas letras corretas
            for (let i = 0; i < palavraSorteada.length; i++) {
                if (palavraSorteada[i] === letraEscolhida) {
                    letrasNaTela[i].textContent = letraEscolhida.toUpperCase();
                }
            }
        } else {
            console.log("Errou:", letraEscolhida);
            erros++; // aumenta o contador de erros
            atualizarBoneco();
            if (erros >= maxErros) {
                alert(`Você perdeu 😢 A palavra era: ${palavraSorteada.toUpperCase()}`);
                // desativa os botões restantes
                document.querySelectorAll(".letters-section button").forEach(b => b.disabled = true);
            }
        }
    }); 
}); 

