import axios from 'axios';

export const clientsApi = axios.create( {
	baseURL: import.meta.env.VITE_API_URL,
} );