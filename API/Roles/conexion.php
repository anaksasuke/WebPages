<?php
    $servername = "localhost";
    $username = "root";
    $password = "Teniente1";
    $database = "webPages";

    $mysqli = new mysqli($servername, $username, $password, $database);

    if(mysqli_connect_errno()){
        printf("Conexion fallo : %\n", mysqli_connect_errno());
        exit();
    }
?>