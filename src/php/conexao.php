<?php
    try {
        $connection = new \PDO('mysql:host=127.0.0.1;dbname=TCCDB', 'root', '1234');
        $connection->setAttribute(\PDO::ATTR_ERRMODE, \PDO::ERRMODE_EXCEPTION);

        echo "Conectado com sucesso no banco de dados";
    }
    catch (\PDOException $err) {
        echo $err->getMessage();
    }