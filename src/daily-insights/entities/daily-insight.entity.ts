import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('daily_insights')
export class DailyInsight {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'date', unique: true })
  date: string;

  @Column({ type: 'varchar' })
  theme: string;

  @Column({ type: 'text' })
  verseText: string;

  @Column({ type: 'varchar' })
  verseReference: string;

  @Column({ type: 'text' })
  practicalReflection: string;

  @Column({ type: 'text' })
  actionStep: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
