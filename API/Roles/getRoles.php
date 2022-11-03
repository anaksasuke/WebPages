<?php
    require 'conexion.php';
    $result = $mysqli->query("SELECT * FROM roles");
    $roles = array();
    if(mysqli_num_rows($result) > 0){
        while($row = mysqli_fetch_assoc($result)){
            $roles[] = array(
                'id_rol' => $row['idRol'],
                'nombre' => $row['nombre']
            );
        }
    }

    echo json_encode($roles, JSON_PRETTY_PRINT);
    
?>