import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ReflectionsService } from './reflections.service';
import { SaveReflectionDto } from './dto/save-reflection.dto';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../users/entities/user.entity';

@ApiTags('Reflections')
@ApiBearerAuth()
@Controller('reflections')
export class ReflectionsController {
  constructor(private readonly reflectionsService: ReflectionsService) {}

  @Post()
  @ApiOperation({
    summary: 'Salva ou atualiza reflexão pessoal para um card (upsert)',
  })
  @ApiResponse({ status: 201, description: 'Reflexão salva' })
  save(@CurrentUser() user: User, @Body() dto: SaveReflectionDto) {
    return this.reflectionsService.upsert(user.id, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Retorna todas as reflexões do usuário' })
  @ApiResponse({ status: 200, description: 'Lista de reflexões' })
  findAll(@CurrentUser() user: User) {
    return this.reflectionsService.findAll(user.id);
  }

  @Get(':cardId')
  @ApiOperation({
    summary: 'Retorna a reflexão do usuário para um card específico',
  })
  @ApiResponse({ status: 200, description: 'Reflexão encontrada' })
  @ApiResponse({ status: 404, description: 'Reflexão não encontrada' })
  findByCard(@CurrentUser() user: User, @Param('cardId') cardId: string) {
    return this.reflectionsService.findByCard(user.id, cardId);
  }
}
