import { PartialType } from '@nestjs/mapped-types';
import { CreateTeacherDto } from './create-teacher.dto';
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTeacherDto extends PartialType(CreateTeacherDto) {
    @ApiProperty({description:"Teacher have to input a fullname minimum length 5 and maximum 20 character to update information",
    example:"Jhon luther",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    fullname:string;

    @ApiProperty({description:"Teacher have to input a email to update information",
    example:"jhon@example.com",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    @IsEmail()
    email:string;

    @ApiProperty({description:"Teacher have to input a valid phone number to update information",
    example:"01884845495"
    })
    @IsString()
    @MinLength(11)
    @MaxLength(15)
    phone:string;

    @ApiProperty({description:"Teacher have to input a password length should be 8 to 15 character to update information",
    example:"123456789",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password:string;

    @ApiProperty({description:"Teacher have to input a confirm password and it should be match with password to update information",
    example:"123456789",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    confirmPassword:string;

}
