import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CinemasService {
  constructor(private prisma: PrismaService) {}

  async getAllCinemas() {
    return this.prisma.cinema.findMany();
  }

  async getCinema(id: number) {
    return this.prisma.cinema.findUnique({ where: { id } });
  }

  async createCinema(name: string) {
    return this.prisma.cinema.create({ data: { name } });
  }

  async updateCinema(id: number, name: string) {
    return this.prisma.cinema.update({ where: { id }, data: { name } });
  }

  async removeCinema(id: number) {
    return this.prisma.cinema.delete({ where: { id } });
  }
}
