<?php
    // SE MANDA A LLAMAR LA CONEXION A LA DB
    require('config.php');
/*
    *1ª evaluación: ¿Hay POST? y ¿la conexión está activa?
    *Este sería el primer paso antes de lanzar cualquier código
    *relativo a la base de datos
*/  
    $entityBody = file_get_contents("php://input");
    if(isset($entityBody) ){
        if($connect){
            
            // VARIABLES 
            $name=json_decode($entityBody)->id;//SE OBTIENEN VARIABLES DEL BODY
            $byId=json_decode($entityBody)->byId;//SI ES POR ID
            $arrResultado=array();

             /*
            *CONSULTA PARA PREPARAR
            *En estas consultas en vez de los valores pone el signo ?
            *Habrá tantos signos ?  como valores externos se requieran
            *Aquí sólo se usa uno, pero pueden ser más
            */
            if($byId=="true"){
                $sql = "SELECT * FROM carteles WHERE id=?";
            }else{
                $sql = "SELECT * FROM carteles";
            }
            
            /*
                    *PREPARAR LA CONSULTA
            */
            $stmt=$connect->prepare($sql);
             /*
              *2ª evaluación: ¿La consulta se preparó bien?
              *Dado que el método prepare invocado antes devuelve FALSE
              *si hay algún error, podemos preguntar si $stmt es TRUE
              *Si no lo es, significa que hubo un error en la consulta
            */
            if($stmt){
                $stmt->bind_param('s', $name);
                $stmt->execute();
                $arrDatos=myGetResult($stmt);
                
                //SI NO SE OBTUVO NADA SE INSERTA DE LO CONTRARIO MANDA ERROR
                
                ($arrDatos) ? $arrResultado['res']=$arrDatos : array("error"=>"No existe el cartel $name");

                /* Cerramos el $stmt */
                $stmt->close();    
            }else{
                $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
            }
        }else{
            /* Cerramos la conexión */
            $connect->close();

            $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
        }
    }else{
        $arrResultado['error']='No se enviaron criterios en el POST';
    }
    $connect->close();
    echo(json_encode($arrResultado));


    
    
?>