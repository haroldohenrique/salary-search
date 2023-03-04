<?php

    header('Content-Type: application/json');

    $pdo = new PDO("mysql:host=localhost; dbname=salary-search","root","root");


    $query = "SELECT * FROM tb_profissao";
    $sth = $pdo->prepare($query);
    $sth->execute();
    $profissoes = $sth->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode($profissoes);
