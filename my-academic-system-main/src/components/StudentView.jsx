import { useEffect, useState } from 'react';
import { useAuth } from '../context/useAuth'; // Cambia la importación en tus componentes
import { getStudentData } from '../api/api';

const StudentView = () => {
    const { token } = useAuth();
    const [subjects, setSubjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getStudentData(token);
                setSubjects(response.data);
            } catch (error) {
                console.error('Error al obtener datos del alumno', error);
            }
        };
        fetchData();
    }, [token]);

    return (
        <div>
            <h2>Vista del Alumno</h2>
            <ul>
                {subjects.map((subject) => (
                    <li key={subject.id}>{subject.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default StudentView;