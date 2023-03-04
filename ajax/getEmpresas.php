<?php

    header('Content-Type: application/json');

    $pdo = new PDO("mysql:host=localhost; dbname=salary-search","root","");


    $query = "SELECT * FROM tb_empresa";
    $sth = $pdo->prepare($query);
    $sth->execute();
    $empresas = $sth->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($empresas);
