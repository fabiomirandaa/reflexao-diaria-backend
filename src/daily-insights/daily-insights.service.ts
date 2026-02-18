import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { DailyInsight } from './entities/daily-insight.entity';

@Injectable()
export class DailyInsightsService {
  constructor(
    @InjectRepository(DailyInsight)
    private readonly insightsRepository: Repository<DailyInsight>,
  ) {}

  async findToday(): Promise<DailyInsight> {
    const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
    const insight = await this.insightsRepository.findOne({
      where: { date: today },
    });

    if (!insight) {
      throw new NotFoundException('Nenhuma reflexão disponível para hoje');
    }

    return insight;
  }

  async findHistory(): Promise<
    Omit<DailyInsight, 'practicalReflection' | 'actionStep'>[]
  > {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const fromDate = thirtyDaysAgo.toISOString().split('T')[0];

    // Yesterday's date string (exclude today from history)
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toISOString().split('T')[0];

    const insights = await this.insightsRepository.find({
      where: {
        date: Between(fromDate, yesterdayStr),
      },
      order: { date: 'DESC' },
    });

    return insights.map(
      ({ practicalReflection: _pr, actionStep: _as, ...rest }) => rest,
    );
  }
}
