import { useAuth } from '../context/useAuth'; // Cambia la importación en tus componentes
import { authenticate } from '../api/api'; 
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Login = () => { const [credentials, setCredentials] = useState({ username: '', password: '' }); const { login } = useAuth(); const navigate = useNavigate();

const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await authenticate(credentials);
        login(response.data.user, response.data.token);
        navigate('/student'); // Redirigir según el rol del usuario
    } catch (error) {
        console.error('Error de autenticación', error);
    }
};

return (
    <div>
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                placeholder="Usuario"
                value={credentials.username}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Contraseña"
                value={credentials.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Iniciar Sesión</button>
        </form>
    </div>
);
};

export default Login;