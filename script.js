// Variáveis para controlar o estado dos cliques
let contadorClique = 0;
const gifs = ["gif_original.gif", "ursinho-fofo-cara-de-bravo.gif", "novo_gif2.gif"]; // Lista de GIFs para alternar
let gifIndex = 0; // Índice para navegar pelos GIFs

// Função que será chamada quando o botão for clicado
document.getElementById('no').addEventListener('click', function() {
    contadorClique++;

    // Mudar o texto do botão após o primeiro clique
    if (contadorClique === 1) {
        document.getElementById('no').textContent = "Você tem certeza disso?";
    } 
    // Remover o texto do botão após o segundo clique
    else if (contadorClique === 2) {
        document.getElementById('no').textContent = ""; // Apaga o texto
        contadorClique = 0; // Reinicia contador para o próximo ciclo de cliques
    }

    // Mudar o GIF a cada clique
    gifIndex = (gifIndex + 1) % gifs.length;  // Alterna entre os GIFs da lista
    document.getElementById('image').src = gifs[gifIndex];
});
