<?php
header('Content-Type: application/json');

include_once("conexao.php");

try {
    $jsonData = json_decode(file_get_contents('php://input'), true);

    $user_id = $jsonData['user_id'];
    $username = $jsonData['user_name'];

    $query = "SELECT * FROM tb_usuarios WHERE id_usuario = :id_usuario AND login = :nome_usuario";

    $stmt = $connection->prepare($query);

    $stmt->bindParam(':id_usuario', $user_id);
    $stmt->bindParam(':nome_usuario', $username);

    $stmt->execute();
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(array('user' => $result));

} catch (\PDOException $err) {
    $response = array('success' => false, 'message' => $err->getMessage());
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}