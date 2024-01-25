function cerca() {
    var ricerca = document.getElementById("searchInput").value;
    window.location.href = ricerca + ".html";
}

// Aggiungi questa funzione per gestire l'invio del modulo quando si preme "Invio"
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        cerca();
    }
});
