import { Controller, Get, Param } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ThemeCardsService } from './theme-cards.service';

@ApiTags('Theme Cards')
@ApiBearerAuth()
@Controller('theme-cards')
export class ThemeCardsController {
  constructor(private readonly themeCardsService: ThemeCardsService) {}

  @Get(':sectionId/:cardId')
  @ApiOperation({
    summary: 'Retorna um card completo para a página de detalhe',
  })
  @ApiResponse({ status: 200, description: 'Card completo' })
  @ApiResponse({ status: 404, description: 'Card não encontrado' })
  findOne(
    @Param('sectionId') sectionId: string,
    @Param('cardId') cardId: string,
  ) {
    return this.themeCardsService.findOne(sectionId, cardId);
  }
}
