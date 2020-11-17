<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    # Definicion de una constante.
    define("AUTOR","Benlli");
    # Forma de imprimirla
    echo "El autor es: ". AUTOR . "<br>";

    # Algunas constantes predefinidas
    echo 'La linea de esta instrucción es: ' .__LINE__ . '<br>';
    echo 'Estamos trabajando con este fichero: ' . __FILE__ . '<br>';

    ?>
</body>
</html>