import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Personne } from './personne.entity';

@Injectable()
export class PersonneService {
  constructor(
    @InjectRepository(Personne)
    private userRepository: Repository<Personne>,
  ) {}

  async findAll(): Promise<Personne[]> {
    return this.userRepository.find();
  }

  async findOne(id: number): Promise<Personne> {
    return this.userRepository.findOne({ where: { id } });
  }

  async create(user: Partial<Personne>): Promise<Personne> {
    const newuser = this.userRepository.create(user);
    return this.userRepository.save(newuser);
  }

  async update(id: number, user: Partial<Personne>): Promise<Personne> {
    await this.userRepository.update(id, user);
    return this.userRepository.findOne({ where: { id } });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}