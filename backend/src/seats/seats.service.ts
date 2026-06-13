import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SeatStatus } from '../../prisma/generated/prisma/enums';

@Injectable()
export class SeatsService {
  constructor(private prisma: PrismaService) {}

  async getAllSeats(hallId: number) {
    return this.prisma.seat.findMany({ where: { hallId } });
  }

  async getSeat(hallId: number, id: number) {
    return this.prisma.seat.findFirst({ where: { id, hallId } });
  }

  async createSeat(hallId: number, row: number, col: number) {
    return this.prisma.seat.create({
      data: { hallId, row, col },
    });
  }

  async updateSeat(
    hallId: number,
    id: number,
    row: number,
    col: number,
    status: string,
  ) {
    return this.prisma.seat.update({
      where: { id },
      data: { row, col, status: status as SeatStatus },
    });
  }

  async removeSeat(hallId: number, id: number) {
    return this.prisma.seat.delete({ where: { id } });
  }
}
