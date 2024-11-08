import { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth'; // Cambia la importación en tus componentes
import { getProfessorData } from '../api/api';

const ProfessorView = () => {
    const { token } = useAuth();
    const [students, setStudents] = useState([]);
    const professorId = '123'; // Cambia esto según tu lógica

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getProfessorData(professorId, token);
                setStudents(response.data);
            } catch (error) {
                console.error('Error al obtener datos del profesor', error);
            }
        };
        fetchData();
    }, [token]);

    return (
        <div>
            <h2>Vista del Profesor</h2>
            <ul>
                {students.map((student) => (
                    <li key={student.id}>{student.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ProfessorView;