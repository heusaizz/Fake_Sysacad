import axios from 'axios';

const API_URL = 'http://localhost:7191/api'; // Cambia esta URL según tu configuración

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});

// Función para autenticar
export const authenticate = async (credentials) => {
    return await api.post('/Authentication/Authenticate', credentials);
};

// Funciones para obtener datos según el rol
export const getStudentData = async (token) => {
    return await api.get('/Client/GetAllSubjectsEnrollments', {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const getProfessorData = async (professorId, token) => {
    return await api.get(`/Professor/${professorId}/clients`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export const getAdminData = async (token) => {
    return await api.get('/Admin/GetAllUsers', {
        headers: { Authorization: `Bearer ${token}` }
    });
};