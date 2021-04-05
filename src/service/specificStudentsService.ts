import { getRepository } from 'typeorm'

import { SpecificStudentsIntrface } from './interfaces/StudentsServiceInterfaces'
import Students from '../database/models/Students';

class SpecificStudentsService{
    public async execute(
        {
            create_user_id,
            skipPagination=0, 
            takeMax= 10 
        }:SpecificStudentsIntrface)
        {
        const studentsRepository = getRepository(Students); 

    
        const SpecificStudents = await studentsRepository.find({where: {create_user_id}, skip:skipPagination})

        let element = []

        for (let index = 0; index < takeMax; index++) {
            if(SpecificStudents[index] != null){
             element.push(SpecificStudents[index]) 
            }
        }

         if(Math.round(SpecificStudents.length/takeMax) < SpecificStudents.length/takeMax ){
             var pages = Math.round(SpecificStudents.length/takeMax) + 1
         }else{
             var pages = Math.round(SpecificStudents.length/takeMax)
         }

         
             
        return {element, pages};       
    }
}

export default SpecificStudentsService