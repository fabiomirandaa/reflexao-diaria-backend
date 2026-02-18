import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  Unique,
} from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { ThemeCard } from '../../theme-cards/entities/theme-card.entity';

@Entity('user_reflections')
@Unique(['userId', 'cardId'])
export class UserReflection {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid' })
  userId: string;

  @ManyToOne(() => User, (user) => user.reflections)
  @JoinColumn({ name: 'userId' })
  user: User;

  @Column({ type: 'varchar' })
  cardId: string;

  @ManyToOne(() => ThemeCard, (card) => card.reflections)
  @JoinColumn({ name: 'cardId' })
  card: ThemeCard;

  @Column({ type: 'text' })
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
