<?php
header('Content-Type: application/json');

include_once("conexao.php");

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = json_decode(file_get_contents('php://input'), true);

    // Dados enviados pelo JavaScript
    $nome_usuario = strtolower($jsonData['firstName'] . $jsonData['lastName']);
    
    $cpf = $jsonData['cpf'];
    $phone = intval($jsonData['phone']);

    $email = $jsonData['email'];
    $user = $jsonData['user'];
    $password = $jsonData['password'];
    $repetPassword = $jsonData['repet-password'];
    $timestamp = date('Y-m-d H:i:s');

    if (empty($user)) {
        $user = $nome_usuario;
    }

    try {
        // Preparar a query de inserção
        $query = "INSERT INTO tb_usuarios (nome_usuario, cpf, telefone, email, login, senha, senha_confirmada, data_cadastro) VALUES (:nome_usuario, :cpf, :telefone, :email, :login, :senha, :senha_confirmada, :data_cadastro)";
        $stmt = $connection->prepare($query);
        
        $stmt->bindParam(':nome_usuario', $nome_usuario);
        $stmt->bindParam(':cpf', $cpf); 
        $stmt->bindParam(':telefone', $phone);
        $stmt->bindParam(':email', $email);
        $stmt->bindParam(':login', $user);
        $stmt->bindParam(':senha', $password);
        $stmt->bindParam(':senha_confirmada', $repetPassword);
        $stmt->bindParam(':data_cadastro', $timestamp);

        // Executar a query
        if ($stmt->execute()) {
            // Inserção bem-sucedida
            $response = array('success' => true, 'message' => 'Dados recebidos e salvos com sucesso');
        } else {
            // Erro na inserção
            $response = array('success' => false, 'message' => 'Erro ao salvar os dados no banco de dados');
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