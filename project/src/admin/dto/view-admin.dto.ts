import { ApiProperty } from "@nestjs/swagger";
import { IsEmail,IsString, MaxLength, MinLength } from "class-validator";
import { Role } from "./create-admin.dto";
export class viewAdminDTO {
    @ApiProperty({description:"Admin have to input a id before create a account in this System",
    example:"001-2555-1"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    id:string;
    
    @ApiProperty({description:"Admin have to input a fullname minimum length 5 and maximum 20 character",
    example:"Jhon luther"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    fullname:string;

    @ApiProperty({description:"Admin have to input a email before create a account in this System",
    example:"jhon@example.com"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    @IsEmail()
    email:string;

    @ApiProperty({description:"Admin have to input a valid phone number before create a account in this System",
    example:"01884845495"
    })
    @IsString()
    @MinLength(11)
    @MaxLength(15)
    phone:string;

    @ApiProperty({description:"Admin have to input a password length should be 8 to 15 character before create a account in this System",
    example:"dfddkrtojtrtjrt40-4rjrtrtj"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password:string;

    @ApiProperty({example:"dfjdfjldjfdlfvnvcnv",type:"string"})
    salt:string;
    @ApiProperty({example:0})
    role:Role.Admin;
}