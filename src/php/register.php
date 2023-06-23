<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $jsonData = json_decode(file_get_contents('php://input'), true);
    
    // Aqui você pode acessar os dados enviados pelo JavaScript
    // por exemplo:
    $firstName = $jsonData['firstName'];
    $lastName = $jsonData['lastName'];
    $cpf = $jsonData['cpf'];
    $phone = $jsonData['phone'];
    $email = $jsonData['email'];
    $user = $jsonData['user'];
    $password = $jsonData['password'];
    $repetPassword = $jsonData['repet-password'];

    // Faça o que for necessário com os dados (exemplo: salvar no banco de dados)

    // Retorna uma resposta em JSON para o JavaScript
    $response = array('success' => true, 'message' => 'Dados recebidos com sucesso');
    echo json_encode($response);
} else {
    // Retorna uma resposta em JSON para o JavaScript
    $response = array('success' => false, 'message' => "Método não permitido");
    echo json_encode($response);
}
?>