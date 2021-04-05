import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddColumnsStudents1617512858280 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('students',new TableColumn({
            name: 'Details',
            type: 'varchar',
            isNullable: true
        }))
        await queryRunner.addColumn('students',new TableColumn({
            name: 'report',
            type: 'varchar',
            isNullable: true
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('students', 'report')
        await queryRunner.dropColumn('students', 'Details')
        
    }

}
