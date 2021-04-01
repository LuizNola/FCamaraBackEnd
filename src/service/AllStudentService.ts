import { getRepository} from 'typeorm'

import Students from '../database/models/Students';
import { AllStudentsInterface } from './interfaces/StudentsServiceInterfaces'


class AllStudentsService{
    public async execute()
        {
            const studentsRepository = getRepository(Students)

            const AllStudent = await studentsRepository.find()
    

            return AllStudent
    }
}

export default AllStudentsService