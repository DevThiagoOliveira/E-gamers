<?php

include_once("conexao.php");

// Consulta SQL
$query = "SELECT id_usuario, login, senha FROM tb_usuarios";
$stmt = $connection->query($query);
$result = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode(array('usuarios' => $result));
?>
