export interface CreateStudentInterface {
    create_user_id: string;
    nome: string;
    age: number;
    address: string;
    material_list: string;
    contact: string;
    Details: string;
    report: string;
}

export interface SearchStudentsInterface {
    searchParameters: string;
    skipPagination: number;
    takeMax: number;
}

export interface AllStudentsInterface{
    skipPagination: number;
    takeMax: number;
}

export interface SpecificStudentsIntrface{
    create_user_id: string;
    skipPagination: number;
    takeMax: number;
}