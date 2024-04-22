import { ApiProperty } from "@nestjs/swagger";
import { IsDecimal, IsEmail, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "src/admin/dto/create-admin.dto";
export class viewStudentDTO{
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
    example:"dfjdfjldjfdlfvnvcnv",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password:string;

    @ApiProperty({description:"Student should input a valid CGPA before create a student account",
    example:"4.00",type:"number"
    })
  
    cgpa:number;
    @ApiProperty({example:"dfjdfjldjfdlfvnvcnv",type:"string"})
    salt:string;
    @ApiProperty({example:"1"})
    role:Role.Student;
}