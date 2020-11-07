<?php
    class Coche{
        # 'Protected' permite a la clase que hereda acceder a ella
        protected $ruedas;
        var $color;
        protected $motor;
        
    
        # Método Contructor indica el estado inicial de los objetos
        function __construct(){
            $this->ruedas = 4;
            $this->color = "";
            $this->motor = 1600;
        }
        
        # Función o método
        function arrancar(){
            echo 'Estoy arrancando<br>';
        }
        function girar(){
            echo 'Estoy girando<br>';
        }
        function frenar(){
            echo 'Estoy frenando<br>';
        }
        
        # SETTER - Modificar las propiedades del objeto
        # Función para establecer color
        function set_color($color_coche,$nombre_coche){
            $this ->color = $color_coche;
            echo 'El color de '.$nombre_coche.', es '. $this->color .'<br>';
        }
        # GETTER - Ver las propiedades del obejto
        function get_Ruedas(){
            return $this->ruedas;
        }
        function get_Motor(){
            return $this->motor;
        }
    }
    #------------------------------------------------------------------------------------
    # Para heredar de la clase Coche
    class Camion extends Coche{
            
        # Método Contructor indica el estado inicial de los objetos
        function __construct(){
            $this->ruedas = 8;
            $this->color = "Gris";
            $this->motor = 2600;
        }
        # Sobre escritura de Método 'establece_color'
        # Función para establecer color
        function set_color($color_camion,$nombre_camion){
            $this ->color = $color_camion;
            echo 'El color de '.$nombre_camion.', es '. $this->color .'<br>';

        }
        function arrancar(){
            # Llama a la función arrancar sin llegar a machacar/modificarla y podemos agregar cosas
            parent::arrancar();
            echo 'Camión arrancado';
            
        }
    }
    ?>