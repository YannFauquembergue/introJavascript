function fetchDonnees() {
    fetch(
        "http://192.168.64.155/serverweb/package.json",
        { method: 'GET' }
    ).then(
        response => response.json()
    ).then(
        response2 => document.getElementById("result").innerHTML = JSON.stringify(response2)
    ).catch(error => console.log("Erreur : " + error));
}

document.addEventListener("DOMContentLoaded", fetchDonnees);