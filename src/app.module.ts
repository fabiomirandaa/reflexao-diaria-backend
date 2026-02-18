import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ThemeSectionsModule } from './theme-sections/theme-sections.module';
import { ThemeCardsModule } from './theme-cards/theme-cards.module';
import { DailyInsightsModule } from './daily-insights/daily-insights.module';
import { ReflectionsModule } from './reflections/reflections.module';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    AuthModule,
    UsersModule,
    ThemeSectionsModule,
    ThemeCardsModule,
    DailyInsightsModule,
    ReflectionsModule,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule {}
