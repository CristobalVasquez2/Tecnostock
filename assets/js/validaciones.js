
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

    // Tema claro y oscuro
    const html = document.documentElement;
    const botonTema = document.getElementById('cambiarTema');
    const iconoTema = document.getElementById('iconoTema');
    const textoTema = document.getElementById('textoTema');

    function actualizarBotonTema() {
        const oscuro = html.getAttribute('data-bs-theme') === 'dark';

        if (iconoTema) {
            iconoTema.textContent = oscuro ? '☀️' : '🌙';
        }

        if (textoTema) {
            textoTema.textContent = oscuro ? 'Modo claro' : 'Modo oscuro';
        }

        if (botonTema) {
            botonTema.setAttribute(
                'aria-label',
                oscuro ? 'Activar modo claro' : 'Activar modo oscuro'
            );
        }
    }

    if (botonTema) {
        actualizarBotonTema();

        botonTema.addEventListener('click', () => {
            const temaActual = html.getAttribute('data-bs-theme');
            const nuevoTema = temaActual === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-bs-theme', nuevoTema);

            try {
                localStorage.setItem('tecnostock-tema', nuevoTema);
            } catch (error) {
                console.warn('No se pudo guardar la preferencia del tema.', error);
            }

            actualizarBotonTema();
        });
    }
})();
