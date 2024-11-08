

import { Link } from 'react-router-dom'; // Importa Link

const Home = () => {
    return (
        <div>
            <h1>Bienvenido al Sistema Académico</h1>
            <Link to="/login">
                <button style={buttonStyle}>Iniciar Sesión</button>
            </Link>
        </div>
    );
};

// Estilo del botón (opcional)
const buttonStyle = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    textDecoration: 'none', // Elimina el subrayado del link
};

export default Home;