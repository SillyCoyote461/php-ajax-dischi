<?php
    include_once __DIR__ . "/../db/index.php";
    
    $array = [];

    foreach ($database as $elem){
        $array[] = $elem;
    }

    header('Content-Type: application/json');
    echo json_encode($array);
?>