import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Injectable()
export class CinemasService {
  constructor(private prisma: PrismaService) {}

  async getAllCinemas() {
    return this.prisma.cinema.findMany();
  }

  async getCinema(id: number) {
    return this.prisma.cinema.findUnique({ where: { id } });
  }

  async createCinema(dto: CreateCinemaDto) {
    return this.prisma.cinema.create({ data: dto });
  }

  async updateCinema(id: number, dto: UpdateCinemaDto) {
    return this.prisma.cinema.update({ where: { id }, data: dto });
  }

  async removeCinema(id: number) {
    return this.prisma.cinema.delete({ where: { id } });
  }
}
