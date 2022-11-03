<?php
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Headers: Content-Type');
    require 'conexion.php';
    $data = json_decode(file_get_contents("php://input"));
    $nombreRol = $data->nombre;
    $sentencia = $mysqli->prepare("call sp_create_Rol(?)");
    $sentencia->bind_param("s" , $nombreRol); // s->string , i->interos, b->boleanos 
    $sentencia->execute();
    $result = $sentencia->get_result();
    $respuesta = $result->fetch_assoc();
    echo json_encode($respuesta);
    $sentencia->close(); //termina sentencia preparada 
    $mysqli->close(); //cierra conexion de base de datos*/


?>