function changeTheme() {
    const body = document.body;
    body.classList.toggle('mode-sombre');
}

function clickHandler() {
    alert("Le bouton a été cliqué !");
}
const monBouton = document.getElementById('button');
monBouton.addEventListener('click', changeTheme); 