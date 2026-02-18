import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { ThemeSection } from '../theme-sections/entities/theme-section.entity';
import { ThemeCard } from '../theme-cards/entities/theme-card.entity';
import { DailyInsight } from '../daily-insights/entities/daily-insight.entity';
import { UserReflection } from '../reflections/entities/user-reflection.entity';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DATABASE_HOST'),
        port: config.get<number>('DATABASE_PORT'),
        username: config.get<string>('DATABASE_USER'),
        password: config.get<string>('DATABASE_PASSWORD'),
        database: config.get<string>('DATABASE_NAME'),
        entities: [User, ThemeSection, ThemeCard, DailyInsight, UserReflection],
        synchronize: true, // use migrations in production
        logging: false,
        ssl:
          config.get<string>('NODE_ENV') === 'production' ||
            config.get<string>('DATABASE_SSL') === 'true'
            ? { rejectUnauthorized: false }
            : false,
      }),
    }),
  ],
})
export class DatabaseModule { }
