import { Router } from 'react-router-dom';
import SubjectController from '../controllers/SubjectController';

const subjectRoutes = (router) => {
    router.post('/api/subject/createSubject', SubjectController.CreateSubject);
    router.get('/api/subject/getSubject/:id', SubjectController.GetSubject);
    router.get('/api/subject/getAllSubjects', SubjectController.GetAllSubjects);
    router.put('/api/subject/updateSubject/:id', SubjectController.UpdateSubject);
    router.delete('/api/subject/deleteSubject/:id', SubjectController.DeleteSubject);
};

export default subjectRoutes;