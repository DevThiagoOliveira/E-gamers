<?php

header('Content-Type: application/json');

include_once("conexao.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = json_decode(file_get_contents('php://input'), true);

    $comprador_id = null;
    $vendedor_id = $jsonData['seller_id'];
    $vendedor_nome = $jsonData['seller_name'];
    $nome = $jsonData['name'];
    $categoria = $jsonData['category'];
    $imagemJson = $jsonData['image'];
    $preco = $jsonData['price'];
    $quantidade = $jsonData['amount'];
    $descricao = $jsonData['description'];
    $frete = $jsonData['frete_gratis'];

    $directory = '../assets/img/product/';
    if (!is_dir($directory)) {
        mkdir($directory, 0777, true); // Cria o diretório com permissões de leitura, gravação e execução para todos os usuários
    }

    // Decodificar a imagem em base64 e salvar no servidor
    if ($imagemJson != 'data:application/octet-stream;base64,') {
        $imagemBase64 = explode(',', $imagemJson);
        $imagemDecodificada = base64_decode($imagemBase64[1]);

        $nome_imagem = 'imagem_produto_' . time() . '.png';
        file_put_contents(dirname($directory) . '/product/' . $nome_imagem, $imagemDecodificada);
    }

    try {
        // Preparar a query de inserção
        $query = "INSERT INTO product (vendedor_id, vendedor_nome, comprador_id, nome_produto, categoria, imagem, frete, preco, quantidade, descricao) VALUES (:vendedor_id, :vendedor_nome, :comprador_id, :nome, :categoria, :imagem, :frete, :preco, :quantidade, :descricao)";
        $stmt = $connection->prepare($query);
        
        $stmt->bindParam(':vendedor_id', $vendedor_id);
        $stmt->bindParam(':vendedor_nome', $vendedor_nome);
        $stmt->bindParam(':comprador_id', $comprador_id);
        $stmt->bindParam(':nome', $nome);
        $stmt->bindParam(':categoria', $categoria);
        $stmt->bindParam(':frete', $frete);
        $stmt->bindParam(':imagem', $nome_imagem);
        $stmt->bindParam(':preco', $preco);
        $stmt->bindParam(':quantidade', $quantidade);
        $stmt->bindParam(':descricao', $descricao);
        
        // Executar a query
        if ($stmt->execute()) {
            // Inserção bem-sucedida
            $response = array('success' => true, 'message' => 'Produto adicionado com sucesso');
        } else {
            // Erro na inserção
            $response = array('success' => false, 'message' => 'Erro ao adicionar o produto');
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
