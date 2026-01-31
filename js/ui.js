import api from "./api.js";

/**
 * Camada de UI responsável por:
 * - Renderizar pensamentos na tela
 * - Preencher formulário para edição
 * - Lidar com ações de editar e excluir no DOM
 */
const ui = {
  /**
   * Preenche o formulário com os dados de um pensamento
   * para permitir edição.
   * @param {number} pensamentoId
   */
  async preencherFormulario(pensamentoId) {
    const pensamento = await api.buscarPensamentosPorId(pensamentoId);

    document.getElementById("pensamento-id").value = pensamento.id;
    document.getElementById("pensamento-conteudo").value = pensamento.conteudo;
    document.getElementById("pensamento-autoria").value = pensamento.autoria;
  },

  /**
   * Renderiza todos os pensamentos na lista
   */
  async renderizarPensamentos() {
    try {
      const container = document.getElementById("lista-pensamentos-container");
      const listaPensamentos = document.getElementById("lista-pensamentos");

      let estadoVazio = document.getElementById("estado-vazio");

      const pensamentos = await api.buscarPensamentos();

      // Limpa a lista antes de renderizar
      listaPensamentos.innerHTML = "";

      // Caso não existam pensamentos, exibe estado vazio
      if (pensamentos.length === 0) {
        if (!estadoVazio) {
          estadoVazio = criarEstadoVazio();
          container.appendChild(estadoVazio);
        }
        return;
      }

      // Remove estado vazio se existir
      if (estadoVazio) {
        estadoVazio.remove();
      }

      // Renderiza pensamentos normalmente
      pensamentos.forEach(ui.adicionarPensamentoNaLista);
    } catch (error) {
      console.error(error);
      alert("Erro ao renderizar pensamentos");
    }
  },

  /**
   * Cria e adiciona um item de pensamento na lista
   * @param {Object} pensamento
   */
  adicionarPensamentoNaLista(pensamento) {
    const listaPensamentos = document.getElementById("lista-pensamentos");

    // Item principal
    const li = document.createElement("li");
    li.dataset.id = pensamento.id;
    li.classList.add("li-pensamento");

    // Ícone decorativo
    const iconeAspas = document.createElement("img");
    iconeAspas.src = "./assets/imagens/aspas-azuis.png";
    iconeAspas.alt = "aspas azuis";
    iconeAspas.classList.add("icone-aspas");

    // Conteúdo do pensamento
    const pensamentoConteudo = document.createElement("div");
    pensamentoConteudo.textContent = pensamento.conteudo;
    pensamentoConteudo.classList.add("pensamento-conteudo");

    // Autoria do pensamento
    const pensamentoAutoria = document.createElement("div");
    pensamentoAutoria.textContent = pensamento.autoria;
    pensamentoAutoria.classList.add("pensamento-autoria");

    // Botão de editar
    const botaoEditar = document.createElement("button");
    botaoEditar.classList.add("botao-editar");
    botaoEditar.onclick = () => ui.preencherFormulario(pensamento.id);

    const iconeEditar = document.createElement("img");
    iconeEditar.src = "./assets/imagens/icone-editar.png";
    iconeEditar.alt = "Editar pensamento";
    botaoEditar.appendChild(iconeEditar);

    // Botão de excluir
    const botaoExcluir = document.createElement("button");
    botaoExcluir.classList.add("botao-excluir");
    botaoExcluir.onclick = async () => {
      const confirmar = confirm(
        "Tem certeza que deseja excluir este pensamento?",
      );
      if (!confirmar) return;

      try {
        await api.excluirPensamento(pensamento.id);
        ui.renderizarPensamentos();
      } catch (error) {
        console.error(error);
        alert("Erro ao excluir pensamento!");
      }
    };

    const iconeExcluir = document.createElement("img");
    iconeExcluir.src = "./assets/imagens/icone-excluir.png";
    iconeExcluir.alt = "Excluir pensamento";
    botaoExcluir.appendChild(iconeExcluir);

    // Container de ações
    const icones = document.createElement("div");
    icones.classList.add("icones");
    icones.appendChild(botaoEditar);
    icones.appendChild(botaoExcluir);

    // Montagem final do item
    li.appendChild(iconeAspas);
    li.appendChild(pensamentoConteudo);
    li.appendChild(pensamentoAutoria);
    li.appendChild(icones);

    listaPensamentos.appendChild(li);
  },
};

function criarEstadoVazio() {
  const estadoVazio = document.createElement("div");
  estadoVazio.id = "estado-vazio";
  estadoVazio.classList.add("estado-vazio");

  const mensagem = document.createElement("p");
  mensagem.textContent =
    "Nada por aqui ainda, que tal compartilhar alguma ideia?";

  const imagem = document.createElement("img");
  imagem.src = "./assets/imagens/lista-vazia.png";
  imagem.alt = "Lista vazia";

  estadoVazio.appendChild(mensagem);
  estadoVazio.appendChild(imagem);

  return estadoVazio;
}

export default ui;
