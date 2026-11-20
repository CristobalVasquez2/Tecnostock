
(() => {
    'use strict';

    // Validación de formularios
    document.querySelectorAll('.needs-validation').forEach((form) => {
        form.addEventListener('submit', (event) => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        });
    });

    // Confirmación de acciones
    document.querySelectorAll('[data-confirm]').forEach((form) => {
        form.addEventListener('submit', (event) => {
            const mensaje = form.dataset.confirm || '¿Deseas continuar?';

            if (!window.confirm(mensaje)) {
                event.preventDefault();
            }
        });
    });

    // Cambio de tema claro y oscuro
    const botonTema = document.getElementById('cambiarTema');
    const iconoTema = document.getElementById('iconoTema');
    const textoTema = document.getElementById('textoTema');

    function actualizarBotonTema() {
        const temaActual = document.documentElement.getAttribute('data-bs-theme');

        if (iconoTema && textoTema) {
            iconoTema.textContent = temaActual === 'dark' ? '☀️' : '🌙';

            textoTema.textContent = temaActual === 'dark'
                ? 'Modo claro'
                : 'Modo oscuro';
        }
    }

    if (botonTema) {
        actualizarBotonTema();

        botonTema.addEventListener('click', () => {
            const temaActual = document.documentElement.getAttribute('data-bs-theme');

            const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';

            document.documentElement.setAttribute('data-bs-theme', nuevoTema);

            localStorage.setItem('tecnostock-tema', nuevoTema);

            actualizarBotonTema();
        });
    }
})();
