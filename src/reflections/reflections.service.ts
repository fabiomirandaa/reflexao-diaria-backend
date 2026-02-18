import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserReflection } from './entities/user-reflection.entity';
import { SaveReflectionDto } from './dto/save-reflection.dto';

@Injectable()
export class ReflectionsService {
  constructor(
    @InjectRepository(UserReflection)
    private readonly reflectionsRepository: Repository<UserReflection>,
  ) {}

  async upsert(
    userId: string,
    dto: SaveReflectionDto,
  ): Promise<UserReflection> {
    const existing = await this.reflectionsRepository.findOne({
      where: { userId, cardId: dto.cardId },
    });

    if (existing) {
      existing.content = dto.content;
      return this.reflectionsRepository.save(existing);
    }

    const reflection = this.reflectionsRepository.create({
      userId,
      cardId: dto.cardId,
      content: dto.content,
    });

    return this.reflectionsRepository.save(reflection);
  }

  async findByCard(userId: string, cardId: string): Promise<UserReflection> {
    const reflection = await this.reflectionsRepository.findOne({
      where: { userId, cardId },
    });

    if (!reflection) {
      throw new NotFoundException('Reflexão não encontrada para este card');
    }

    return reflection;
  }

  async findAll(userId: string): Promise<UserReflection[]> {
    return this.reflectionsRepository.find({
      where: { userId },
      order: { updatedAt: 'DESC' },
    });
  }
}
