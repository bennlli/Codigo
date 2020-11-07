    <?php
    class Coche{
        private $ruedas;
        var $color;
        private $motor;
    
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
    ?>