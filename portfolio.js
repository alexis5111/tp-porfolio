
function changeTheme() {
    const body = document.body;
    body.classList.toggle('mode-sombre');
}

function clickHandler() {
    alert("Le bouton a été cliqué !");
}


$('#button').hover(
    function () { changeTheme() }
)
const monBouton = document.getElementById('button');
monBouton.addEventListener('click', changeTheme); 


