import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class EditColmnStudent1617614582182 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('students', 'age')
        await queryRunner.addColumn('students',new TableColumn({
            name: 'age',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('students', 'age')

        await queryRunner.addColumn('students',new TableColumn({
            name: 'age',
            type: 'number'
        }))
        
    }

}
