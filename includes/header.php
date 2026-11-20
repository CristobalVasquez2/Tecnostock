<?php
$titulo = $titulo ?? 'TecnoStock';
?>
<!doctype html>
<html lang="es" data-bs-theme="light">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <script>
        (() => {
            const temaGuardado = localStorage.getItem('tecnostock-tema');
            const tema = temaGuardado === 'dark' ? 'dark' : 'light';

            document.documentElement.setAttribute('data-bs-theme', tema);
        })();
    </script>

    <title><?= htmlspecialchars($titulo) ?> | TecnoStock</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="/TecnoStock/assets/css/estilos.css">
</head>
<body class="bg-body-tertiary">
