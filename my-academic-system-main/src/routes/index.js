import { Router } from 'react-router-dom';
import userRoutes from './userRoutes';
import subjectRoutes from './subjectRoutes';
import enrollmentRoutes from './enrollmentRoutes';
import authRoutes from './authRoutes';

const routes = (router) => {
    userRoutes(router);
    subjectRoutes(router);
    enrollmentRoutes(router);
    authRoutes(router);
};

export default routes;