import { Router } from 'express';


import CreateUserService from '../service/CreateUserService'

const usersRouter = Router();

usersRouter.post('/', async (req, res) => {
    
        const { name, email, pass} = await req.body; 

        //Service com as regras de negocio 
        const createUser = new CreateUserService();

        const user = await createUser.execute({ name, email, pass });

        return res.json(user);
    
})

export default usersRouter;