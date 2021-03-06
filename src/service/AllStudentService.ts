import { getRepository} from 'typeorm'

import Students from '../database/models/Students';
import { AllStudentsInterface } from './interfaces/StudentsServiceInterfaces'


class AllStudentsService{
    public async execute(  
        { 
            skipPagination = 0, 
            takeMax = 10,
        }:AllStudentsInterface)
        {
            const studentsRepository = getRepository(Students)

            const AllStudent = await studentsRepository.find({skip: skipPagination})

            let element = []

            for (let index = 0; index < takeMax; index++) {
                if(AllStudent[index] != null){
                    element.push(AllStudent[index]) 
                }
           }

            if(Math.round(AllStudent.length/takeMax) < AllStudent.length/takeMax ){
                var pages = Math.round(AllStudent.length/takeMax) + 1
            }else{
                var pages = Math.round(AllStudent.length/takeMax)
            }


            return {element, pages}
    }
}

export default AllStudentsService