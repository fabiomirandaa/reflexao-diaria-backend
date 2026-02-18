import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThemeSection } from './entities/theme-section.entity';
import { ThemeCard } from '../theme-cards/entities/theme-card.entity';

type Language = 'pt' | 'en' | 'es';

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export interface LocalizedCard {
  id: string;
  title: string;
  verseReference: string;
  description: string;
  accentColor: string;
  order: number;
}

export interface LocalizedSection {
  id: string;
  title: string;
  subtitle: string;
  order: number;
  cards: LocalizedCard[];
}

@Injectable()
export class ThemeSectionsService {
  constructor(
    @InjectRepository(ThemeSection)
    private readonly sectionsRepository: Repository<ThemeSection>,
  ) {}

  async findAll(language: Language): Promise<LocalizedSection[]> {
    const sections = await this.sectionsRepository.find({
      order: { order: 'ASC' },
      relations: ['cards'],
    });

    return sections.map((section) => this.localize(section, language));
  }

  async findOne(id: string, language: Language): Promise<LocalizedSection> {
    const section = await this.sectionsRepository.findOne({
      where: { id },
      relations: ['cards'],
    });

    if (!section) {
      throw new NotFoundException(`Seção '${id}' não encontrada`);
    }

    return this.localize(section, language);
  }

  private localize(
    section: ThemeSection,
    language: Language,
  ): LocalizedSection {
    const lang = capitalize(language);
    return {
      id: section.id,
      title: (section as unknown as Record<string, string>)[`title${lang}`],
      subtitle: (section as unknown as Record<string, string>)[
        `subtitle${lang}`
      ],
      order: section.order,
      cards: (section.cards ?? [])
        .sort((a: ThemeCard, b: ThemeCard) => a.order - b.order)
        .map((card: ThemeCard) => ({
          id: card.id,
          title: card.title,
          verseReference: card.verseReference,
          description: card.description,
          accentColor: card.accentColor,
          order: card.order,
        })),
    };
  }
}
