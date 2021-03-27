import { getRepository } from 'typeorm'
import { hash } from 'bcryptjs'

import User from '../models/User'


interface Request {
    name: string;
    email: string;
    pass: string;
}

class CreateUserService{
    public async execute({ name, email, pass }: Request): Promise<User>{
        const usersRepository = getRepository(User);

        //vendo se o email ja esta em uso
        const checkUserExist = await usersRepository.findOne({ 
            where: { email }
        })
        if (checkUserExist){
            throw new Error('O email ja esta em uso.');
        }

        //criptografando senha
        const passHash = await hash(pass, 8)

        //Salvando ususario no banco
        const user = await usersRepository.create({
            name,
            email,
            pass: passHash
        });

        await usersRepository.save(user);
        return user;
    }
}

export default CreateUserService