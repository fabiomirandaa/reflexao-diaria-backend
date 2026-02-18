import 'reflect-metadata';
import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import * as bcrypt from 'bcrypt';
import { User } from '../users/entities/user.entity';
import { ThemeSection } from '../theme-sections/entities/theme-section.entity';
import { ThemeCard } from '../theme-cards/entities/theme-card.entity';
import { DailyInsight } from '../daily-insights/entities/daily-insight.entity';
import { UserReflection } from '../reflections/entities/user-reflection.entity';
import { seedThemeSections } from './seeds/theme-sections.seed';
import { seedThemeCards } from './seeds/theme-cards.seed';
import { seedDailyInsights } from './seeds/daily-insights.seed';

dotenv.config();

const dataSource = new DataSource({
  type: 'postgres',
  host: process.env.DATABASE_HOST ?? 'localhost',
  port: Number(process.env.DATABASE_PORT ?? 5432),
  username: process.env.DATABASE_USER ?? 'postgres',
  password: process.env.DATABASE_PASSWORD ?? 'postgres',
  database: process.env.DATABASE_NAME ?? 'sabedoria_diaria',
  entities: [User, ThemeSection, ThemeCard, DailyInsight, UserReflection],
  synchronize: true,
});

async function runSeed(): Promise<void> {
  console.log('🌱 Iniciando seed do banco de dados...\n');

  await dataSource.initialize();
  console.log('✅ Conexão com banco estabelecida\n');

  // 1. Theme Sections
  console.log('📚 Criando seções temáticas...');
  await seedThemeSections(dataSource);

  // 2. Theme Cards
  console.log('\n🃏 Criando cards temáticos...');
  await seedThemeCards(dataSource);

  // 3. Daily Insights
  console.log('\n💡 Criando reflexões diárias...');
  await seedDailyInsights(dataSource);

  // 4. Admin user
  console.log('\n👤 Criando usuário admin...');
  const usersRepo = dataSource.getRepository(User);
  const adminEmail = 'admin@reflexaodiaria.com';
  const existing = await usersRepo.findOne({ where: { email: adminEmail } });
  if (!existing) {
    const hashedPassword = await bcrypt.hash('admin123', 10);
    await usersRepo.save(
      usersRepo.create({
        name: 'Admin',
        email: adminEmail,
        password: hashedPassword,
        language: 'pt',
      }),
    );
    console.log(`  ✅ Admin criado: ${adminEmail} / admin123`);
  } else {
    console.log(`  ⏭️  Admin já existe: ${adminEmail}`);
  }

  await dataSource.destroy();
  console.log('\n🎉 Seed concluído com sucesso!');
}

runSeed().catch((err: unknown) => {
  console.error('❌ Erro no seed:', err);
  process.exit(1);
});
