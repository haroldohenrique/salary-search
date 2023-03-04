<?php

    header('Content-Type: application/json');

    $pdo = new PDO("mysql:host=localhost; dbname=salary-search","root","root");
    $profissao = $_POST['profissao'];
    // echo json_encode($_POST);
    
    $query = "INSERT INTO tb_profissao VALUES (0, :profissao)";

        $sth = $pdo->prepare($query);
        $sth->bindValue(':profissao', $profissao);

        $sth->execute();

    echo json_encode("ok");
