import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from 'typeorm';
import { ThemeCard } from '../../theme-cards/entities/theme-card.entity';

@Entity('theme_sections')
export class ThemeSection {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  titlePt: string;

  @Column({ type: 'varchar' })
  titleEn: string;

  @Column({ type: 'varchar' })
  titleEs: string;

  @Column({ type: 'varchar' })
  subtitlePt: string;

  @Column({ type: 'varchar' })
  subtitleEn: string;

  @Column({ type: 'varchar' })
  subtitleEs: string;

  @Column({ type: 'integer' })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => ThemeCard, (card) => card.section, { eager: true })
  cards: ThemeCard[];
}
