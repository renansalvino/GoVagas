import axios from 'axios';

const api = axios.create({ baseURL: "http://192.168.15.99:5000/api/" })

export default api;

// Ler sobre, Métodos fecth `${API_URL}/Vagas/${id}`