import { Router } from 'react-router-dom';
import EnrollmentController from '../controllers/EnrollmentController';

const enrollmentRoutes = (router) => {
    router.post('/api/enrollment/createEnrollment', EnrollmentController.CreateEnrollment);
    router.get('/api/enrollment/getEnrollment/:id', EnrollmentController.GetEnrollment);
    router.get('/api/enrollment/getAllEnrollments', EnrollmentController.GetAllEnrollments);
    router.put('/api/enrollment/updateEnrollment/:id', EnrollmentController.UpdateEnrollment);
    router.delete('/api/enrollment/deleteEnrollment/:id', EnrollmentController.DeleteEnrollment);
};

export default enrollmentRoutes;