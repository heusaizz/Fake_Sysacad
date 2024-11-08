import { useEffect, useState } from 'react';
import { getAdminData } from '../api/api';
import { useAuth } from '../context/useAuth'; // Cambia la importación en tus componentes

const AdminView = () => {
    const { token } = useAuth();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getAdminData(token);
                setUsers(response.data);
            } catch (error) {
                console.error('Error al obtener datos del administrador', error);
            }
        };
        fetchData();
    }, [token]);

    return (
        <div>
            <h2>Vista del Administrador</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AdminView;