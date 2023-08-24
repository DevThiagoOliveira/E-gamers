import "../assets/css/config.css";
import Icon from "../modules/ferramentas/icon";
import Product from "../modules/DB/products";
import layoutItem from "../modules/ferramentas/layoutItem";
import "../modules/ferramentas/navBarImport";
import User from "../modules/DB/users";

if (sessionStorage.getItem("status") != "true") {
  window.location.href = "http://localhost:3000/E-gamers/public/html/index.html";
}

// ----------------------------------------------------- Const
const userId = parseInt(sessionStorage.getItem('id_usuario'));
const username = sessionStorage.getItem("username");

const productForm = document.querySelector("#addProduct");
const perfilName = document.querySelector(".perfil-name");
const perfilIcon = document.querySelector(".perfil-img");
const label = document.querySelector(".page-label");
const buttonAdd = document.querySelector(".button-add");
const inputFile = document.querySelector(".picture__input");
const pictureImage = document.querySelector(".picture__image");
const secondGrid = document.querySelector('.second-grid');
const accountConfig = document.querySelector('.account-config');

const inputNickname = document.querySelector('.nickname');
const inputPhone = document.querySelector('.telefone');
const inputCpf = document.querySelector('.cpf');
const inputEmail = document.querySelector('.email');

// ----------------------------------------------------- object
const products = new Product(userId, username);
const icon = new Icon(username);
const reader = new FileReader();

// Perfil icon
const iconPerfil = new Icon(username);

const leftPerfil = iconPerfil.create();

perfilIcon.appendChild(leftPerfil.icone);
icon.colorChange(leftPerfil.profile);

//Input Popup Picture
pictureImage.innerText = "Escolha uma imagem";

inputFile.addEventListener("change", (element) => {
  const inputTarget = element.target;

  const file = inputTarget.files[0];

  if (file) {

    reader.addEventListener("load", (element) => {
      const readerTarget = element.target;
      const img = document.createElement("img");

      img.src = readerTarget.result;
      img.classList.add("picture__img");

      pictureImage.innerText = "";
      pictureImage.appendChild(img);
    });

    reader.readAsDataURL(file);
  } else {
    pictureImage.innerText = "Escolha uma imagem";
  }
});

// ----------------------------------------------------- Configurations
document.addEventListener("click", (element) => {
  if (element.target.classList.contains("selling")) {
    secondGrid.style.display = "flex";
    accountConfig.style.display = "none";
    localStorage.setItem("lastView", "selling");
    label.innerText = "Minhas Vendas";
    buttonAdd.style.display = "inline-block";

    showMyProducts(); // Exibir produtos do usuário
  }

  if (element.target.classList.contains("buy")) {
    secondGrid.style.display = "flex";
    accountConfig.style.display = "none";
    localStorage.setItem("lastView", "buy");
    label.innerText = "Minhas Compras";
    buttonAdd.style.display = "none";
    
    showMyPurchases(); // Exibir produtos comprados pelo usuário
  }

  if (element.target.classList.contains("button-add")) {
    openPopup();
  }

  if (element.target.classList.contains("close-popup")) {
    closePopup();
  }

  if (element.target.classList.contains("add-product")) {
    addProduct();
  }

  if (element.target.classList.contains("config")) {
    secondGrid.style.display = "none";
    accountConfig.style.display = "flex";
    
  }

  if (element.target.classList.contains("exit")) {
    const exit = false;
    sessionStorage.setItem("status", exit);
    window.location.href =
      "http://localhost:3000/E-gamers/public/html/index.html";
  }
});

window.addEventListener("load", () => {
  const lastView = localStorage.getItem("lastView");
  if (lastView === "selling") {
    label.innerText = "Minhas Vendas";
    buttonAdd.style.display = "inline-block";
    showMyProducts();
  } else if (lastView === "buy") {
    label.innerText = "Minhas Compras";
    buttonAdd.style.display = "none";
    showMyPurchases();
  } else {
    label.innerText = "Minha Conta";
    buttonAdd.style.display = "none";
  }
});

// Abrir Popup
function openPopup() {
  const pop = (document.querySelector("#popup").style.display = "block");
}

// Fechar o popup
function closePopup() {
  document.querySelector("#popup").style.display = "none";

  const inputFields = productForm.querySelectorAll('input, textarea');
    
  inputFields.forEach(input => {
      input.value = '';
  });
}

// ----------------------------------------------------- Lógica para adicionar o produto

const toggleInput = document.getElementById('toggle-input');
const sendData = document.getElementById('send-data'); // Adicione um id ao botão que envia os dados

let freteGratis = false;

toggleInput.addEventListener('change', () => {
  freteGratis = !freteGratis;
});

