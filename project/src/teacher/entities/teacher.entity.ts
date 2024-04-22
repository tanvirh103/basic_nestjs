import { Role } from "src/admin/dto/create-admin.dto";
import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity('Teacher')
export class Teacher {
    @PrimaryColumn({nullable:false,unique:true})
    id:string;
    @Column({nullable:false})
    fullname:string;
    @Column({nullable:false})
    email:string;
    @Column({nullable:false})
    phone:string;
    @Column({nullable:false})
    password:string;
    @Column({nullable:false})
    salt:string;
    @Column({nullable:false})
    role:Role.Teacher
}
