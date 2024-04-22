import { Injectable, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateAdminDto, Role } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';

@UsePipes(ValidationPipe)
@Injectable()
export class AdminService {
  constructor(@InjectRepository(Admin) private readonly adminRepo:Repository<Admin>){}
  async create(createAdminDto: CreateAdminDto) {
    if(createAdminDto.password!=createAdminDto.confirmPassword){
      return "Password Doesn't Match"
    }
    const newAdmin:Admin=new Admin();
    newAdmin.id=createAdminDto.id;
    newAdmin.fullname=createAdminDto.fullname;
    newAdmin.email=createAdminDto.email;
    newAdmin.phone=createAdminDto.phone;
    newAdmin.role=Role.Admin;
    newAdmin.salt=await bcrypt.genSalt();
    newAdmin.password=await bcrypt.hash(createAdminDto.password,newAdmin.salt);
    await this.adminRepo.save(newAdmin);
    return "New Admin Added to the system";
  }

  async findAll() {
    return await this.adminRepo.find({});
  }

  async findOne(id: string) {
    return await this.adminRepo.find({where:{id:id}});
  }

  async update(id: string, updateAdminDto: UpdateAdminDto) {
    const findAdmin=await this.adminRepo.findOne({where:{id:id}})
    if(updateAdminDto.password!=updateAdminDto.confirmPassword){
      return "Password Doesn't Match"
    }
    findAdmin.fullname=updateAdminDto.fullname;
    findAdmin.email=updateAdminDto.email;
    findAdmin.phone=updateAdminDto.phone;
    findAdmin.salt=await bcrypt.genSalt();
    findAdmin.password=await bcrypt.hash(updateAdminDto.password,findAdmin.salt);
    await this.adminRepo.update(findAdmin.id,findAdmin);
    return "Information Updated Successfully" ;
  }

  async remove(id: string) {
    const findAdmin=await this.adminRepo.find({where:{id:id}});
    await this.adminRepo.remove(findAdmin);
    return "Admin Removed Successfully";
  }
}
