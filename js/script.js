// =================================================================
// 1. LÓGICA DEL BOTÓN DE SCROLL (GLOBAL)
//    - Sacado del bloque principal para que sea accesible desde el HTML (onclick)
// =================================================================

// Función para subir arriba: DEBE ser global.
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// Lógica para mostrar/ocultar el botón
let botonArriba = document.getElementById("btnScrollArriba");

// Se activa cada vez que el usuario hace scroll
window.onscroll = function() {
    // Si el scroll está a más de 200px, muestra el botón
    if (document.documentElement.scrollTop > 200) { 
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }
};

// =================================================================
// 2. CÓDIGO INICIAL (Tu función auto-ejecutable existente)
// =================================================================

(function(){
    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const saved = localStorage.getItem('theme');
    function applyTheme(t){ if(t==='dark') root.setAttribute('data-theme','dark'); else root.removeAttribute('data-theme'); }
    applyTheme(saved || (prefersDark? 'dark':'light'));
    themeToggle.addEventListener('click', ()=>{
        const active = root.getAttribute('data-theme')==='dark' ? 'dark' : 'light';
        const next = active==='dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });

    // Mobile menu
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.getElementById('main-nav');
    menuToggle && menuToggle.addEventListener('click', ()=>{ nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex'; });

    // Year
    // Colocamos el código del año aquí dentro, donde estaba originalmente.
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple form validation
    const form = document.getElementById('contact-form');
    form && form.addEventListener('submit', (e)=>{
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();
        if(!name || !email || !message){
            alert('Por favor completa todos los campos.');
            return;
        }
        // Simula envío
        alert('Gracias, ' + name + '. Tu mensaje ha sido recibido (simulado).');
        form.reset();
    });

    // small enhancement: add loaded class for animations
    window.addEventListener('load', ()=> document.body.classList.add('loaded'));
})();