import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { SeatStatus } from '../../prisma/generated/prisma/enums';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';

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

  createHall(cinemaId: number, dto: CreateHallDto) {
    return this.prisma.hall.create({
      data: {
        name: dto.name,
        cinemaId,
        seats: {
          create: dto.seats.map((seat) => ({
            row: seat.row,
            col: seat.col,
            status: seat.status ?? SeatStatus.ACTIVE,
          })),
        },
      },
      include: { seats: true },
    });
  }

  async updateHall(cinemaId: number, id: number, dto: UpdateHallDto) {
    const hall = await this.prisma.hall.findFirst({ where: { id, cinemaId } });
    if (!hall) throw new NotFoundException('Hall not found');

    if (dto.seats !== undefined) {
      await this.prisma.seat.deleteMany({ where: { hallId: id } });
    }

    return this.prisma.hall.update({
      where: { id },
      data: {
        name: dto.name,
        ...(dto.seats !== undefined && {
          seats: {
            create: dto.seats.map((seat) => ({
              row: seat.row,
              col: seat.col,
              status: seat.status ?? SeatStatus.ACTIVE,
            })),
          },
        }),
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
