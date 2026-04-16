document.querySelectorAll("nav a").forEach(enlace => {
    enlace.addEventListener("click", function() {
        alert("Navegando a la sección: " + this.textContent);
    });
});
