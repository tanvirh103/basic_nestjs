import { Column, Entity, PrimaryColumn } from "typeorm";
import { Role } from "../dto/create-admin.dto";

@Entity("Admin")
export class Admin {
    
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
    role:Role.Admin
}
