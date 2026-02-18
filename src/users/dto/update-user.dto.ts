import { ApiProperty } from '@nestjs/swagger';
import { IsIn, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto {
  @ApiProperty({ example: 'Fábio Silva', required: false })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ example: 'en', enum: ['pt', 'en', 'es'], required: false })
  @IsOptional()
  @IsIn(['pt', 'en', 'es'])
  language?: string;
}
