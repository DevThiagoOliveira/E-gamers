import "../assets/css/config.css";
import Icon from "../modules/ferramentas/icon";
import Product from "../modules/DB/products";
import layoutItem from "../modules/ferramentas/layoutItem";
import "../modules/ferramentas/navBarImport";
import User from "../modules/DB/users";
import Quill from "quill";

if (sessionStorage.getItem("status") != "true") {
  window.location.href =
  `${baseUrl}/E-gamers/`;
}

// ----------------------------------------------------- Const and var
const userId = parseInt(sessionStorage.getItem("id_usuario"));
const username = sessionStorage.getItem("username");

const productForm = document.querySelector("#addProduct");
const perfilName = document.querySelector(".perfil-name");
const perfilIcon = document.querySelector(".perfil-img");
const label = document.querySelector(".page-label");
const buttonAdd = document.querySelector(".button-add");
const inputFile = document.querySelector(".picture__input");
const pictureImage = document.querySelector(".picture__image");
const secondGrid = document.querySelector(".second-grid");
const accountConfig = document.querySelector(".account-config");
const itens = document.querySelector(".itens");
const baseUrl = window.location.origin;

const inputNickname = document.querySelector(".nickname");
const inputPhone = document.querySelector(".telefone");
const inputCpf = document.querySelector(".cpf");
const inputEmail = document.querySelector(".email");

let isEditMode = false;

// ----------------------------------------------------- object
const products = new Product(userId);
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

  if (element.target.classList.contains("button-add") && !isEditMode) {
    openAddPopup();
  }

  if (element.target.classList.contains("close-popup")) {
    closePopup();
    isEditMode = false;
    const saveButton = document.querySelector(".popup .edit-product");
    const popupTitle = document.querySelector(".popup h2.layout-h2");

    saveButton.style.display = "none"; // Defina o estilo do botão para "block"

    popupTitle.innerText = `Adicionar Produto`;
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
    `${baseUrl}/E-gamers/`;
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

function clearPopupFields() {
  const productNameInput = document.querySelector('.popup input[name="name"]');
  const productPriceInput = document.querySelector(
    '.popup input[name="price"]'
  );
  const productCategoryInput = document.querySelector(
    '.popup input[name="category"]'
  );
  const productPortableToggleInput = document.querySelector(
    ".popup .switch-label .switch #toggle-input"
  );
  const productDescriptionInput = document.querySelector(
    ".popup #editor .ql-editor"
  );
  const productAmoutInput = document.querySelector(
    '.popup input[name="amount"]'
  );

  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productPortableToggleInput.checked = false;
  productDescriptionInput.innerHTML = "";
  productAmoutInput.value = "";
}

// Abrir Popup
function openAddPopup() {
  const saveButton = document.querySelector(".popup .add-product");
  saveButton.style.display = "block";

  const editButton = document.querySelector(".popup .edit-product");
  editButton.style.display = "none";

  // Limpe os campos do popup
  clearPopupFields();

  const pop = (document.querySelector("#popup").style.display = "block");
}

// Fechar o popup
function closePopup() {
  const popup = document.querySelector("#popup");
  popup.style.display = "none";

  const inputFields = productForm.querySelectorAll("input, textarea");

  inputFields.forEach((input) => {
    input.value = "";
  });
}

// ----------------------------------------------------- QUILL

const quillOptions = {
  modules: {
    toolbar: [
      [{ font: [] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ size: ["small", false, "large", "huge"] }], // custom dropdown

      ["bold", "italic", "underline", "strike"], // toggled buttons
      ["blockquote", "code-block"],

      [{ header: 1 }, { header: 2 }], // custom button values
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }], // superscript/subscript
      [{ indent: "-1" }, { indent: "+1" }], // outdent/indent
      [{ direction: "rtl" }], // text direction

      [{ color: [] }, { background: [] }], // dropdown with defaults from theme
      [{ align: [] }],

      ["clean"], // remove formatting button
    ],
  },
  placeholder: "Descrição",
  theme: "snow",
};

const quill = new Quill("#editor", quillOptions);

// ----------------------------------------------------- Lógica para adicionar o produto

const toggleInput = document.getElementById("toggle-input");
const sendData = document.getElementById("send-data"); // Adicione um id ao botão que envia os dados

let freteGratis = false;

toggleInput.addEventListener("change", () => {
  freteGratis = !freteGratis;
});

async function addProduct() {
  const formData = new FormData(productForm);
  const jsonData = {};
  const description = quill.root.innerHTML; // Obtém o conteúdo do editor Quill

  for (const [name, value] of formData.entries()) {
    jsonData[name] = value;
  }

  jsonData["seller_id"] = userId;
  jsonData["seller_name"] = username;
  jsonData["description"] = description;
  jsonData["frete_gratis"] = freteGratis ? 1 : 0;
  
  // Verificar se o dado do formData é uma imagem
  if (formData.get("image") instanceof File) {
    // Salvar a imagem no cache do navegador
    const fileReader = new FileReader();

    fileReader.onload = function (event) {
      const base64Image = event.target.result;
      jsonData["image"] = base64Image;
      const send = sendDataToPHP(jsonData);
    };

    fileReader.readAsDataURL(formData.get("image"));
  } else {
    sendDataToPHP(jsonData); // Se não for uma imagem, enviar os dados normalmente
  }
}

