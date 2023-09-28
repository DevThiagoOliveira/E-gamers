<?php

header('Content-Type: application/json');

include_once("conexao.php");

if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $jsonData = json_decode(file_get_contents('php://input'), true);

    $productId = $jsonData['id_product'];
    $nome_produto = $jsonData['name'];
    $categoria = $jsonData['category'];
    $preco = $jsonData['price'];
    $quantidade = $jsonData['amount'];
    $descricao = $jsonData['description'];
    $frete = $jsonData['portage'];

    try {
        // Preparar a query de atualização
        $query = "UPDATE p  roduct SET nome_produto = :nome_produto, categoria = :categoria, preco = :preco, quantidade = :quantidade, frete = :frete, descricao = :descricao WHERE id_product = :id_product";
        $stmt = $connection->prepare($query);

        $stmt->bindParam(':id_product', $productId);
        $stmt->bindParam(':nome_produto', $nome_produto);
        $stmt->bindParam(':categoria', $categoria);
        $stmt->bindParam(':preco', $preco);
        $stmt->bindParam(':quantidade', $quantidade);
        $stmt->bindParam(':frete', $frete);
        $stmt->bindParam(':descricao', $descricao);

        // Executar a query
        if ($stmt->execute()) {
            // Atualização bem-sucedida
            $response = array('success' => true, 'message' => 'Produto atualizado com sucesso');
        } else {
            // Erro na atualização
            $response = array('success' => false, 'message' => 'Erro ao atualizar o produto');
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
