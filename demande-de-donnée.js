
function fetchSimulatedData() {
    return new Promise((resolve,reject) => {
        const delay = Math.random() * 3000 + 1000;
        setTimeout (() => {
            if (Math.random() > 1) {
                resolve(["Donnée 1","Donnée 2","Donnée 3",]);
            } else {
                reject("Erreur : impossible de récupéré les données");
            }
        }, delay)
    })
}

let errorCount = 0

async function loadData() {
    try {
        const result = await fetchSimulatedData();
        document.getElementById("data").textContent = result;
        console.log(data);
    } catch (error) {
        errorCount++;
        document.getElementById("errors").textContent = errorCount;
        console.log(error);
        console.log("Nombre d'erreurs :", errorCount);
    }
}

const monBouton = document.getElementById('btn');
monBouton.addEventListener('click', loadData); 