async function sendDataToPHP(jsonData) {
  try {
    // Enviando o objeto JSON para o arquivo PHP usando fetch
    const response = await fetch(
      `${baseUrl}/E-gamers/src/php/enviarProduto.php`,
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

    // if(data.message.includes("Produto adicionado com sucesso")) {
    //   closePopup();
    //   updateProductList(); // Atualizar a lista de produtos
    // }
  } catch (error) {
    console.error(error);
  }
}

// ----------------------------------------------------- Get Produtos
async function createProductList(responseData) {
  const itemList = document.querySelector(".itens ul");
  itemList.innerHTML = "";

  for (const [id, dado] of Object.entries(responseData.products)) {
    const productId = parseInt(id) + 1;
    const item = new layoutItem(dado.nome_produto, dado.imagem);
    const liElement = item.createLi();

    liElement.setAttribute("data-id", dado.id_product);

    itemList.appendChild(liElement);
  }
}

async function showMyProducts() {
  try {
    clearProductList();
    const responseData = await products.product(
      `${baseUrl}/E-gamers/src/php/getProduct.php`
    );
    createProductList(responseData);
  } catch (err) {
    console.error(err);
  }
}

async function showMyPurchases() {
  try {
    clearProductList();
    const responseData = await products.product(
      `${baseUrl}/E-gamers/src/php/getPurchasedProduct.php`
    );
    createProductList(responseData);
  } catch (err) {
    console.error(err);
  }
}

async function updateProductList() {
  try {
    const responseData = await products.product(
      `${baseUrl}/E-gamers/src/php/getProduct.php`
    );
    createProductList(responseData);
  } catch (err) {
    console.error(err);
  }
}

// Função auxiliar para limpar a lista de produtos
function clearProductList() {
  const productList = document.querySelector("ul");
  productList.innerHTML = "";
}

// ----------------------------------------------------- Edit

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("fa-gear")) {
    const productId = event.target.closest("li").getAttribute("data-id");
    isEditMode = true;
    const pop = (document.querySelector("#popup").style.display = "block");
    openEditPopup(productId);
  }

  if (event.target.classList.contains("fa-trash")) {
    const productId = event.target.closest("li").getAttribute("data-id");

    deleteProduct(productId);
  }
});

