import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsIn,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class RegisterDto {
  @ApiProperty({ example: 'Fábio Silva' })
  @IsString()
  name: string;

  @ApiProperty({ example: 'fabio@email.com' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'minimo6chars', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: 'pt', enum: ['pt', 'en', 'es'], required: false })
  @IsOptional()
  @IsIn(['pt', 'en', 'es'])
  language?: string;
}
