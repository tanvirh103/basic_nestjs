import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Student } from './entities/student.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { Role } from 'src/admin/dto/create-admin.dto';

@Injectable()
export class StudentService {
  constructor(@InjectRepository(Student)private readonly studentRepo:Repository<Student>){}
  async create(createStudentDto: CreateStudentDto) {
    if(createStudentDto.confirmPassword!=createStudentDto.password){
      return "Password Doesn't Match";
    }
    const newStudent:Student=new Student();
    newStudent.id=createStudentDto.id;
    newStudent.fullname=createStudentDto.fullname;
    newStudent.email=createStudentDto.email;
    newStudent.phone=createStudentDto.phone;
    newStudent.salt=await bcrypt.genSalt();
    newStudent.password=await bcrypt.hash(createStudentDto.password,newStudent.salt);
    newStudent.cgpa=createStudentDto.cgpa;
    newStudent.role=Role.Student;
    await this.studentRepo.save(newStudent);
    return "New Student Added to the system";
  }

  async findAll() {
    return await this.studentRepo.find({});
  }

  async findOne(id:string) {
    return await this.studentRepo.find({where:{id:id}});
  }

  async update(id:string, updateStudentDto: UpdateStudentDto) {
    if(updateStudentDto.password!=updateStudentDto.confirmPassword){
      return "Password Doesn't Match";
    }
    const findStudent=await this.studentRepo.findOne({where:{id:id}});
    findStudent.fullname=updateStudentDto.fullname;
    findStudent.email=updateStudentDto.email;
    findStudent.phone=updateStudentDto.phone;
    findStudent.cgpa=updateStudentDto.cgpa;
    findStudent.salt=await bcrypt.genSalt();
    findStudent.password=await bcrypt.hash(updateStudentDto.password,findStudent.salt);
    await this.studentRepo.update(findStudent.id,findStudent);
    return"Information Updated Successfully";
  }

  async remove(id: string) {
    const findStudent=await this.studentRepo.find({where:{id:id}});
    await this.studentRepo.remove(findStudent);
    return "Student Removed Successfully from the system";
  }
}
