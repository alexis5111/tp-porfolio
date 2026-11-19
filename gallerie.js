const gallery = document.getElementById("gallery");

// Fonction pour récupérer une image
async function fetchImage() {
    const response = await fetch("https://picsum.photos/400/300");

    return response.url;
}

let numeroImage = 0

async function loadImage() {
    for (let i = 0; i < 10; i++) {

        const imgUrl = await fetchImage();

        const img = document.createElement("img");

        img.src = `https://picsum.photos/400/300?random=${numeroImage}`;

        img.alt = "Image de la galerie " + numeroImage;

        img.draggable = true;
        
        img.width = 400;
        
        img.height = 300;

        galerie.appendChild(img);

        numeroImage++;
        
    }
}

loadImage();

window.addEventListener("scroll", () => {

    if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 200
    ) {

        loadImage();

    }

});