function addProduct() {
    const formData = new FormData(productForm);
    const jsonData = {};

    for (const [name, value] of formData.entries()) {
      jsonData[name] = value;
    }

    jsonData['seller_id'] = userId;
    jsonData['seller_name'] = username;

    sendData.addEventListener('click', () => {
      jsonData['frete_gratis'] = freteGratis ? 1 : 0;
    });

    // Verificar se o dado do formData é uma imagem
    if (formData.get("image") instanceof File) {
      
      // Salvar a imagem no cache do navegador
      const fileReader = new FileReader();

      console.log(jsonData);
      
      fileReader.onload = function (event) {
        const base64Image = event.target.result;
        jsonData["image"] = base64Image;
        const send = sendDataToPHP(jsonData);
      };
      
      fileReader.readAsDataURL(formData.get("image"));  
      
    } else {
      sendDataToPHP(jsonData); // Se não for uma imagem, enviar os dados normalmente
      
    }
};

async function sendDataToPHP(jsonData) {
  try {
    // Enviando o objeto JSON para o arquivo PHP usando fetch
    const response = await fetch("http://localhost:3000/E-gamers/src/php/enviarProduto.php",
      {
        method: "POST",
        body: JSON.stringify(jsonData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(
        "Erro na solicitação. Código de status: " + response.status
      );
    }

    const data = await response.json();
    console.log(data);

    if(data.message.includes("Produto adicionado com sucesso")) {
      closePopup();
      updateProductList(); // Atualizar a lista de produtos
    }

  } catch (error) {
    console.error(error);
  }
}

// ----------------------------------------------------- Get Produtos
async function createProductList(responseData) {
  const itemList = document.querySelector('.itens ul');
  itemList.innerHTML = '';

  for (const [id, dado] of Object.entries(responseData.products)) {
      const item = new layoutItem(dado.nome_produto, dado.imagem);
      const liElement = item.createLi();
      itemList.appendChild(liElement);
  }
}

async function showMyProducts() {
  try {
      clearProductList();
      const responseData = await products.product('http://localhost:3000/E-gamers/src/php/getProduct.php');
      createProductList(responseData);
  } catch (err) {
      console.error(err);
  }
}

async function showMyPurchases() {
  try {
      clearProductList();
      const responseData = await products.product('http://localhost:3000/E-gamers/src/php/getPurchasedProduct.php');
      createProductList(responseData);
  } catch (err) {
      console.error(err);
  }
}

async function updateProductList() {
  try {
      const responseData = await products.product('http://localhost:3000/E-gamers/src/php/getProduct.php');
      createProductList(responseData);
  } catch (err) {
      console.error(err);
  }
}

// Função auxiliar para limpar a lista de produtos
function clearProductList() {
  const productList = document.querySelector('ul');
  productList.innerHTML = '';
}

// ----------------------------------------------------- Barra de pesquisa 
const consultBar = document.querySelector('.consult-bar');

consultBar.addEventListener('input', () => {
    const searchTerm = consultBar.value.toLowerCase();
    filterItems(searchTerm);
});

function filterItems(searchTerm) {
  const itemList = document.querySelector('.itens ul');
  const items = itemList.querySelectorAll('.layout-item');

  items.forEach(item => {
      const itemName = item.querySelector('.product-label').innerText.toLowerCase();
      if (itemName.includes(searchTerm)) {
          item.style.display = 'flex';
      } else {
          item.style.display = 'none';
      }
  });
}

consultBar.addEventListener('input', () => {
  const searchTerm = consultBar.value.toLowerCase();
  if (searchTerm === '') {
      showAllItems();
  } else {
      filterItems(searchTerm);
  }
});

function showAllItems() {
  const itemList = document.querySelector('.itens ul');
  const items = itemList.querySelectorAll('.layout-item');
  items.forEach(item => {
      item.style.display = 'flex';
  });
}

// ----------------------------------------------------- Account Config

// Função para formatar o CPF
function maskCpf(cpf) {
  const visibleDigits = cpf.substring(0, cpf.length - 2);
  const maskedDigits = '*'.repeat(2);
  return `${visibleDigits}${maskedDigits}`;
}

// Função para formatar o email
function formatEmail(email) {
  const atIndex = email.indexOf('@');
  const maskedEmail = email.split('').map((char, index) => {
    if (index >= atIndex) {
      return char;
    } else {
      return '*';
    }
  });
  return maskedEmail.join('');
}

function maskPhoneNumber(phoneNumber) {
  // Remove todos os caracteres não numéricos do número de telefone
  const numericPhone = phoneNumber.replace(/\D/g, '');

  if (numericPhone.length === 11) {
    // Para números com DDD, aplica a máscara (##) #####-####
    const maskedPhone = numericPhone.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
    return maskedPhone;
  } else {
    // Para outros números, retorna (00) 00000-0000
    return '(00) 00000-0000';
  }
}

const userObject = new User();

try {
  const userResponseData = userObject.userData();

  userResponseData
  .then(response => {
    
    const userData = response.user[0];
    
    perfilName.innerText = userData.nome_usuario;
    
    // Preencher campos de entrada com os dados obtidos
    inputNickname.value = userData.nome_usuario;
    inputPhone.value = maskPhoneNumber(userData.telefone);
    inputCpf.value = formatCpf(userData.cpf);
    inputEmail.value = formatEmail(userData.email);

  })
  .catch(error => {
      console.error('Erro ao obter os dados do usuário:', error);
    });

} catch (error) {
  console.error('Erro ao processar os dados:', error);
}
