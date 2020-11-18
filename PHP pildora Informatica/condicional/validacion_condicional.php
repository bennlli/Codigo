<style>

</style>
<?php
if(isset($_POST['enviando'])){

    $contra = $_POST['contra'];
    $nombre = $_POST['nombre_usuario'];

    # Operador ternario
    $resultado = $nombre == "benlli" && $contra == "1234" ? "Puedes acceder" : "No puedes acceder";
    
    echo $resultado;
}
?>