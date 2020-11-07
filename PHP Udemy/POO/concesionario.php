<?php
class Compra_vehiculo{
    private $precio_base;
    # No es la forma correcta 100% de USO solo de static debido a que se puede manipular, habria que añadir static o no
    # 'Static' pertenece solo a la clase
    # private static $ayuda = 4500;
    private static $ayuda = 0;
    
    #Constructor
    function Compra_vehiculo($gama){
        if ($gama=="urbano") {
            $this->precio_base=10000;
        }elseif($gama=="compacto"){
            $this->precio_base=20000;
        }elseif($gama=='berlina'){
            $this->precio_base=30000;
        }
    }
    # Métodos
    function climatizador(){
        $this->precio_base+=2000;        
    }
    
    function navegador_gps(){
        $this->precio_base+=2500;        
    }

    function tapiceria_cuero($color){
        if ($color=='blanco') {
            $this->precio_base+=3000;
        }elseif($color=='beige'){
            $this->precio_base+=3500;
        }else{
            $this->precio_base+=5000;
        }
        
    }
    # Método estatico
    # 'self::' es para referenciar a la clase estatica
    static function descuento_gobierno(){
        # date ('fecha actual > fecha propuesta')
        if (date('m-d-y')>'11-01-20') {
            self::$ayuda = 4500;
        }
        
    }

    function precio_final(){
        # 'self::' es para referenciar a la clase estatica
        $valor_final = $this->precio_base - self::$ayuda; 
        return $valor_final ;
    }
    
}
?>