import { getRepository, Like } from 'typeorm'

import { SearchStudentsInterface } from './interfaces/StudentsServiceInterfaces'
import Students from '../database/models/Students';

class SearchStudentsService{
    public async execute(
        {searchParameters, 
        skipPagination = 0, 
        takeMax = 10,
    }:SearchStudentsInterface)
        {
        const studentsRepository = getRepository(Students);
        
  
        

        const searchResults = await studentsRepository.createQueryBuilder("students")
            .where("students.address LIKE :address", { address: `%${searchParameters}%` })
            .orWhere("students.nome LIKE :nome", { nome: `%${searchParameters}%` })
            .orWhere("students.material_list LIKE :material_list", { material_list: `%${searchParameters}%` })
            .skip(skipPagination)
            .take(takeMax)
            .getMany();

        return searchResults;       
    }
}

export default SearchStudentsService