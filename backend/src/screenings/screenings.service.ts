import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';

@Injectable()
export class ScreeningsService {
  constructor(private prisma: PrismaService) {}

  async getAllScreenings(cinemaId: number) {
    return this.prisma.screening.findMany({
      where: { hall: { cinemaId } },
      include: { movie: true, hall: true },
    });
  }

  async getScreening(cinemaId: number, id: number) {
    const screening = await this.prisma.screening.findFirst({
      where: { id, hall: { cinemaId } },
      include: { movie: true, hall: true },
    });
    if (!screening) throw new NotFoundException('Screening not found');
    return screening;
  }

  async createScreening(cinemaId: number, dto: CreateScreeningDto) {
    const hall = await this.prisma.hall.findFirst({
      where: { id: dto.hallId, cinemaId },
    });
    if (!hall) throw new NotFoundException('Hall not found');

    const movie = await this.prisma.movie.findFirst({
      where: { id: dto.movieId, cinemaId },
    });
    if (!movie) throw new NotFoundException('Movie not found');

    const endsAt = new Date(
      new Date(dto.startsAt).getTime() + movie.duration * 60 * 1000,
    );

    return this.prisma.screening.create({
      data: { ...dto, endsAt },
    });
  }

  async updateScreening(cinemaId: number, id: number, dto: UpdateScreeningDto) {
    const screening = await this.prisma.screening.findFirst({
      where: { id, hall: { cinemaId } },
    });
    if (!screening) throw new NotFoundException('Screening not found');

    return this.prisma.screening.update({
      where: { id },
      data: dto,
    });
  }

  async removeScreening(cinemaId: number, id: number) {
    const screening = await this.prisma.screening.findFirst({
      where: { id, hall: { cinemaId } },
    });
    if (!screening) throw new NotFoundException('Screening not found');

    return this.prisma.screening.delete({ where: { id } });
  }
}
