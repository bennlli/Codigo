<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<p>&nbsp;</p>
    <form name="form1" method="POST" action="">
        <p>
            <label for="num1"></label>
                <input type="text" name="num1" id="num1">
            <label for="num2"></label>
                <input type="text" name="num2" id="num2">
            <label for="operacion"></label>
                <select name="operacion" id="operacion">
                    <option>Suma</option>
                    <option>Resta</option>
                    <option>Multiplicación</option>
                    <option>División</option>
                    <option>Módulo</option>
                    <option>Incremento</option>
                    <option>Decremento</option>
                </select>
        <p>
        <p>
            <input type="submit" name="button" id="button" value="Enviar" onclick="prueba">
        </p>
    </form>
    <p>&nbsp;</p>

    <?php include ('calculadoraV2.php'); 

        # En este caso el ISSET es para saber que el usuario lo ha pulsado
        if(isset($_POST['button'])){
            
            $num1 = $_POST['num1'];
            $num2 = $_POST['num2'];
            $op = $_POST['operacion'];
            echo 'Calculo usado es ' . $op. '  y ha sido enviado.<br>';

            calcular($op);
        }
    ?>

</body>
</html>