// Função para abrir o popup de edição com os detalhes do produto
function openEditPopup(productId) {
  const popupTitle = document.querySelector(".popup h2.layout-h2");
  const saveButton = document.querySelector(".popup .edit-product");
  saveButton.style.display = "block"; // Defina o estilo do botão para "block"
  saveButton.setAttribute("data-product-id", productId); // Defina o atributo data-product-id

  // Lógica para obter os detalhes do produto com o ID productId do servidor
  getProductDetails(productId)
    .then((productDetails) => {
      // Preencha os campos do popup com os detalhes do produto
      const productNameInput = document.querySelector(
        '.popup input[name="name"]'
      );
      const productPriceInput = document.querySelector(
        '.popup input[name="price"]'
      );
      const productCategoryInput = document.querySelector(
        '.popup input[name="category"]'
      );
      const productPortableToggleInput = document.querySelector(
        ".popup .switch-label .switch #toggle-input"
      );
      const productDescriptionInput = document.querySelector(
        ".popup #editor .ql-editor"
      );
      const productAmoutInput = document.querySelector(
        '.popup input[name="amount"]'
      );

      popupTitle.innerText = `Editar Produto - ${productDetails.product.nome_produto}`;
      productNameInput.value = productDetails.product.nome_produto;
      productCategoryInput.value = productDetails.product.categoria;
      productPriceInput.value = parseInt(productDetails.product.preco);
      productAmoutInput.value = parseInt(productDetails.product.quantidade);
      productDescriptionInput.innerHTML = productDetails.product.descricao;

      productPortableToggleInput.checked = productDetails.product.frete === "1";

      saveButton.addEventListener("click", async (event) => {
        event.preventDefault();

        // Obter os campos do popup
        const productId = saveButton.getAttribute("data-product-id");
        const productNameInput = document.querySelector(
          '.popup input[name="name"]'
        );
        const productPriceInput = document.querySelector(
          '.popup input[name="price"]'
        );
        const productCategoryInput = document.querySelector(
          '.popup input[name="category"]'
        );
        const productAmoutInput = document.querySelector(
          '.popup input[name="amount"]'
        );
        const productPortableToggleInput = document.querySelector(
          ".popup .switch-label .switch #toggle-input"
        );
        const productDescriptionInput = document.querySelector(
          ".popup #editor .ql-editor"
        );

        const updatedProduct = {
          id_product: productId, // Adicione o ID do produto aqui
          name: productNameInput.value,
          category: productCategoryInput.value,
          price: productPriceInput.value,
          amount: productAmoutInput.value,
          portage: productPortableToggleInput.checked ? 1 : 0,
          description: productDescriptionInput.innerHTML,
        };

        try {
          // Lógica para enviar os detalhes atualizados do produto para o servidor
          const response = await updateProductDetails(updatedProduct);

          if (response.ok) {
            closePopup(); // Feche o popup após a atualização
            updateProductList(); // Atualize a lista de produtos
            isEditMode = false;
            saveButton.style.display = "none";
            popupTitle.innerText = `Adicionar Produto`;
          } else {
            console.error("Erro ao atualizar o produto");
          }
        } catch (error) {
          console.error(error);
        }
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

// Função para buscar os detalhes do produto por ID no servidor
async function getProductDetails(productId) {
  try {
    const response = await fetch(
      `${baseUrl}/E-gamers/src/php/getProductDetail.php?id_product=${productId}`
    );
    if (response.ok) {
      const productDetails = await response.json();
      return productDetails;
    } else {
      throw new Error("Erro ao obter detalhes do produto");
    }
  } catch (error) {
    throw error;
  }
}

// Função para enviar os detalhes atualizados do produto para o servidor
async function updateProductDetails(updatedProduct) {
  try {
    const response = await fetch(
      `${baseUrl}/E-gamers/src/php/putProduct.php`,
      {
        method: "PUT",
        body: JSON.stringify(updatedProduct),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response;
  } catch (error) {
    throw error;
  }
}

// Função para deletar um produto
async function deleteProduct(productId) {
  try {
    const response = await fetch(
      `${baseUrl}/E-gamers/src/php/deleteProduct.php?id_product=${productId}`,
      {
        method: "DELETE",
      }
    );

    if (response.ok) {
      // Atualize a lista de produtos após a exclusão
      updateProductList();
    } else {
      console.error("Erro ao excluir o produto.");
    }
  } catch (error) {
    console.error(error);
  }
}

// ----------------------------------------------------- Barra de pesquisa
const consultBar = document.querySelector(".consult-bar");

consultBar.addEventListener("input", () => {
  const searchTerm = consultBar.value.toLowerCase();
  filterItems(searchTerm);
});

function filterItems(searchTerm) {
  const itemList = document.querySelector(".itens ul");
  const items = itemList.querySelectorAll(".layout-item");

  items.forEach((item) => {
    const itemName = item
      .querySelector(".product-label")
      .innerText.toLowerCase();
    if (itemName.includes(searchTerm)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

consultBar.addEventListener("input", () => {
  const searchTerm = consultBar.value.toLowerCase();
  if (searchTerm === "") {
    showAllItems();
  } else {
    filterItems(searchTerm);
  }
});

function showAllItems() {
  const itemList = document.querySelector(".itens ul");
  const items = itemList.querySelectorAll(".layout-item");
  items.forEach((item) => {
    item.style.display = "flex";
  });
}

// ----------------------------------------------------- Account Config

// Função para formatar o CPF
function maskCpf(cpf) {
  const visibleDigits = cpf.substring(0, cpf.length - 2);
  const lastDigits = cpf.slice(-2);
  const maskedDigits = "*".repeat(3); // Total de dígitos visíveis

  return `${maskedDigits}.${maskedDigits}.${maskedDigits}-${lastDigits}`;
}

// Função para formatar o email
function formatEmail(email) {
  const atIndex = email.indexOf("@");
  const maskedEmail = email.split("").map((char, index) => {
    if (index >= 3 && index < atIndex) {
      return "*";
    } else {
      return char;
    }
  });
  return maskedEmail.join("");
}

function maskPhoneNumber(phoneNumber) {
  // Remove todos os caracteres não numéricos do número de telefone
  const numericPhone = phoneNumber.replace(/\D/g, "");

  if (numericPhone.length === 11) {
    // Para números com DDD, aplica a máscara (##) #####-####
    const maskedPhone = numericPhone.replace(
      /(\d{2})(\d{5})(\d{4})/,
      "($1) $2-$3"
    );
    return maskedPhone;
  } else {
    // Para outros números, retorna (00) 00000-0000
    return "(00) 00000-0000";
  }
}

const userObject = new User();

try {
  const userResponseData = userObject.userData();

  userResponseData
    .then((response) => {
      const userData = response.user[0];

      perfilName.innerText = userData.nome_usuario;

      // Preencher campos de entrada com os dados obtidos
      inputNickname.value = userData.nome_usuario;
      inputPhone.value = maskPhoneNumber(userData.telefone);
      inputCpf.value = maskCpf(userData.cpf);
      inputEmail.value = formatEmail(userData.email);
    })
    .catch((error) => {
      console.error("Erro ao obter os dados do usuário:", error);
    });
} catch (error) {
  console.error("Erro ao processar os dados:", error);
}
