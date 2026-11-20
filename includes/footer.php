
<footer class="container py-4 mt-5 text-center text-secondary small">
    TecnoStock · Sistema de Inventario
</footer>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

<?php
$archivoJs = __DIR__ . '/../assets/js/validaciones.js';
$versionJs = filemtime($archivoJs);
?>

<script src="/TecnoStock/assets/js/validaciones.js?v=<?= $versionJs ?>"></script>

</body>
</html>
