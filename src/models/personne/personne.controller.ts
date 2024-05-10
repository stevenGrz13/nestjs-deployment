import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { PersonneService } from './personne.service';
import { Personne } from './personne.entity';

@Controller('personne')
export class PersonneController {
  constructor(private readonly usersService: PersonneService) {}

  //get all users
  @Get()
  async findAll(): Promise<Personne[]> {
    return this.usersService.findAll();
  }

  //get user by id
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Personne> {
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('Personne does not exist!');
    } else {
      return user;
    }
  }

  //create user
  @Post()
  async create(@Body() user: Personne): Promise<Personne> {
    return this.usersService.create(user);
  }

  //update user
  @Put(':id')
  async update (@Param('id') id: number, @Body() user: Personne): Promise<any> {
    return this.usersService.update(id, user);
  }

  //delete user
  @Delete(':id')
  async delete(@Param('id') id: number): Promise<any> {
    //handle error if user does not exist
    const user = await this.usersService.findOne(id);
    if (!user) {
      throw new NotFoundException('Personne does not exist!');
    }
    return this.usersService.delete(id);
  }
}