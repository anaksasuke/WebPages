<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type');
    require 'conexion.php';

    $data = json_decode(file_get_contents("php://input"));
    $idRol = $data->idRol;
    $nombreRol = $data->nombre;
    $sentencia = $mysqli->prepare("call sp_update_Rol(?,?)");
    $sentencia->bind_param("is" , $idRol, $nombreRol); // s->string , i->interos, b->boleanos 
    $sentencia->execute();
    $result = $sentencia->get_result();
    $respuesta = $result->fetch_assoc();
    $sentencia->close();
    echo json_encode($respuesta);
     //termina sentencia preparada 
    $mysqli->close(); //cierra conexion de base de datos*/

?>