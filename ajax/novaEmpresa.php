<?php

    header('Content-Type: application/json');

    $pdo = new PDO("mysql:host=localhost; dbname=salary-search","root","root");
    $empresa = $_POST['empresa'];
    // echo json_encode($_POST);
    
    $query = "INSERT INTO tb_empresa VALUES (0, :empresa)";

        $sth = $pdo->prepare($query);
        $sth->bindValue(':empresa', $empresa);

        $sth->execute();

    echo json_encode("ok");
