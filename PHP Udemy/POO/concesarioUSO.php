<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include "concesionario.php";
    # Para llamar el método statico comun para todos.
    Compra_vehiculo::descuento_gobierno();

    # Primer Cliente 
    $compra_Antonio = new Compra_vehiculo('compacto');
    $compra_Antonio->climatizador();
    $compra_Antonio->tapiceria_cuero('blanco');
    echo 'El precio final es de '.$compra_Antonio->precio_final().'€<br>';
    
    # Segundo Cliente
    $compra_Ana = new Compra_vehiculo('compacto');
    $compra_Ana->climatizador();
    $compra_Ana->tapiceria_cuero('Rojo');
    echo 'El precio fina es de '.$compra_Ana->precio_final().'<br>';



    ?>
</body>
</html>