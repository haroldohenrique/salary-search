<?php

    header('Content-Type: application/json');

    $pdo = new PDO("mysql:host=localhost; dbname=salary-search","root","");

    // echo json_encode($_POST);

    $nome = $_POST['nome'];
    $empresa = $_POST['empresa'];
    $profissao = $_POST['profissao'];
    $sexo = $_POST['sexo'];
    $salario = $_POST['salario'];
    
    $query = "INSERT INTO tb_usuario VALUES (0, :nome, :empresa, :profissao, :sexo, (:salario*100))";

        $sth = $pdo->prepare($query);

        // $salario = floatval($_POST['salario']) * 100;
        // echo json_encode($salario);

        $sth->bindValue(':nome', $nome);
        $sth->bindValue(':empresa', $empresa);
        $sth->bindValue(':profissao', $profissao);
        $sth->bindValue(':sexo', $sexo);
        $sth->bindValue(':salario', $salario);

        $sth->execute();

    echo json_encode("ok");
