import { DataSource } from 'typeorm';
import { ThemeSection } from '../../theme-sections/entities/theme-section.entity';

export async function seedThemeSections(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(ThemeSection);

  const sections = [
    {
      id: 'anxiety',
      titlePt: 'Ansiedade',
      titleEn: 'Anxiety',
      titleEs: 'Ansiedad',
      subtitlePt: 'Encontre paz em meio às preocupações',
      subtitleEn: 'Find peace amid your worries',
      subtitleEs: 'Encuentra paz en medio de las preocupaciones',
      order: 1,
    },
    {
      id: 'forgiveness',
      titlePt: 'Perdão',
      titleEn: 'Forgiveness',
      titleEs: 'Perdón',
      subtitlePt: 'Liberte-se através do perdão',
      subtitleEn: 'Set yourself free through forgiveness',
      subtitleEs: 'Libérate a través del perdón',
      order: 2,
    },
    {
      id: 'spiritual',
      titlePt: 'Crescimento Espiritual',
      titleEn: 'Spiritual Growth',
      titleEs: 'Crecimiento Espiritual',
      subtitlePt: 'Fortaleça sua jornada de fé',
      subtitleEn: 'Strengthen your faith journey',
      subtitleEs: 'Fortalece tu camino de fe',
      order: 3,
    },
    {
      id: 'faith',
      titlePt: 'Fé',
      titleEn: 'Faith',
      titleEs: 'Fe',
      subtitlePt: 'Aprofunde sua confiança em Deus',
      subtitleEn: 'Deepen your trust in God',
      subtitleEs: 'Profundiza tu confianza en Dios',
      order: 4,
    },
    {
      id: 'finances',
      titlePt: 'Vida Financeira',
      titleEn: 'Financial Life',
      titleEs: 'Vida Financiera',
      subtitlePt: 'Sabedoria para administrar recursos',
      subtitleEn: 'Wisdom to manage your resources',
      subtitleEs: 'Sabiduría para administrar recursos',
      order: 5,
    },
  ];

  for (const data of sections) {
    const existing = await repo.findOne({ where: { id: data.id } });
    if (!existing) {
      await repo.save(repo.create(data));
      console.log(`  ✅ Seção criada: ${data.id}`);
    } else {
      console.log(`  ⏭️  Seção já existe: ${data.id}`);
    }
  }
}
