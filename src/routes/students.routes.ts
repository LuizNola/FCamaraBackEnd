import { Router } from 'express';
import { getRepository, Like } from 'typeorm'
import Students from '../database/models/Students'
import ensureAuth from '../middlewares/ensureAuth';

import StudentsService from '../service/CreateStudentsService'
import SearchStudentsService from '../service/SearchStudentsService'
import AllStudentsService from '../service/AllStudentService'
import SpecificStudentsService from '../service/specificStudentsService'

const studentsRouter = Router();


//Pegando todos os Stundets que existem
studentsRouter.get('/', async (req, res) => {
    const {skipPagination, takeMax} = req.body

    const StudentsService = new AllStudentsService()
    const AllStudent = await StudentsService.execute({skipPagination, takeMax})
    return res.json(AllStudent)
})

studentsRouter.get('/search', async (req, res)=>{

    const {searchParameters, skipPagination, takeMax} = req.body

    const StudentsService = new SearchStudentsService()
    const searchResults = await StudentsService.execute({searchParameters, skipPagination, takeMax})

    return res.json(searchResults)
})

//Pegando todos os Students de um unico usuario 
studentsRouter.get('/specific',ensureAuth, async (req, res) => {

    const {create_user_id, skipPagination, takeMax } = req.body
   
    const StudentsService = new SpecificStudentsService()
    const SpecificStudents = await StudentsService.execute({create_user_id, skipPagination, takeMax})


    return res.json(SpecificStudents)
})

//Deletando um student
studentsRouter.delete('/', ensureAuth,async (req, res) => {
  
    const studentsRepository = getRepository(Students)

    const { id_student } = req.body

    const student = await studentsRepository.find({ where:{ id: id_student } })
    
    await studentsRepository.remove(student)
    
    return res.send('ok')
})

//rota para cadastrar o student
studentsRouter.post('/', ensureAuth,async (req, res) => {
    
        const { create_user_id,
            nome,
            age,
            address,
            material_list,
            contact
        } = req.body; 

        //Service com as regras de negocio 
        const studentsService = new StudentsService();

        const student = await studentsService.execute({
            create_user_id,
            nome,
            age,
            address,
            material_list,
            contact
        });

        return res.json(student);
    
})

export default studentsRouter;