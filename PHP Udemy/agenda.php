<html>
	<head>
		<title>Pruebas PHP.udemy</title>
	</head>
	<body>	
        <h2>Agenda Telefónica</h2>
        <?php 
            //Funcion sin return
            function usuario($nombre, $tlfn){
                echo $nombre ."<br>";
                echo $tlfn."<br>";
                echo "<hr>";
            }

            usuario('bennlli mass', '651-588-887');
            usuario('juan menos', '588-588-887');
            usuario('maria lapi', '651-588-887');
            usuario('pedro goma', '651-588-588');
            usuario('elena pelo', '651-887-887');
        ?>

            <hr><hr>
        <?php 
            //Funcion con return
            function usuarios($nombres, $tlfns){
                return $contactos = $nombres ." - ". $tlfns."<br>";
            }

            $usuarios = usuarios('bennlli mass', '651-588-887');
            echo $usuarios;
            $usuarios = usuarios('juan menos', '588-588-887');
            echo $usuarios;
            $usuarios = usuarios('maria lapi', '651-588-887');
            echo $usuarios;
        ?>

	</body>
</html>