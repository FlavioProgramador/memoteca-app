
# 🧠 Memoteca

**Memoteca** é uma aplicação web para organizar pensamentos, trechos de músicas, citações de livros e ideias pessoais em um único lugar.
O projeto implementa um CRUD completo (Create, Read, Update, Delete) consumindo uma API REST simulada com **JSON Server**.

---

## ✨ Funcionalidades

* ➕ Criar novos pensamentos
* 📄 Listar pensamentos cadastrados
* ✏️ Editar pensamentos existentes
* 🗑️ Excluir pensamentos
* 🧠 Estado vazio (mensagem exibida quando não há pensamentos cadastrados)
* 🔄 Atualização automática da lista após cada operação

---

## 🛠️ Tecnologias Utilizadas

* **JavaScript (ES6+)**
* **HTML5**
* **CSS3**
* **Fetch API**
* **JSON Server** (API fake)
* **Node.js**

---

## 🧩 Arquitetura do Projeto

O projeto segue uma separação clara de responsabilidades:

```text
📁 js
 ├── api.js    → Comunicação com a API (CRUD)
 ├── ui.js     → Manipulação do DOM e interações visuais
 └── main.js   → Controle de eventos e fluxo da aplicação
```

* `api.js`: responsável pelas requisições HTTP (GET, POST, PUT, DELETE)
* `ui.js`: responsável por renderizar os pensamentos e controlar ações de editar/excluir
* `main.js`: responsável por inicializar a aplicação e controlar o formulário

---

## ▶️ Como Executar o Projeto

### 🔧 Pré-requisitos

* Node.js (versão utilizada: **20.x**)
* JSON Server instalado globalmente

```bash
npm install -g json-server
```

---

### 🚀 Executando a API (Backend Fake)

1. Acesse a pasta do backend
2. Inicie o JSON Server:

```bash
json-server --watch db.json --port 3000
```

A API estará disponível em:

```
http://localhost:3000/pensamentos
```

---

### 💻 Executando o Frontend

1. Abra o projeto no **Visual Studio Code**
2. Utilize a extensão **Live Server**
3. Clique com o botão direito no arquivo `index.html`
4. Selecione **Open with Live Server**

---

## 📌 Exemplo de Requisições

* **GET** `/pensamentos`
* **GET** `/pensamentos/:id`
* **POST** `/pensamentos`
* **PUT** `/pensamentos/:id`
* **DELETE** `/pensamentos/:id`

---

## 🎯 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:

* Prática de JavaScript moderno
* Consumo de APIs REST
* Organização de código frontend
* Manipulação de DOM
* Boas práticas de separação de responsabilidades
* Desenvolvimento de um CRUD completo para portfólio

---

## 👨‍💻 Autor

Desenvolvido por **Flavio da Costa Marques** junto a **Alura**.

* 📧 Email: [flavionegocios2004@gmail.com](mailto:flavionegocios2004@gmail.com)
* 🔗 GitHub: [FlavioProgramador](https://github.com/FlavioProgramador)

---

## 📄 Licença

Projeto com fins educacionais.
Sem fins comerciais.

---

### ✅ Avaliação honesta

