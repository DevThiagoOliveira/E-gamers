<?php
header('Content-Type: application/json');

include_once("conexao.php");

if ($_SERVER['REQUEST_METHOD'] === 'DELETE' && isset($_GET['id_product'])) {

    $productId = $_GET['id_product'];

    try {
        // Preparar a query de exclusão
        $query = "DELETE FROM product WHERE id_product = :id_product";
        $stmt = $connection->prepare($query);

        $stmt->bindParam(':id_product', $productId);

        // Executar a query
        if ($stmt->execute()) {
            // Exclusão bem-sucedida
            $response = array('success' => true, 'message' => 'Produto excluído com sucesso');
        } else {
            // Erro na exclusão
            $response = array('success' => false, 'message' => 'Erro ao excluir o produto');
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
    $response = array('success' => false, 'message' => 'Método não permitido');
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}

?>
