<?php 
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Origin: http://localhost:4200"); //AQUI TAMBIEN SE CAMBIA
    header("Access-Control-Allow-Methods: OPTIONS,POST,GET");
    
    $host_name = 'localhost';
    $database = 'cartel';
    $user_name = 'root';
    $password = 'password';
    $port='3306'; //Podría ser otro

    /*
        * Escribiremos un código controlado, que vaya evaluando las variables
        * Nunca podemos dar por hecho que las cosas funcionarán porque sí
    */  

    /* OBJETO CONEXIÓN */
    $connect = new mysqli($host_name, $user_name, $password, $database, $port);

    // /* check connection */
    // if (mysqli_connect_errno()) {
    //     printf("Connect failed: %s\n", mysqli_connect_error());
    //     exit();
    // }
    // /* check if server is alive */
    // if (mysqli_ping($connect)) {
    //     printf ("Our connection is ok!\n");
    // } else {
    //     printf ("Error: %s\n", mysqli_error($connect));
    // }
    // echo(date("Y-m-d H:i:s", strtotime($_POST['timestamp'])));
    
    function myGetResult( $Statement ) {
        $RESULT = array();
        $Statement->store_result();
        for ( $i = 0; $i < $Statement->num_rows; $i++ ) {
            $Metadata = $Statement->result_metadata();
            $PARAMS = array();
            while ( $Field = $Metadata->fetch_field() ) {
                $PARAMS[] = &$RESULT[ $i ][ $Field->name ];
            }
            call_user_func_array( array( $Statement, 'bind_result' ), $PARAMS );
            $Statement->fetch();
        }
        return $RESULT;
    }
?>