let numeroImage = 0;
const imagesParChargement = 10;
const urls = ["https://picsum.photos/id/0/400/300",
    "https://picsum.photos/id/1/400/300",
    "https://picsum.photos/id/2/400/300",
    "https://picsum.photos/id/3/400/300",
    "https://picsum.photos/id/4/400/300",
    "https://picsum.photos/id/5/400/300",
    "https://picsum.photos/id/6/400/300",
    "https://picsum.photos/id/7/400/300",
    "https://picsum.photos/id/8/400/300",
    "https://picsum.photos/id/9/400/300"
]


// Fonction pour charger 10 images
function loadGalerie() {

    for (let i = 0; i < imagesParChargement; i++) {

        const img = document.createElement("img");

        img.src = `https://picsum.photos/400/300?random=${numeroImage}`;

        img.alt = "Image de la galerie " + numeroImage;

        img.draggable = true;

        galerie.appendChild(img);

        numeroImage++;
    }
}

loadGalerie();

window.addEventListener("scroll", () => {

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
    ) {

        loadGalerie();

    }

});
