import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ThemeSectionsService } from './theme-sections.service';
import { CurrentUser } from '../common/decorators/current-user.decorator';
import { User } from '../users/entities/user.entity';

@ApiTags('Theme Sections')
@ApiBearerAuth()
@Controller('theme-sections')
export class ThemeSectionsController {
  constructor(private readonly themeSectionsService: ThemeSectionsService) {}

  @Get()
  @ApiOperation({
    summary: 'Retorna todas as seções com cards (idioma do usuário)',
  })
  @ApiResponse({ status: 200, description: 'Lista de seções temáticas' })
  findAll(@CurrentUser() user: User) {
    return this.themeSectionsService.findAll(
      (user.language as 'pt' | 'en' | 'es') ?? 'pt',
    );
  }

  @Get(':sectionId')
  @ApiOperation({ summary: 'Retorna uma seção específica com seus cards' })
  @ApiResponse({ status: 200, description: 'Seção temática' })
  @ApiResponse({ status: 404, description: 'Seção não encontrada' })
  findOne(@Param('sectionId') sectionId: string, @CurrentUser() user: User) {
    return this.themeSectionsService.findOne(
      sectionId,
      (user.language as 'pt' | 'en' | 'es') ?? 'pt',
    );
  }
}
