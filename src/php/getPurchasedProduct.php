<?php
header('Content-Type: application/json');

include_once("conexao.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = json_decode(file_get_contents('php://input'), true);

    $userId = $jsonData['id_user'];

    try {
        // Preparar a query para buscar produtos comprados pelo usuário
        $query = "SELECT * FROM product WHERE comprador_id = :userId";
        $stmt = $connection->prepare($query);
        $stmt->bindParam(':userId', $userId);

        if ($stmt->execute()) {
            $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $response = array('success' => true, 'products' => $result);
        } else {
            $response = array('success' => false, 'message' => 'Erro ao buscar produtos comprados');
        }

        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    } catch (\PDOException $err) {
        $response = array('success' => false, 'message' => $err->getMessage());
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }
} else {
    $response = array('success' => false, 'message' => 'Método não permitido');
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}
?>
