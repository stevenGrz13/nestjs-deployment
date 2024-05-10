import { Module } from '@nestjs/common';
import { PersonneController } from './personne.controller';
import { PersonneService } from './personne.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Personne } from './personne.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Personne])],
  controllers: [PersonneController],
  providers: [PersonneService]
})
export class PersonneModule {}
