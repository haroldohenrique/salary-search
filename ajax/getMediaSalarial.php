<?php

    header('Content-Type: application/json');

    $pdo = new PDO("mysql:host=localhost; dbname=salary-search","root","");

    $empresa = $_POST['empresa'];
    $profissao = $_POST['profissao'];
    $sexo = $_POST['sexo'];


    $query = "SELECT avg(salario) as media
                from tb_usuario 
                where idtb_empresa = :id_empresa 
                    and idtb_profissao = :id_profissao 
                    and sexo = :sexo;";

    $sth = $pdo->prepare($query);
    $sth->bindValue(':id_empresa', $empresa);
    $sth->bindValue(':id_profissao', $profissao);
    $sth->bindValue(':sexo', $sexo);

    $sth->execute();
    $media = $sth->fetchAll(PDO::FETCH_ASSOC);
    $media = $media[0]['media'] / 10;

    

    $media = number_format($media, 2);

    $media = explode(".", $media);

    $media[0] = str_replace(",",".", $media[0]);

    echo json_encode(implode(",", $media));