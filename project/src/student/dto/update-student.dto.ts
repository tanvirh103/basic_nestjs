import { PartialType } from '@nestjs/mapped-types';
import { CreateStudentDto } from './create-student.dto';
import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsEmail,IsNumber, IsString, MaxLength, MinLength } from "class-validator";
export class UpdateStudentDto extends PartialType(CreateStudentDto) {
    @ApiProperty({description:"Student have to input a fullname minimum length 5 and maximum 20 character to update information",
    example:"Jhon luther",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    fullname:string;

    @ApiProperty({description:"Student have to input a email before to update information",
    example:"jhon@example.com",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    @IsEmail()
    email:string;

    @ApiProperty({description:"Student have to input a valid phone number to update information",
    example:"01884845495"
    })
    @IsString()
    @MinLength(11)
    @MaxLength(15)
    phone:string;
    
    @ApiProperty({description:"Student have to input a password length should be 8 to 15 character to update information",
    example:"123456789",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password:string;

    @ApiProperty({description:"Student have to input a confirm password and it should be match with password before to update information",
    example:"123456789",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    confirmPassword:string;
    
    @ApiProperty({description:"Student should input a valid CGPA before to update information",
    example:3.70,type:Number
    })
    @IsNumber()
    cgpa:number;
}
