import { DataSource } from 'typeorm';
import { ThemeCard } from '../../theme-cards/entities/theme-card.entity';

export async function seedThemeCards(dataSource: DataSource): Promise<void> {
  const repo = dataSource.getRepository(ThemeCard);

  const cards = [
    // ── ANXIETY ──────────────────────────────────────────────────────────────
    {
      id: 'a1',
      sectionId: 'anxiety',
      title: 'Ansiedade no Trabalho',
      verseReference: 'Filipenses 4:6-7',
      verseText:
        '"Não andeis ansiosos por coisa alguma; antes, em tudo, pela oração e pela súplica, com ação de graças, sejam os vossos pedidos conhecidos diante de Deus. E a paz de Deus, que excede todo o entendimento, guardará os vossos corações e os vossos pensamentos em Cristo Jesus."',
      description:
        'Aprenda a lidar com pressões profissionais através da confiança em Deus.',
      accentColor: 'bg-red-400',
      practicalInterpretation:
        'A ansiedade no trabalho é uma das formas mais comuns de angústia moderna. Paulo não está dizendo para ignorarmos os problemas, mas para transformarmos a preocupação em oração. Quando levamos nossas tensões profissionais a Deus com gratidão, abrimos espaço para uma paz que vai além da lógica humana.',
      realLifeApplication:
        'Antes de começar sua jornada de trabalho hoje, reserve 5 minutos para orar especificamente sobre suas tarefas e desafios. Liste três coisas pelas quais você é grato no seu trabalho, mesmo que pequenas. Ao sentir ansiedade surgir, faça uma pausa de 60 segundos e respire conscientemente.',
      mentalExerciseQuestion:
        'Quais situações no trabalho estão tirando sua paz?',
      mentalExercisePlaceholder:
        'Reflita sobre como Deus já proveu em momentos difíceis no trabalho. Escreva uma oração entregando suas preocupações profissionais a Ele...',
      order: 1,
    },
    {
      id: 'a2',
      sectionId: 'anxiety',
      title: 'Preocupações Financeiras',
      verseReference: 'Mateus 6:25-26',
      verseText:
        '"Por isso, vos digo: não andeis ansiosos pela vossa vida, quanto ao que haveis de comer ou beber; nem quanto ao vosso corpo, quanto ao que haveis de vestir. Não é a vida mais do que o alimento, e o corpo, mais do que as vestes? Observai as aves do céu: não semeiam, não colhem, nem ajuntam em celeiros; contudo, vosso Pai celeste as sustenta."',
      description:
        'Deus conhece suas necessidades e cuida de você com amor paternal.',
      accentColor: 'bg-red-400',
      practicalInterpretation:
        'Preocupações financeiras são uma das maiores fontes de ansiedade moderna. Jesus não está dizendo para sermos irresponsáveis, mas para não deixarmos que a ansiedade sobre dinheiro domine nossa vida. Se Deus cuida dos pássaros, quanto mais cuidará de nós, seus filhos amados.',
      realLifeApplication:
        'Hoje, faça um exercício de gratidão financeira. Liste todas as provisões que Deus já fez na sua vida. Crie um orçamento simples se não tem um. Pratique a generosidade, mesmo que seja com algo pequeno - isso demonstra confiança na provisão de Deus. Ore especificamente sobre suas necessidades financeiras.',
      mentalExerciseQuestion:
        'Quais necessidades financeiras estão tirando sua paz?',
      mentalExercisePlaceholder:
        'Reflita sobre como Deus já proveu no passado. Ele mudou? Suas promessas falharam? Entregue cada preocupação financeira a Ele e comprometa-se a ser fiel na administração do que você tem agora.',
      order: 2,
    },
    {
      id: 'a3',
      sectionId: 'anxiety',
      title: 'Ansiedade Sobre o Futuro',
      verseReference: 'Mateus 6:34',
      verseText:
        '"Portanto, não vos preocupeis com o dia de amanhã, pois o amanhã cuidará de si mesmo. Basta a cada dia o seu próprio mal."',
      description:
        'Viva um dia de cada vez, confiando os planos de Deus para sua vida.',
      accentColor: 'bg-red-400',
      practicalInterpretation:
        'A ansiedade sobre o futuro nos rouba o presente. Jesus nos convida a viver em plena presença, confiando que Deus já está no amanhã que tanto tememos. Cada dia tem seus próprios desafios — e cada dia também tem a graça suficiente para enfrentá-los.',
      realLifeApplication:
        'Escreva três cenários do futuro que te preocupam. Para cada um, escreva uma promessa bíblica que se aplica. Pratique o "mindfulness espiritual": quando a mente for para o futuro, traga-a de volta ao presente com uma oração curta.',
      mentalExerciseQuestion:
        'Que cenários futuros estão ocupando sua mente hoje?',
      mentalExercisePlaceholder:
        'Imagine que Deus está segurando seu futuro nas mãos. O que você gostaria de dizer a Ele sobre seus medos? Escreva como uma conversa...',
      order: 3,
    },
    // ── FORGIVENESS ──────────────────────────────────────────────────────────
    {
      id: 'f1',
      sectionId: 'forgiveness',
      title: 'Perdoando a Si Mesmo',
      verseReference: '1 João 1:9',
      verseText:
        '"Se confessarmos os nossos pecados, ele é fiel e justo para nos perdoar os pecados e nos purificar de toda injustiça."',
      description:
        'Aprenda a se perdoar e aceitar a graça transformadora de Deus.',
      accentColor: 'bg-purple-500',
      practicalInterpretation:
        'Muitas pessoas aceitam o perdão de Deus intelectualmente, mas não conseguem se perdoar emocionalmente. A Bíblia é clara: se Deus perdoa, a questão está encerrada. Carregar culpa após o arrependimento é, paradoxalmente, uma forma de não confiar plenamente na graça divina.',
      realLifeApplication:
        'Escreva em um papel algo pelo qual você não consegue se perdoar. Leia 1 João 1:9 em voz alta. Depois, rasgue o papel como símbolo de que Deus já apagou esse registro. Repita diariamente: "Sou perdoado e amado."',
      mentalExerciseQuestion: 'O que você ainda carrega que Deus já perdoou?',
      mentalExercisePlaceholder:
        'Escreva uma carta para si mesmo, como se fosse Deus falando sobre Seu perdão completo e incondicional...',
      order: 1,
    },
    {
      id: 'f2',
      sectionId: 'forgiveness',
      title: 'Perdão em Família',
      verseReference: 'Efésios 4:32',
      verseText:
        '"Sede bondosos uns para com os outros, compassivos, perdoando-vos mutuamente, como também Deus vos perdoou em Cristo."',
      description:
        'Restaure relacionamentos familiares através do perdão genuíno.',
      accentColor: 'bg-purple-500',
      practicalInterpretation:
        'O perdão familiar é um dos mais difíceis porque envolve pessoas que deveriam nos proteger. Paulo usa o perdão de Deus como modelo — não porque seja fácil, mas porque é possível com Sua ajuda. Perdoar não significa esquecer ou aceitar o abuso; significa libertar-se do peso do ressentimento.',
      realLifeApplication:
        'Identifique um membro da família que você precisa perdoar. Ore por essa pessoa por 7 dias seguidos, pedindo a Deus que coloque amor no seu coração. Se possível e seguro, dê um passo concreto de reconciliação — uma mensagem, uma ligação.',
      mentalExerciseQuestion:
        'Qual membro da família você ainda precisa perdoar?',
      mentalExercisePlaceholder:
        'Descreva a situação e como ela te afetou. Depois, escreva como seria sua vida se você se libertasse desse peso...',
      order: 2,
    },
    {
      id: 'f3',
      sectionId: 'forgiveness',
      title: 'Libertação do Ressentimento',
      verseReference: 'Mateus 6:14-15',
      verseText:
        '"Porque, se perdoardes aos homens as suas ofensas, também vosso Pai celestial vos perdoará; se, porém, não perdoardes aos homens as suas ofensas, também vosso Pai não vos perdoará as vossas ofensas."',
      description: 'Liberte-se do peso do ressentimento e viva em paz.',
      accentColor: 'bg-purple-500',
      practicalInterpretation:
        'Jesus conecta diretamente nosso perdão com o perdão que recebemos de Deus. Não porque Deus seja vingativo, mas porque o ressentimento fecha nosso coração para receber graça. Guardar mágoa é como tomar veneno esperando que o outro morra — nos machuca muito mais do que machuca quem nos feriu.',
      realLifeApplication:
        'Faça o "exercício da cadeira vazia": sente-se, imagine a pessoa que te magoou na cadeira à sua frente, e diga em voz alta que a perdoa. Não precisa ser na presença dela. Repita quantas vezes for necessário — o perdão é muitas vezes um processo, não um evento.',
      mentalExerciseQuestion: 'Quem você precisa perdoar para se libertar?',
      mentalExercisePlaceholder:
        'Escreva o nome da pessoa e o que aconteceu. Depois escreva: "Eu escolho te perdoar porque fui perdoado por Deus." Como você se sente ao escrever isso?',
      order: 3,
    },
    // ── SPIRITUAL ────────────────────────────────────────────────────────────
    {
      id: 's1',
      sectionId: 'spiritual',
      title: 'Disciplina Espiritual',
      verseReference: '1 Timóteo 4:7-8',
      verseText:
        '"Rejeita as fábulas profanas e de velhas. Exercita-te, antes, na piedade; porque o exercício corporal para pouco é proveitoso, mas a piedade para tudo é proveitosa, tendo a promessa da vida presente e da que há de vir."',
      description:
        'Desenvolva hábitos que fortalecem sua vida espiritual diariamente.',
      accentColor: 'bg-green-500',
      practicalInterpretation:
        'Paulo usa a metáfora do exercício físico para falar de disciplina espiritual. Assim como o corpo precisa de treino consistente para ficar forte, nossa vida espiritual precisa de práticas regulares. A disciplina não é para ganhar o amor de Deus, mas para nos tornarmos mais receptivos a Ele.',
      realLifeApplication:
        'Escolha uma disciplina espiritual para praticar por 21 dias: leitura bíblica diária, oração pela manhã, jejum semanal, ou meditação em um versículo. Comece pequeno — 10 minutos por dia — e aumente gradualmente. Registre sua jornada em um diário.',
      mentalExerciseQuestion:
        'Qual disciplina espiritual você quer desenvolver?',
      mentalExercisePlaceholder:
        'Descreva sua rotina espiritual atual. O que está faltando? Que compromisso você pode fazer hoje para fortalecer sua vida com Deus?',
      order: 1,
    },
    {
      id: 's2',
      sectionId: 'spiritual',
      title: 'Estudo da Palavra',
      verseReference: 'Salmos 119:105',
      verseText:
        '"Lâmpada para os meus pés é tua palavra e luz para o meu caminho."',
      description:
        'Descubra sabedoria e direção através do estudo bíblico consistente.',
      accentColor: 'bg-green-500',
      practicalInterpretation:
        'A Palavra de Deus não é apenas um livro de regras — é uma lâmpada que ilumina o próximo passo. Não precisamos ver o caminho inteiro, apenas o suficiente para dar o próximo passo com confiança. O estudo bíblico regular nos calibra para enxergar a realidade com os olhos de Deus.',
      realLifeApplication:
        'Escolha um livro da Bíblia para estudar este mês. Leia um capítulo por dia, anote o que te tocou, e aplique uma verdade por semana. Use um método simples: O que o texto diz? O que significa? Como se aplica à minha vida?',
      mentalExerciseQuestion:
        'Qual verdade bíblica você precisa internalizar mais profundamente?',
      mentalExercisePlaceholder:
        'Escreva um versículo que tem significado especial para você. Por que ele ressoa? Como você pode vivê-lo mais plenamente esta semana?',
      order: 2,
    },
    {
      id: 's3',
      sectionId: 'spiritual',
      title: 'Vida de Oração',
      verseReference: '1 Tessalonicenses 5:17-18',
      verseText:
        '"Orai sem cessar. Em tudo, dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco."',
      description: 'Cultive uma comunicação constante e íntima com Deus.',
      accentColor: 'bg-green-500',
      practicalInterpretation:
        '"Orar sem cessar" não significa estar de joelhos 24 horas. Significa viver em atitude de diálogo constante com Deus — trazer Ele para cada momento, cada decisão, cada alegria e cada dor. É transformar a vida inteira em uma conversa sagrada.',
      realLifeApplication:
        'Experimente a "oração em camadas": pela manhã, ore por 5 minutos com intenção. Durante o dia, faça orações curtas de 30 segundos em momentos de transição. À noite, revise o dia com gratidão. Após uma semana, avalie como isso mudou sua perspectiva.',
      mentalExerciseQuestion: 'Como é sua vida de oração atualmente?',
      mentalExercisePlaceholder:
        'Escreva uma oração honesta a Deus sobre sua vida de oração. O que você gostaria que fosse diferente? Peça a Ele que te ensine a orar...',
      order: 3,
    },
    // ── FAITH ────────────────────────────────────────────────────────────────
    {
      id: 'fe1',
      sectionId: 'faith',
      title: 'Fé em Tempos Difíceis',
      verseReference: 'Hebreus 11:1',
      verseText:
        '"Ora, a fé é a certeza de coisas que se esperam, a convicção de fatos que não se veem."',
      description:
        'Mantenha a fé mesmo quando as circunstâncias parecem impossíveis.',
      accentColor: 'bg-yellow-500',
      practicalInterpretation:
        'A fé bíblica não é otimismo ingênuo — é uma convicção baseada no caráter de Deus, mesmo quando as circunstâncias contradizem Suas promessas. Os heróis da fé no capítulo 11 não viram todas as promessas cumpridas em vida, mas confiaram no Deus que prometeu.',
      realLifeApplication:
        'Crie um "diário de fé": registre momentos em que Deus foi fiel no passado. Quando a dúvida vier, releia esses registros. Compartilhe sua jornada de fé com alguém de confiança — a fé cresce em comunidade.',
      mentalExerciseQuestion:
        'Em que área da sua vida você está lutando para ter fé?',
      mentalExercisePlaceholder:
        'Descreva a situação difícil que você está enfrentando. Agora escreva três evidências do caráter fiel de Deus que você já experimentou. Como isso muda sua perspectiva?',
      order: 1,
    },
    {
      id: 'fe2',
      sectionId: 'faith',
      title: 'Confiança nas Promessas',
      verseReference: '2 Coríntios 1:20',
      verseText:
        '"Porque todas as promessas de Deus são sim em Cristo; por isso também por meio dele é o nosso amém, para glória de Deus."',
      description: 'Descanse nas promessas fiéis de Deus para sua vida.',
      accentColor: 'bg-yellow-500',
      practicalInterpretation:
        'Todas as promessas de Deus encontram seu "sim" definitivo em Jesus. Isso significa que quando oramos baseados nas promessas bíblicas, estamos alinhados com a vontade de Deus. A confiança nas promessas não é magia — é relacionamento com o Deus que prometeu e é capaz de cumprir.',
      realLifeApplication:
        'Escolha três promessas bíblicas que se aplicam à sua situação atual. Escreva-as em cartões e coloque em lugares visíveis. Declare-as em voz alta diariamente. Ore especificamente baseado nessas promessas.',
      mentalExerciseQuestion:
        'Qual promessa de Deus você precisa abraçar hoje?',
      mentalExercisePlaceholder:
        'Escreva a promessa que mais ressoa com sua situação atual. Por que é difícil confiar nela? O que impede você de descansar nessa promessa?',
      order: 2,
    },
    {
      id: 'fe3',
      sectionId: 'faith',
      title: 'Fé que Remove Montanhas',
      verseReference: 'Mateus 17:20',
      verseText:
        '"Porque em verdade vos digo que, se tiverdes fé como um grão de mostarda, direis a este monte: Passa daqui para acolá, e ele passará. Nada vos será impossível."',
      description: 'Pequenas sementes de fé podem produzir grandes milagres.',
      accentColor: 'bg-yellow-500',
      practicalInterpretation:
        'Jesus não está falando de quantidade de fé, mas de qualidade — fé genuína, mesmo que pequena, tem poder real. A semente de mostarda é minúscula, mas contém toda a informação genética para se tornar uma árvore. Nossa fé, por menor que seja, quando depositada no Deus certo, pode mover o impossível.',
      realLifeApplication:
        'Identifique uma "montanha" na sua vida — um problema que parece impossível. Ore por ela com a fé que você tem, mesmo que seja pequena. Dê um passo de fé concreto em direção à solução, confiando que Deus vai abrir o caminho.',
      mentalExerciseQuestion:
        'Qual é a "montanha" que você precisa que Deus mova?',
      mentalExercisePlaceholder:
        'Descreva o problema impossível que você enfrenta. Que passo de fé, por menor que seja, você pode dar hoje? Escreva uma oração de fé sobre isso...',
      order: 3,
    },
    // ── FINANCES ─────────────────────────────────────────────────────────────
    {
      id: 'fin1',
      sectionId: 'finances',
      title: 'Mordomia Financeira',
      verseReference: 'Mateus 6:19-21',
      verseText:
        '"Não acumuleis para vós outros tesouros na terra, onde a traça e a ferrugem tudo consomem, e onde os ladrões minam e roubam; mas acumulai para vós outros tesouros no céu, onde nem a traça nem a ferrugem consomem, e onde os ladrões não minam nem roubam; porque onde estiver o vosso tesouro, aí estará também o vosso coração."',
      description: 'Aprenda a administrar recursos com sabedoria e propósito.',
      accentColor: 'bg-blue-500',
      practicalInterpretation:
        'Jesus não condena a riqueza, mas o apego a ela. A mordomia financeira bíblica reconhece que tudo pertence a Deus e somos administradores temporários. Quando gerenciamos dinheiro com essa perspectiva, tomamos decisões mais sábias e generosas.',
      realLifeApplication:
        'Revise seu orçamento com a pergunta: "Isso reflete meus valores e prioridades?" Implemente a regra 10-10-80: 10% para Deus (dízimo), 10% para poupança, 80% para despesas. Elimine uma despesa desnecessária e direcione esse valor para algo com propósito eterno.',
      mentalExerciseQuestion:
        'Seu uso do dinheiro reflete seus valores espirituais?',
      mentalExercisePlaceholder:
        'Analise seus gastos do último mês. O que eles revelam sobre suas prioridades? O que você mudaria para alinhar suas finanças com seus valores de fé?',
      order: 1,
    },
    {
      id: 'fin2',
      sectionId: 'finances',
      title: 'Generosidade e Bênção',
      verseReference: 'Lucas 6:38',
      verseText:
        '"Dai, e ser-vos-á dado; boa medida, recalcada, sacudida e transbordante, será dada no vosso regaço; porque com a medida com que medirdes, também vos medirão."',
      description: 'Descubra a alegria e as bênçãos de ser generoso.',
      accentColor: 'bg-blue-500',
      practicalInterpretation:
        'A generosidade bíblica não é uma fórmula mágica de prosperidade — é um princípio espiritual que reflete o coração de Deus. Quando damos com alegria e sem cálculo, participamos da natureza divina. A bênção prometida pode vir de formas inesperadas: paz, relacionamentos, oportunidades, além de provisão material.',
      realLifeApplication:
        'Pratique a "generosidade surpresa": esta semana, faça um ato de generosidade anônimo. Pode ser pagar o café de alguém, deixar uma gorjeta generosa, ou contribuir para uma causa. Observe como isso afeta seu coração e sua perspectiva sobre dinheiro.',
      mentalExerciseQuestion: 'Como você pode ser mais generoso esta semana?',
      mentalExercisePlaceholder:
        'Pense em alguém que está passando por necessidade. O que você poderia fazer por essa pessoa? Como a generosidade mudou sua vida no passado?',
      order: 2,
    },
    {
      id: 'fin3',
      sectionId: 'finances',
      title: 'Livre de Dívidas',
      verseReference: 'Romanos 13:8',
      verseText:
        '"A ninguém fiqueis devendo coisa alguma, exceto o amor mútuo; porque quem ama o próximo tem cumprido a lei."',
      description: 'Busque liberdade financeira através de decisões sábias.',
      accentColor: 'bg-blue-500',
      practicalInterpretation:
        'Paulo não proíbe absolutamente qualquer dívida, mas nos chama a não vivermos em estado crônico de endividamento. Dívidas criam servidão — ao credor, à ansiedade, ao futuro incerto. A liberdade financeira não é luxo; é uma condição que nos permite ser mais generosos e menos ansiosos.',
      realLifeApplication:
        'Liste todas as suas dívidas com valores e taxas de juros. Use o método "bola de neve": pague o mínimo em todas e concentre o extra na menor dívida primeiro. Ao quitá-la, direcione esse valor para a próxima. Comemore cada vitória — cada dívida paga é um passo para a liberdade.',
      mentalExerciseQuestion:
        'Que dívidas estão limitando sua liberdade e generosidade?',
      mentalExercisePlaceholder:
        'Escreva como seria sua vida sem dívidas. Que decisões você tomaria diferente? Que plano concreto você pode começar hoje para caminhar em direção à liberdade financeira?',
      order: 3,
    },
  ];

  for (const data of cards) {
    const existing = await repo.findOne({ where: { id: data.id } });
    if (!existing) {
      await repo.save(repo.create(data));
      console.log(`  ✅ Card criado: ${data.id} (${data.title})`);
    } else {
      console.log(`  ⏭️  Card já existe: ${data.id}`);
    }
  }
}
