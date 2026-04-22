<?php
    $server= "localhost";
    $user=  "root";
    $password= "";
    $database= "dbweb";

    try{
        $conn = new PDO("mysql:host=$server;dbname=$database;", $user, $password);
        $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connected successfully";
    } catch(PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
    }
?>