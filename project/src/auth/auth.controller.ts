import { Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateStudentDto } from 'src/student/dto/create-student.dto';
import { CreateTeacherDto } from 'src/teacher/dto/create-teacher.dto';
import { CreateAdminDto } from 'src/admin/dto/create-admin.dto';
import { SigninDTO } from './dto/signin.dto';
import { Request, Response } from 'express';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags("Authentication")
@UsePipes(ValidationPipe)
@Controller('auth')
export class AuthController {
    constructor(private readonly authService:AuthService){}
    @ApiOperation({summary:"Create Student Account"})
    @ApiOkResponse({description:"New Student Added to the system"})
    @Post('createStudent')
    async createStudent(@Body()createStudent:CreateStudentDto){
        return await this.authService.createStudent(createStudent);
    }

    @ApiOperation({summary:"Create Teacher Account"})
    @ApiOkResponse({description:"New Teacher Added to the system"})
    @Post('createTeacher')
    async createTeacher(@Body()createTeacher:CreateTeacherDto){
        return await this.authService.createTeacher(createTeacher);
    }

    @ApiOperation({summary:"Create Admin Account"})
    @ApiOkResponse({description:"New Admin Added to the system"})
    @Post('createAdmin')
    async createAdmin(@Body()createAdmin:CreateAdminDto){
        return await this.authService.createAdmin(createAdmin);
    }
    @ApiOkResponse({description:"User will be login successfully"})
    @ApiOperation({summary:"Signin By Student ID"})
    @Post('loginStudent')
    async loginStudent(@Body()signin:SigninDTO,@Res({passthrough:true}) res:Response){
        return await this.authService.loginStudent(signin,res);
    }
    @ApiOkResponse({description:"User will be login successfully"})
    @ApiOperation({summary:"Signin By Teacher ID"})
    @Post('loginTeacher')
    async loginTeacher(@Body()signin:SigninDTO,@Res({passthrough:true}) res:Response){
        return await this.authService.loginTeacher(signin,res);
    }
    @ApiOkResponse({description:"User will be login successfully"})
    @ApiOperation({summary:"Signin By Admin ID"})
    @Post('loginAdmin')
    async loginAdmin(@Body()signin:SigninDTO,@Res({passthrough:true}) res:Response){
        return await this.authService.loginAdmin(signin,res);
    }
    @ApiOkResponse({description:"User will be logout successfully"})
    @ApiOperation({summary:"Logout from Admin Account"})
    @Post('logoutAdmin')
    async logoutAdmin(@Req() req: Request, @Res({passthrough: true}) res: Response){
        if(req.cookies.admin){
            res.clearCookie('admin');
            return{status:"Logout Successfull"};
        }
            return {status:"Login First"};
    }
    @ApiOkResponse({description:"User will be logout successfully"})
    @ApiOperation({summary:"Logout from Teacher Account"})
    @Post('logoutTeacher')
    async logoutTeacher(@Req() req: Request, @Res({passthrough: true}) res: Response){
        if(req.cookies.teacher){
            res.clearCookie('teacher');
            return{status:"Logout Successfull"};
        }
            return {status:"Login First"};
    }
    @ApiOkResponse({description:"User will be logout successfully"})
    @ApiOperation({summary:"Logout from Student Account"})
    @Post('logoutStudent')
    async logoutStudent(@Req() req: Request, @Res({passthrough: true}) res: Response){
        if(req.cookies.student){
            res.clearCookie('student');
            return{status:"Logout Successfull"};
        }
            return {status:"Login First"};
    }
}
