import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ThemeCard } from './entities/theme-card.entity';

@Injectable()
export class ThemeCardsService {
  constructor(
    @InjectRepository(ThemeCard)
    private readonly cardsRepository: Repository<ThemeCard>,
  ) {}

  async findOne(sectionId: string, cardId: string): Promise<ThemeCard> {
    const card = await this.cardsRepository.findOne({
      where: { id: cardId, sectionId },
    });

    if (!card) {
      throw new NotFoundException(
        `Card '${cardId}' não encontrado na seção '${sectionId}'`,
      );
    }

    return card;
  }
}
