import { ApiProperty } from "@nestjs/swagger";
import { IsString,MinLength,MaxLength } from "class-validator";

export class SigninDTO{
    @ApiProperty({description:"User Have to input a valid ID For Login",
    example:"001-2555-1"
    })
    @IsString()
    @MinLength(5)
    @MaxLength(15)
    id:string;
    @ApiProperty({description:"User have to input a valid password",
    example:"12345678"
    })
    @MinLength(5)
    @MaxLength(15)
    password:string;
}