import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class HallsService {
  constructor(private prisma: PrismaService) {}

  async getAllHalls(cinemaId: number) {
    return this.prisma.hall.findMany({ where: { cinemaId } });
  }

  async getHall(cinemaId: number, id: number) {
    return this.prisma.hall.findFirst({ where: { id, cinemaId } });
  }

  async createHall(cinemaId: number, name: string, rows: number, cols: number) {
    return this.prisma.hall.create({
      data: { cinemaId, name, rows, cols },
    });
  }

  async updateHall(
    cinemaId: number,
    id: number,
    name: string,
    rows: number,
    cols: number,
  ) {
    return this.prisma.hall.update({
      where: { id },
      data: { name, rows, cols },
    });
  }

  async removeHall(cinemaId: number, id: number) {
    return this.prisma.hall.delete({ where: { id } });
  }
}
