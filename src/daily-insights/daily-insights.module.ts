import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyInsightsService } from './daily-insights.service';
import { DailyInsightsController } from './daily-insights.controller';
import { DailyInsight } from './entities/daily-insight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DailyInsight])],
  controllers: [DailyInsightsController],
  providers: [DailyInsightsService],
})
export class DailyInsightsModule {}
