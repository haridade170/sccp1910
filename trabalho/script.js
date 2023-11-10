// Array de URLs das imagens
const imagens = [
    'https://i.pinimg.com/236x/1f/ca/3a/1fca3a345a77995d192376f09acb1d8d.jpg',
    'https://i.pinimg.com/236x/c8/b1/e7/c8b1e7e65721b2e3b78f9268832a50ea.jpg',
    'https://i.pinimg.com/236x/9b/4f/10/9b4f10e3c3d0f9d512195eaa1053fed0.jpg',
    'https://i.pinimg.com/236x/75/90/cb/7590cb8292a9eb455e9f61c23fdba7cf.jpg',
    'https://i.pinimg.com/236x/3d/cc/51/3dcc51897b197f279c50b8fe50e5bcb4.jpg',
    'https://i.pinimg.com/236x/6a/e4/35/6ae4350018bf4898a054d691d9f082de.jpg',
    'https://i.pinimg.com/236x/15/0e/05/150e05aba10dbb91020e7393fcc023f5.jpg',
    'https://i.pinimg.com/236x/8e/c4/e5/8ec4e5e6850dd088a39cb9107a6073f0.jpg'
    
    // Adicione mais URLs de imagens conforme necessário
];

let currentImageIndex = 0;

// Função para preencher a galeria de imagens
function preencherGaleria() {
    const gallery = document.getElementById('imageGallery');
    const previousButton = document.getElementById('previousButton');
    const nextButton = document.getElementById('nextButton');

    function mostrarImagem(index) {
        gallery.innerHTML = ''; // Limpa a galeria

        const img = document.createElement('img');
        img.src = imagens[index];
        gallery.appendChild(img);
    }

    // Mostrar a primeira imagem ao carregar a página
    mostrarImagem(currentImageIndex);

    // Botão "Anterior"
    previousButton.addEventListener('click', () => {
        if (currentImageIndex > 0) {
            currentImageIndex--;
            mostrarImagem(currentImageIndex);
        }
    });

    // Botão "Próximo"
    nextButton.addEventListener('click', () => {
        if (currentImageIndex < imagens.length - 1) {
            currentImageIndex++;
            mostrarImagem(currentImageIndex);
        }
    });
}

// Chama a função para preencher a galeria
preencherGaleria();
