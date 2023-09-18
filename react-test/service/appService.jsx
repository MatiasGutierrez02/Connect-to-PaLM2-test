import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

const apiService = {

  async sendRequest(inputValue) {
      const response = await axios.post(`${API_BASE_URL}/api/sendRequest`, { prompt: inputValue });
      return response.data.result;
  },
  async translate(text) {
    const response = await axios.post(`${API_BASE_URL}/api/translate`, { prompt: text });
    return response.data.result;
}
};

export default apiService;
