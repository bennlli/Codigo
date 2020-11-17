<?php
# En este caso el ISSET es para saber que el usuario lo ha pulsado
if(isset($_POST['button'])){
            
    $num1 = $_POST['num1'];
    $num2 = $_POST['num2'];
    $op = $_POST['operacion'];
    echo 'Calculo usado es ' . $op. '  y el ha sido enviado<br>';

    calcular($op);
}

# Funcion para calcular
function calcular($calculo){
    # Para ver si son iguales en el caso de la suma
    if(!strcmp("Suma",$calculo)){
        global $num1;
        global $num2;
        $resultado = $num1+$num2;
        echo 'El resultado es: ' . ($resultado);

    }
    # Para ver si son iguales en el caso de la resta
    if(!strcmp("Resta",$calculo)){
        global $num1;
        global $num2;
        $resultado = $num1-$num2;
        echo 'El resultado es: ' . ($resultado);

    }
    # Para ver si son iguales en el caso de la multiplicación
    if(!strcmp("Multiplicación",$calculo)){
        global $num1;
        global $num2;
        $resultado = $num1*$num2;
        echo 'El resultado es: ' . ($resultado);;

    }
    # Para ver si son iguales en el caso de la división
    if(!strcmp("División",$calculo)){
        global $num1;
        global $num2;
        $resultado = $num1/$num2;
        echo 'El resultado es: ' . ($resultado);

    }
    # Para ver si son iguales en el caso del modulo
    if(!strcmp("Módulo",$calculo)){
        global $num1;
        global $num2;
        $resultado = $num1%$num2;
        echo 'El resultado es: ' . ($resultado);

        }
        # Para ver si son iguales en el caso del modulo
    if(!strcmp("Incremento",$calculo)){
        global $num1;
        $resultado = $num1++;
        echo 'El resultado es: ' . ($resultado);

        }
        # Para ver si son iguales en el caso del modulo
    if(!strcmp("Decremento",$calculo)){
        global $num1;
        $resultado = $num1--;
        echo 'El resultado es: ' . ($resultado);

        }
}


?>