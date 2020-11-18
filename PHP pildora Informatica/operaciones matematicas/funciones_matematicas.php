<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php 
        $num1 = rand(10,50);
        echo 'El número generado aleatorio es: '.$num1.'<br>';
        $num2 =pow(5,2);
        echo 'El número al 5 al cubo es: '.$num2.'<br>';

        # Casting explicito
        $num3 = '5';
        $resultado = (int)$num3;
        echo 'El resultado es '.$resultado.'<br>';
    ?>
</body>
</html>