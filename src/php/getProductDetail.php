<?php

header('Content-Type: application/json');

include_once("conexao.php");

if ($_SERVER['REQUEST_METHOD'] === 'GET' && isset($_GET['id_product'])) {
    
    $productId = $_GET['id_product'];

    try {
        // Preparar a query de obtenção de detalhes do produto
        $query = "SELECT * FROM product WHERE id_product = :id_product";
        $stmt = $connection->prepare($query);

        $stmt->bindParam(':id_product', $productId);

        // Executar a query
        if ($stmt->execute()) {
            $product = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($product) {
                // Detalhes do produto obtidos com sucesso
                $response = array('success' => true, 'product' => $product);
            } else {
                // Produto não encontrado
                $response = array('success' => false, 'message' => 'Produto não encontrado');
            }
        } else {
            // Erro na execução da query
            $response = array('success' => false, 'message' => 'Erro ao obter detalhes do produto');
        }

        // Retorna uma resposta em JSON para o JavaScript
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    } catch (\PDOException $err) {
        // Erro na conexão ou execução da query
        $response = array('success' => false, 'message' => $err->getMessage());
        echo json_encode($response, JSON_UNESCAPED_UNICODE);
    }
} else {
    // Retorna uma resposta em JSON para o JavaScript
    $response = array('success' => false, 'message' => 'Requisição inválida');
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

?>