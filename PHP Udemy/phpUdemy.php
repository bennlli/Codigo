<!DOCTYPE html>
<html>
	<head>
		<title>Pruebas PHP.udemy</title>
	</head>
	<body>	
		<h1>Aprendiendo php dice mi colega</h1><hr>
		<ul>
		<!--Forma de crear un 'ARRAY' y recorrerlo con un 'FOR EACH'-->
		<?php $arrayIndexado = array('css','jquery','php','mysql','null');?>
			<!--Forma de separar los 'FOR EACH' con el ':' y continuarlo mas abajo-->
			<?php foreach ($arrayIndexado as $arrayIndex):?>
				<li><?php echo $arrayIndex;?></li>
			<?php endforeach; ?>
		</ul>	

		
		<!--USO DEL 'FOR lOOPS' mas complicado en PHP porque necesita usar de un 'count'


		<?php $equipos = array('barsa','sevilla','malaga','betis','madrid','valencia');?>
		<!--USO DEL 'WHILE' -->
		<!-- Inicializar la variable que ira en incremento -->
		<?php $incremento = 0;?>
		<?php while ($incremento <= count($equipos)){
			//Comprobar si el 'ARRAY' esta vacio	
			if(count($equipos)>0){
				//Imprimimos la posicion del 'ARRAY'
				echo $equipos[$incremento].'<br>';
				//Se le añade '+1' para que la cantidad de elementos del 'ARRAY' sean iguales
				if($incremento+1 === count($equipos)){
				echo 'fin';
				}
			}else {
			echo 'no hay resultados';
		}
		$incremento++;
	}?>

	</body>
</html>