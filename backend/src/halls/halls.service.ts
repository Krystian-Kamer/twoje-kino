import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SeatStatus } from '../../prisma/generated/prisma/enums';

@Injectable()
export class HallsService {
  constructor(private readonly prisma: PrismaService) {}

  getAllHalls(cinemaId: number) {
    return this.prisma.hall.findMany({
      where: { cinemaId },
      include: { seats: true },
    });
  }

  async getHall(cinemaId: number, id: number) {
    const hall = await this.prisma.hall.findFirst({
      where: { id, cinemaId },
      include: { seats: true },
    });
    if (!hall) throw new NotFoundException('Hall not found');
    return hall;
  }

  createHall(
    cinemaId: number,
    name: string,
    seats: { row: number; col: number; status?: string }[],
  ) {
    return this.prisma.hall.create({
      data: {
        name,
        cinemaId,
        seats: {
          create: seats.map((seat) => ({
            row: seat.row,
            col: seat.col,
            status: (seat.status as SeatStatus) ?? SeatStatus.ACTIVE,
          })),
        },
      },
      include: { seats: true },
    });
  }

  async updateHall(
    cinemaId: number,
    id: number,
    name: string,
    seats: { row: number; col: number; status?: string }[],
  ) {
    const hall = await this.prisma.hall.findFirst({ where: { id, cinemaId } });
    if (!hall) throw new NotFoundException('Hall not found');

    await this.prisma.seat.deleteMany({ where: { hallId: id } });

    return this.prisma.hall.update({
      where: { id },
      data: {
        name,
        seats: {
          create: seats.map((seat) => ({
            row: seat.row,
            col: seat.col,
            status: (seat.status as SeatStatus) ?? SeatStatus.ACTIVE,
          })),
        },
      },
      include: { seats: true },
    });
  }

  async removeHall(cinemaId: number, id: number) {
    const hall = await this.prisma.hall.findFirst({ where: { id, cinemaId } });
    if (!hall) throw new NotFoundException('Hall not found');

    return this.prisma.hall.delete({ where: { id } });
  }
}
