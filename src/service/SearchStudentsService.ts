import { getRepository, Like } from 'typeorm'

import { SearchStudentsInterface } from './interfaces/StudentsServiceInterfaces'
import Students from '../database/models/Students';

class SearchStudentsService{
    public async execute(
        {searchParameters, 
        skipPagination = 0, 
        takeMax = 1,
    }:SearchStudentsInterface)
        {
        const studentsRepository = getRepository(Students); 

        const searchResults = await studentsRepository.createQueryBuilder("students")
            .where("students.address LIKE :address", { address: `%${searchParameters}%` })
            .orWhere("students.nome LIKE :nome", { nome: `%${searchParameters}%` })
            .orWhere("students.material_list LIKE :material_list", { material_list: `%${searchParameters}%` })
            .skip(skipPagination)
            .getMany();

            let element = []

            for (let index = 0; index < takeMax; index++) {
                if(searchResults[index] != null){
                 element.push(searchResults[index]) 
                }
            }

             if(Math.round(searchResults.length/takeMax) < searchResults.length/takeMax ){
                 var pages = Math.round(searchResults.length/takeMax) + 1
             }else{
                 var pages = Math.round(searchResults.length/takeMax)
             }

             
        return {element, pages};       
    }
}

export default SearchStudentsService