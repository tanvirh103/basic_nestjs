import { PartialType } from '@nestjs/mapped-types';
import { CreateAdminDto } from './create-admin.dto';
import { IsEmail,IsString, MaxLength, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateAdminDto extends PartialType(CreateAdminDto) {
    @ApiProperty({description:"Admin have to input a fullname minimum length 5 and maximum 20 character",
    example:"Jhon luther"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(20)
    fullname:string;

    @ApiProperty({description:"Admin have to input a email before update information",
    example:"jhon@example.com"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    @IsEmail()
    email:string;

    @ApiProperty({description:"Admin have to input a valid phone number before update information",
    example:"01884845495"
    })
    @IsString()
    @MinLength(11)
    @MaxLength(15)
    phone:string;

    @ApiProperty({description:"Admin have to input a password length should be 8 to 15 character before update information",
    example:"123456789"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    password:string;

    @ApiProperty({description:"Admin have to input a confirm password and it should be match with password before update information",
    example:"123456789"
    })
    @IsString()
    @MinLength(8)
    @MaxLength(15)
    confirmPassword:string;
    
    salt:string;
}
