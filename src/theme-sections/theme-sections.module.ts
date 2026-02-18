import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ThemeSectionsService } from './theme-sections.service';
import { ThemeSectionsController } from './theme-sections.controller';
import { ThemeSection } from './entities/theme-section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ThemeSection])],
  controllers: [ThemeSectionsController],
  providers: [ThemeSectionsService],
})
export class ThemeSectionsModule {}
