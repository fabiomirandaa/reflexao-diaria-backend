import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class SaveReflectionDto {
  @ApiProperty({ example: 'a2' })
  @IsString()
  cardId: string;

  @ApiProperty({ example: 'Reflito sobre como Deus já me proveu...' })
  @IsString()
  @MinLength(1)
  content: string;
}
