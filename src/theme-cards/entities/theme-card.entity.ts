import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { ThemeSection } from '../../theme-sections/entities/theme-section.entity';
import { UserReflection } from '../../reflections/entities/user-reflection.entity';

@Entity('theme_cards')
export class ThemeCard {
  @PrimaryColumn({ type: 'varchar' })
  id: string;

  @Column({ type: 'varchar' })
  sectionId: string;

  @ManyToOne(() => ThemeSection, (section) => section.cards)
  @JoinColumn({ name: 'sectionId' })
  section: ThemeSection;

  @Column({ type: 'varchar' })
  title: string;

  @Column({ type: 'varchar' })
  verseReference: string;

  @Column({ type: 'text' })
  verseText: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar' })
  accentColor: string;

  @Column({ type: 'text' })
  practicalInterpretation: string;

  @Column({ type: 'text' })
  realLifeApplication: string;

  @Column({ type: 'varchar' })
  mentalExerciseQuestion: string;

  @Column({ type: 'text' })
  mentalExercisePlaceholder: string;

  @Column({ type: 'integer' })
  order: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => UserReflection, (reflection) => reflection.card)
  reflections: UserReflection[];
}
