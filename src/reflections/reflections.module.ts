import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReflectionsService } from './reflections.service';
import { ReflectionsController } from './reflections.controller';
import { UserReflection } from './entities/user-reflection.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserReflection])],
  controllers: [ReflectionsController],
  providers: [ReflectionsService],
})
export class ReflectionsModule {}
