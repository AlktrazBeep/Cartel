<?php

    // SE MANDA A LLAMAR LA CONEXION A LA DB
    require('config.php');
    
    $entityBody = file_get_contents('php://input');
    if(isset($entityBody)){

        if($connect){
            // VARIABLES 
            $name=json_decode($entityBody)->name;//SE OBTIENEN VARIABLES DEL BODY DE LO CONTRARIO RETORNA
            if($name==null){
                return;
            }
            $arrResultado=array();//RESULTADOS
            
            $sql = "SELECT * FROM carteles WHERE nombre=?";
            $stmt=$connect->prepare($sql);
            if($stmt){
                $stmt->bind_param('s', $name);
                $stmt->execute();
                $arrDatos=myGetResult($stmt);
                
                //SI NO SE OBTUVO NADA SE INSERTA DE LO CONTRARIO MANDA ERROR
                if($arrDatos==[]){
                    $arrResultado['error'] = "No existe el cartel $name";
                }else{
                    // $arrResultado['res'] = "si existe $name";
                    $arrResultado=updateCartel($name,$connect,$arrResultado);
                }

                /* Cerramos el $stmt */
                $stmt->close();    
            }else{
                $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
            }
        }else{
            $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
        }
    }else{
        $arrResultado['error']='No se enviaron criterios en el POST';
    }

    echo(json_encode($arrResultado));

    function updateCartel($name ,$connect,$arrResultado){
        $update="UPDATE carteles SET finalizado=? WHERE nombre=?;";
        $stmt=$connect->prepare($update);//SE VUELVE A PREPARAR
        if($stmt){
            $finalizado=1;
            $stmt->bind_param('is',$finalizado,$name); //SOLO SE FINALIZA EL CARTEL
            $stmt->execute();
            $arrDatos=myGetResult($stmt);
            //SI DA RESPUESTA SI SE INSERTO
            $arrResultado['res']="Cartel Finalizado correctamente";
            /* Cerramos el $stmt */
            $stmt->close();   

            return $arrResultado;
        }else{
            $arrResultado['error']='Hubo un fallo en la consulta: '.$connect->error;
            return $arrResultado;
        }
    }
?>