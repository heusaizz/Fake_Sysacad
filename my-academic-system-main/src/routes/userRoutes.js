import { Router } from 'react-router-dom';
import AdminController from '../controllers/AdminController'; // Asegúrate de importar los controladores adecuados

const userRoutes = (router) => {
    router.post('/api/admin/createUser ', AdminController.CreateUser );
    router.get('/api/admin/getUser ById/:id', AdminController.GetUser ById);
    router.get('/api/admin/getAllUsers', AdminController.GetAllUsers);
    router.put('/api/admin/updateUser /:id', AdminController.UpdateUser );
    router.delete('/api/admin/deleteUser /:id', AdminController.DeleteUser );
};

export default userRoutes;