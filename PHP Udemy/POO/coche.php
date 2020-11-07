<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    include ('vehiculos.php');

    $mazda = new Coche();
    echo 'El Mazda tiene '.$mazda->get_Ruedas().' ruedas.<br>';
    echo 'El Mazda tiene un motor de '.$mazda->get_Motor().' cv.<br>';
    
    ?>

</body>
</html>