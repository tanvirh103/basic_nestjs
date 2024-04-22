import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "src/admin/dto/create-admin.dto";
export class ViewTeacherDTO {
    @ApiProperty({description:"Teacher have to input a id before create a account in this System",
    example:"001-2555-1",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    id:string;

    @ApiProperty({description:"Teacher have to input a Fullname Before create a account in this System",
    example:"Jhon Ahmed",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    fullname:string;
    
    @ApiProperty({description:"Teacher have to input a valid email before create a account in this System",
    example:"jhona103@example.com",type:"string"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    @IsEmail()
    email:string;

    @ApiProperty({description:"Teacher have to input a valid phone Number before create a account in this System",
    example:"01777777773",type:"string"
    })
    @IsString()
    @MinLength(11)
    @MaxLength(15)
    phone:string;

    @ApiProperty({description:"Teacher have to input a password 8 to 15 character before create a account in this System",
    example:"123456789",type:"string"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password:string;
    @ApiProperty({example:"dfjdfjldjfdlfvnvcnv",type:"string"})
    salt:string;
    
    @ApiProperty({example:"2"})
    role:Role.Teacher;
}
