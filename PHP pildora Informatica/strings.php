<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .resaltar{
            color:#F00;
            font-weight: bold;;
        }
    </style>
</head>
<body>
    <?php

        $nombre = 'Juan';

        echo '<p class = "resaltar">Frase de ejemplo.</p>';
        echo '<p class = \'resaltar\'>Frase de ejemplo 2.</p>';
        # Forma de concatenar sin usar el punto
        echo "Hola $nombre<br>";

        $var1 = 'casa';
        $var2 = 'CASA';

        # Devuelve 1 si no son iguales, 0 si lo son, strcamp
        # strcasecmp, comprueba que coinciden, ambos se traducen en booleanos 'true/false'
        $resultado = strcasecmp($var1,$var2);
        echo "El resultado es $resultado<br>";
    
        if($resultado){
            echo 'No coinciden';
        }else{
            echo 'Coinciden';
        }



    ?>
</body>
</html>