import { IsDecimal, IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "src/admin/dto/create-admin.dto";
import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentDto {
    @ApiProperty({description:"Student have to input a id before create a account in this System",
    example:"21-2555-1",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    id:string;
    
    @ApiProperty({description:"Student have to input a fullname minimum length 5 and maximum 20 character",
    example:"Jhon luther",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    fullname:string;
    
    @ApiProperty({description:"Student have to input a email before create a account in this System",
    example:"jhon@example.com",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsEmail()
    email:string;

    @ApiProperty({description:"Student have to input a valid phone number before create a account in this System",
    example:"01884845495"
    })
    @IsString()
    @MinLength(11)
    @MaxLength(15)
    phone:string;

    @ApiProperty({description:"Student have to input a password length should be 8 to 15 character before create a account in this System",
    example:"123456789",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password:string;

    @ApiProperty({description:"Student have to input a confirm password and it should be match with password before create a account in this System",
    example:"123456789",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    confirmPassword:string;

    salt:string;

    @ApiProperty({description:"Student should input a valid CGPA before create a student account",
    example:3.68,type:Number
    })
    
    cgpa:number;

    role:Role.Student;
}
