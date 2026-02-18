import { DataSource } from 'typeorm';
import { DailyInsight } from '../../daily-insights/entities/daily-insight.entity';

function dateOffset(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  return d.toISOString().split('T')[0];
}

export async function seedDailyInsights(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(DailyInsight);

  const insights = [
    {
      date: dateOffset(0), // today
      theme: 'Ansiedade',
      verseText:
        'Não andeis ansiosos por coisa alguma; antes, as vossas petições sejam em tudo conhecidas diante de Deus, pela oração e súplica, com ação de graças.',
      verseReference: 'Filipenses 4:6',
      practicalReflection:
        'A ansiedade muitas vezes nasce da tentativa de controlar o futuro. O texto sugere uma troca: entregue o incontrolável e foque no agora.',
      actionStep:
        'Identifique uma coisa que está fora do seu controle hoje e diga em voz alta: "Isso eu não posso mudar".',
    },
    {
      date: dateOffset(-1), // yesterday
      theme: 'Foco',
      verseText:
        'Olhem para as aves do céu: não semeiam nem colhem nem armazenam em celeiros; contudo, o Pai celestial as alimenta.',
      verseReference: 'Mateus 6:26',
      practicalReflection:
        'A distração é o oposto da atenção plena. Observe o simples para reencontrar o foco.',
      actionStep:
        'Desligue as notificações por 1 hora hoje e dedique-se a uma única tarefa importante.',
    },
    {
      date: dateOffset(-2), // two days ago
      theme: 'Paciência',
      verseText:
        'Tudo tem o seu tempo determinado, e há tempo para todo o propósito debaixo do céu.',
      verseReference: 'Eclesiastes 3:1',
      practicalReflection:
        'A pressa rouba a beleza do processo. Aceite o ritmo natural das coisas.',
      actionStep:
        'Quando estiver esperando algo hoje, respire fundo intencionalmente e não pegue o celular.',
    },
  ];

  for (const data of insights) {
    const existing = await repo.findOne({ where: { date: data.date } });
    if (!existing) {
      await repo.save(repo.create(data));
      console.log(`  ✅ Reflexão criada: ${data.date} (${data.theme})`);
    } else {
      console.log(`  ⏭️  Reflexão já existe: ${data.date}`);
    }
  }
}
