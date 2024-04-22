import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateTeacherDto } from './dto/create-teacher.dto';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Teacher } from './entities/teacher.entity';
import { Repository } from 'typeorm';
import * as bcrypt from "bcrypt";
import { Role } from 'src/admin/dto/create-admin.dto';

@UsePipes(ValidationPipe)
@Injectable()
export class TeacherService {
  constructor(@InjectRepository(Teacher) private readonly teacherRepo:Repository<Teacher>){}
  async create(createTeacherDto: CreateTeacherDto) {
    if(createTeacherDto.password!=createTeacherDto.confirmPassword){
      return "Password Doesn't Match"
    }
    const newTeacher:Teacher=new Teacher();
    newTeacher.id=createTeacherDto.id;
    newTeacher.fullname=createTeacherDto.fullname;
    newTeacher.email=createTeacherDto.email;
    newTeacher.phone=createTeacherDto.phone;
    newTeacher.role=Role.Teacher;
    newTeacher.salt=await bcrypt.genSalt();
    newTeacher.password=await bcrypt.hash(createTeacherDto.password,newTeacher.salt);
    await this.teacherRepo.save(newTeacher);
    return 'New Teacher Added to the system';
  }

  async findAll() {
    return await this.teacherRepo.find({});
  }

  async findOne(id: string) {
    return await this.teacherRepo.find({where:{id:id}});
  }

  async update(id: string, updateTeacherDto: UpdateTeacherDto) {
    if(updateTeacherDto.password=updateTeacherDto.confirmPassword){
      return "Password Doesn't Match"
    }
    const findTeacher=await this.teacherRepo.findOne({where:{id:id}});
    findTeacher.fullname=updateTeacherDto.fullname;
    findTeacher.phone=updateTeacherDto.phone;
    findTeacher.email=updateTeacherDto.email;
    findTeacher.salt=await bcrypt.genSalt();
    findTeacher.password=await bcrypt.hash(updateTeacherDto.password,findTeacher.salt);
    await this.teacherRepo.update(findTeacher.id,findTeacher);
    return "Information updated Successfully";
  }

  async remove(id:string) {
    const findTeacher=await this.teacherRepo.find({where:{id:id}});
    this.teacherRepo.remove(findTeacher);
    return "Teacher Removed Successfully from the system";
  }
}
