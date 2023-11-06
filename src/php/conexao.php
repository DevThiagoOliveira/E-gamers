<?php
    try {
        $connection = new \PDO('mysql:host=monorail.proxy.rlwy.net;dbname=TCCDB', 'root', 'bE4eDDgBEHBhe4ADdf4cA6f6-fHagEDf');
        $connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);
        // echo "Conectado com sucesso no banco de dados \n";
    }
    catch (\PDOException $err) {
        echo $err->getMessage();
    }
