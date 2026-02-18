import { Controller, Get } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { DailyInsightsService } from './daily-insights.service';

@ApiTags('Daily Insights')
@ApiBearerAuth()
@Controller('daily-insights')
export class DailyInsightsController {
  constructor(private readonly dailyInsightsService: DailyInsightsService) {}

  @Get('today')
  @ApiOperation({ summary: 'Retorna a reflexão do dia atual' })
  @ApiResponse({ status: 200, description: 'Reflexão do dia' })
  @ApiResponse({ status: 404, description: 'Nenhuma reflexão para hoje' })
  findToday() {
    return this.dailyInsightsService.findToday();
  }

  @Get('history')
  @ApiOperation({ summary: 'Retorna as reflexões dos últimos 30 dias' })
  @ApiResponse({ status: 200, description: 'Histórico de reflexões' })
  findHistory() {
    return this.dailyInsightsService.findHistory();
  }
}
