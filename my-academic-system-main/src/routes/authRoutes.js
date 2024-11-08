import { Router } from 'react-router-dom';
import AuthenticationController from '../controllers/AuthenticationController';

const authRoutes = (router) => {
    router.post('/api/auth/authenticate', AuthenticationController.Authenticate);
};

export default authRoutes;