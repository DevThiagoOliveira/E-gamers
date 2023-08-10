<?php
header('Content-Type: application/json');

include_once("conexao.php");

try {
    $jsonData = json_decode(file_get_contents('php://input'), true);
    
    $vendedor_id = $jsonData['id_user'];
    $nome_produto = $jsonData['user_name'];

    // Consulta SQL
    if($vendedor_id != '00') {
        $query = "SELECT * FROM product WHERE vendedor_id = :vendedor_id AND vendedor_nome = :nome_produto";

        $stmt = $connection->prepare($query);
        $stmt->bindParam(':vendedor_id', $vendedor_id);
        $stmt->bindParam(':nome_produto', $nome_produto);
        $stmt->execute();
    }
    
    if($vendedor_id == '00') {
        $query = "SELECT * FROM product";
        $stmt = $connection->query($query);
    }
    

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode(array('products' => $result));

} catch (\PDOException $err) {
    $response = array('success' => false, 'message' => $err->getMessage());
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
}