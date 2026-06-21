import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Injectable()
export class CinemasService {
  constructor(private prisma: PrismaService) {}

  async getAllCinemas() {
    return this.prisma.cinema.findMany();
  }

  async getCinema(tenant: string) {
    const cinema = await this.prisma.cinema.findUnique({ where: { tenant } });

    if (!cinema) {
      throw new NotFoundException(`Cinema '${tenant}' not found`);
    }

    return cinema;
  }

  async createCinema(dto: CreateCinemaDto) {
    return this.prisma.cinema.create({ data: dto });
  }

  async updateCinema(tenant: string, dto: UpdateCinemaDto) {
    return this.prisma.cinema.update({ where: { tenant }, data: dto });
  }

  async removeCinema(tenant: string) {
    return this.prisma.cinema.delete({ where: { tenant } });
  }
}
