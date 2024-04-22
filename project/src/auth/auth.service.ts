import { Injectable, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdminService } from 'src/admin/admin.service';
import { CreateAdminDto, Role } from 'src/admin/dto/create-admin.dto';
import { CreateStudentDto } from 'src/student/dto/create-student.dto';
import { StudentService } from 'src/student/student.service';
import { CreateTeacherDto } from 'src/teacher/dto/create-teacher.dto';
import { TeacherService } from 'src/teacher/teacher.service';
import { SigninDTO } from './dto/signin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from 'src/student/entities/student.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { Response } from 'express';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Admin } from 'src/admin/entities/admin.entity';

@UsePipes(ValidationPipe)
@Injectable()
export class AuthService {
    constructor(private readonly adminService:AdminService,
        private readonly teacherService:TeacherService,
        private readonly studentService:StudentService,
        @InjectRepository(Student) private readonly studentRepo:Repository<Student>,
        @InjectRepository(Teacher)private readonly teacherRepo:Repository<Teacher>,
        @InjectRepository(Admin)private readonly adminRepo:Repository<Admin>){}

    async createStudent(createStudent:CreateStudentDto){
        return await this.studentService.create(createStudent);
    }
    async createTeacher(createTeacher:CreateTeacherDto){
        return await this.teacherService.create(createTeacher);
    }
    async createAdmin(createAdmin:CreateAdminDto){
        return await this.adminService.create(createAdmin);
    }

    async loginStudent(signinStudnet:SigninDTO,@Res() res:Response){
        const{id,password}=signinStudnet;
        const find=await this.studentRepo.findOne({where:{id:id}});
        if(find==null){return "No Student Found";}
        const spass=await bcrypt.hash(password,find.salt);
        if(spass == find.password){
            res.cookie('student',Role[find.role],{maxAge:99999});
            return {status:"Login Successfull",Result:"You are a student"};
        }else{
            return {Status:"Wrong Login Credential"};
        }
    }

    async loginTeacher(signinStudnet:SigninDTO,@Res() res:Response){
        const{id,password}=signinStudnet;
        const find=await this.teacherRepo.findOne({where:{id:id}});
        if(find==null){return "No Teacher Found";}
        const spass=await bcrypt.hash(password,find.salt);
        if(spass == find.password){
            res.cookie('teacher',Role[find.role],{maxAge:99999});
            return {status:"Login Successfull",Result:"You are a Teacher"};
        }else{
            return {Status:"Wrong Login Credential"};
        }
    }

    async loginAdmin(signinStudnet:SigninDTO,@Res() res:Response){
        const{id,password}=signinStudnet;
        const find=await this.adminRepo.findOne({where:{id:id}});
        if(find==null){return "No Admin Found";}
        const spass=await bcrypt.hash(password,find.salt);
        if(spass == find.password){
            res.cookie('admin',Role[find.role],{maxAge:99999});
            return {status:"Login Successfull",Result:"You are a admin"};
        }else{
            return {Status:"Wrong Login Credential"};
        }
    }
}
