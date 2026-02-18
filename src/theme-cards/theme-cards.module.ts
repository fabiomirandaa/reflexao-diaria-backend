import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeCardsService } from './theme-cards.service';
import { ThemeCardsController } from './theme-cards.controller';
import { ThemeCard } from './entities/theme-card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThemeCard])],
  controllers: [ThemeCardsController],
  providers: [ThemeCardsService],
})
export class ThemeCardsModule {}
