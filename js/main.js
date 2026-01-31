import ui from "./ui.js";
import api from "./api.js";

/**
 * Inicialização da aplicação após o carregamento do DOM.
 * Responsável por:
 * - Renderizar os pensamentos existentes
 * - Registrar eventos do formulário
 * - Controlar o botão de cancelamento
 */
document.addEventListener("DOMContentLoaded", () => {
  // Renderiza os pensamentos ao carregar a página
  ui.renderizarPensamentos();

  const formulario = document.getElementById("pensamento-form");
  const botaoCancelar = document.getElementById("botao-cancelar");

  // Evento de submissão do formulário (criar ou editar pensamento)
  formulario.addEventListener("submit", manipularSubmissaoFormulario);

  // Evento do botão cancelar (limpa o formulário)
  botaoCancelar.addEventListener("click", (event) => {
    event.preventDefault();
    formulario.reset();
    document.getElementById("pensamento-id").value = "";
  });
});

/**
 * Manipula a submissão do formulário de pensamentos.
 * Decide entre criar ou editar com base na existência do ID.
 *
 * @param {Event} event - Evento de submit do formulário
 */
async function manipularSubmissaoFormulario(event) {
  event.preventDefault();

  const id = document.getElementById("pensamento-id").value;
  const conteudo = document.getElementById("pensamento-conteudo").value;
  const autoria = document.getElementById("pensamento-autoria").value;

  try {
    // Se houver ID, edita o pensamento existente
    if (id) {
      await api.editarPensamento({ id, conteudo, autoria });
    } 
    // Caso contrário, cria um novo pensamento
    else {
      await api.salvarPensamento({ conteudo, autoria });
    }

    // Atualiza a lista após salvar ou editar
    ui.renderizarPensamentos();

    // Limpa o formulário e sai do modo edição
    document.getElementById("pensamento-form").reset();
    document.getElementById("pensamento-id").value = "";

  } catch (error) {
    console.error(error);
    alert("Erro ao salvar pensamento!");
  }
}
