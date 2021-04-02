import { getRepository } from 'typeorm'

import {  } from './interfaces/StudentsServiceInterfaces'
import Students from '../database/models/Students';

class SpecificStudentsService{
    public async execute()
        {
        const studentsRepository = getRepository(Students); 

    
        const SpecificStudents = await studentsRepository.find()

             
        return SpecificStudents;       
    }
}

export default SpecificStudentsService