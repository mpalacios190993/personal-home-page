document.addEventListener('DOMContentLoaded', function() {

    var images = document.querySelectorAll('.clickable');

    images.forEach(function(image) {
        image.addEventListener('click', function() {

            var id = image.getAttribute('data-id');
            var cardBodyContent = document.getElementById('card-body-' + id).innerHTML;

            var newCard = document.createElement('div');
            newCard.className = 'card card-overlay';
            newCard.innerHTML = `
                <div class="card-body">
                    ${cardBodyContent}
                </div>
            `;

            var container = image.closest('.image-container');
            container.appendChild(newCard);
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {

    const images = [
        "https://cdn.masterclassphotographers.com/wp-content/uploads/2021/08/11100845/reinhart-julian-WxM465oM4j4-unsplash.jpg",
        "https://www.dzoom.org.es/wp-content/uploads/2020/01/falsos-mitos-fotografia-equipo-camara-tripode-estabilidad-734x489.jpg",
        "https://cc-prod.scene7.com/is/image/CCProdAuthor/AdobeStock_126571809-1?$pjpeg$&jpegSize=200&wid=690"
    ];

    let currentIndex = 0;

    const carouselImage = document.getElementById('carousel-image');

    function updateImage() {
        carouselImage.src = images[currentIndex];
    }

    updateImage();

    document.getElementById('prevBtn').addEventListener('click', function(event) {
        event.preventDefault(); 
        currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
        updateImage();
    });

    document.getElementById('nextBtn').addEventListener('click', function(event) {
        event.preventDefault();
        currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
        updateImage();
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const accordionLinks = document.querySelectorAll('.toggle-collapse');

    accordionLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = document.querySelector(link.getAttribute('data-target'));

            if (target.classList.contains('show')) {
                target.classList.remove('show');
            } else {
                // Cerrar cualquier otro acordeón abierto
                document.querySelectorAll('.collapse.show').forEach(function(openItem) {
                    openItem.classList.remove('show');
                });
                
                // Mostrar el acordeón actual
                target.classList.add('show');
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const resetButton = document.getElementById('resetButton');
    const form = document.querySelector('form');

    resetButton.addEventListener('click', function() {
        // Resetea todos los campos del formulario
        form.reset();

        // Remover las clases de validación
        form.querySelectorAll('.is-valid, .is-invalid').forEach(function(input) {
            input.classList.remove('is-valid', 'is-invalid');
        });
    });
});

// Evento para agregar imágenes subidas desde el dispositivo
document.getElementById('addImageBtn').addEventListener('click', function() {
    const input = document.getElementById('imageInput');
    const gallery = document.getElementById('portfolioGallery');

    const files = input.files;
    if (files.length === 0) {
        alert('Por favor, selecciona una o más imágenes.');
        return;
    }

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const imgURL = URL.createObjectURL(file);

        const imgDiv = document.createElement('div');
        imgDiv.classList.add('col-md-3', 'col-sm-6', 'mt-3');

        const imgElement = document.createElement('img');
        imgElement.src = imgURL;
        imgElement.classList.add('img-fluid', 'img-thumbnail');
        imgElement.alt = `Imagen ${gallery.children.length + 1}`;

        imgDiv.appendChild(imgElement);
        gallery.appendChild(imgDiv);
    }

    input.value = '';
});

// Evento para agregar imágenes mediante URL
document.getElementById('addImageURLBtn').addEventListener('click', function() {
    const input = document.getElementById('imageURLInput');
    const gallery = document.getElementById('portfolioGallery');
    const url = input.value.trim();

    if (url === '') {
        alert('Por favor, ingresa una URL válida.');
        return;
    }

    const imgDiv = document.createElement('div');
    imgDiv.classList.add('col-md-3', 'col-sm-6', 'mt-3');

    const imgElement = document.createElement('img');
    imgElement.src = url;
    imgElement.classList.add('img-fluid', 'img-thumbnail');
    imgElement.alt = `Imagen ${gallery.children.length + 1}`;

    imgDiv.appendChild(imgElement);
    gallery.appendChild(imgDiv);

    input.value = '';
});

