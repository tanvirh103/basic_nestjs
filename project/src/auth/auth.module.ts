import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from 'src/admin/entities/admin.entity';
import { Teacher } from 'src/teacher/entities/teacher.entity';
import { Student } from 'src/student/entities/student.entity';
import { AdminService } from 'src/admin/admin.service';
import { TeacherService } from 'src/teacher/teacher.service';
import { StudentService } from 'src/student/student.service';

@Module({
  imports:[TypeOrmModule.forFeature([Admin,Teacher,Student])],
  controllers: [AuthController],
  providers: [AuthService,AdminService,TeacherService,StudentService]
})
export class AuthModule {}
