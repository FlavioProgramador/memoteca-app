const URL_BASE = "http://localhost:3000"

const api = {
  async buscarPensamentos() {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos`);
      return response.data;
    } catch (error) {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },

  async salvarPensamento(pensamento) {
    try {
      const response = await axios.post(`${URL_BASE}/pensamentos`, pensamento)
      return response.data;
    } catch (error) {
      alert("Erro ao salvar pensamentos");
      throw error;
    }
  },
  async buscarPensamentosPorId(id) {
    try {
      const response = await axios.get(`${URL_BASE}/pensamentos/${id}`);
      return response.data;
    } catch (error) {
      alert("Erro ao buscar pensamentos");
      throw error;
    }
  },
  async editarPensamento(pensamento) {
    try {
      const response = await axios.put(
        `${URL_BASE}/pensamentos/${pensamento.id}`, pensamento)
      return response.data;
    } catch (error) {
      alert("Erro ao editar pensamento!");
      throw error;
    }
  },

  async excluirPensamento(id) {
    try {
      const response = await axios.delete(`${URL_BASE}/pensamentos/${id}`);
      return response.data;
    } catch (error) {
      alert("Erro ao excluir pensamento")
    }
  }
};

export default api;
