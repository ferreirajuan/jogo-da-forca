# 🎯 Jogo da Forca – Tema: Frutas 🍌🍊🍓

Este é um projeto simples e divertido de **Jogo da Forca**, desenvolvido com **HTML, CSS e JavaScript puro**, com o tema de **frutas**.  
O objetivo é adivinhar o nome da fruta sorteada antes que o boneco da forca seja completamente desenhado na tela.

---

## 🕹️ Como funciona

Assim que a página é carregada, o jogo sorteia automaticamente uma palavra de uma lista de frutas.  
Cada letra da palavra é representada por um espaço vazio (`_`).  
O jogador deve clicar nas letras do alfabeto para tentar adivinhar.  

- **Se acertar:** a letra aparece na posição correta.  
- **Se errar:** o boneco da forca aparece parte por parte.  
- **Se o boneco for completado:** o jogador perde e a palavra correta é exibida.  

O jogo também possui um **menu de pausa** que pode ser aberto e fechado com os botões do cabeçalho.

---

## 🧠 Tecnologias utilizadas

- **HTML5** → estrutura do jogo e containers de elementos.  
- **CSS3** → estilização, layout responsivo e organização visual.  
- **JavaScript (ES6+)** → sorteio de palavras, controle das letras, acertos, erros e exibição do boneco da forca.

---

## 🧩 Lógica do jogo

- A palavra é sorteada de um **array de frutas** no `script.js`.  
- Cada letra é convertida em um espaço visual (`_`) dinamicamente.  
- As letras do alfabeto são criadas via JavaScript como **botões interativos**.  
- Cada clique desativa o botão da letra para evitar repetição.  
- A cada erro, a função `atualizarBoneco()` é chamada, trocando a imagem do boneco.  
- O jogo termina quando todas as letras são descobertas ou o boneco é totalmente exibido.

---

## 🚧 Melhorias futuras

O projeto está funcional, mas ainda possui pontos a serem melhorados:

- ✅ Melhor **responsividade** (ajustar layout em telas menores, como celulares).  
- 🔁 Adicionar **botão de reiniciar** que sorteia uma nova palavra sem recarregar a página.  
- 💬 Criar mensagens visuais de **vitória** e **derrota**.  
- 🎨 Adicionar **efeitos visuais** e **sons** para acertos e erros.  
- 🧩 Implementar **níveis de dificuldade** (palavras maiores, categorias diferentes).  
- 🧠 Refatorar o código JS para torná-lo mais modular e fácil de manter.

---

## 📁 Estrutura de pastas

/assets
├── icons/
│ ├── pause.svg
│ ├── close.svg
│ └── restart.svg
│
└── elements/
├── gibbet.svg
├── hangman-1.svg
├── hangman-2.svg
├── hangman-3.svg
├── hangman-4.svg
├── hangman-5.svg
├── hangman-6.svg
└── hangman-7.svg

index.html
style.css
script.js

---

## 🧑‍💻 Desenvolvido por

**Juan Ferreira**  
🎓 Formado em Desenvolvimento de Software Multiplataforma – Fatec Osasco  
💻 Foco em aprimoramento contínuo em desenvolvimento web frontend/backend.  

---