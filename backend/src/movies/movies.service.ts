import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotFoundException } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async getAllMovies(cinemaId: number) {
    return this.prisma.movie.findMany({ where: { cinemaId } });
  }

  async getMovie(cinemaId: number, id: number) {
    const movie = await this.prisma.movie.findFirst({
      where: { id, cinemaId },
    });
    if (!movie) throw new NotFoundException('Movie not found');
    return movie;
  }

  async createMovie(cinemaId: number, dto: CreateMovieDto) {
    return this.prisma.movie.create({
      data: { cinemaId, ...dto },
    });
  }

  async updateMovie(cinemaId: number, id: number, dto: UpdateMovieDto) {
    const movie = await this.prisma.movie.findFirst({
      where: { id, cinemaId },
    });
    if (!movie) throw new NotFoundException('Movie not found');

    return this.prisma.movie.update({
      where: { id },
      data: dto,
    });
  }

  async removeMovie(cinemaId: number, id: number) {
    const movie = await this.prisma.movie.findFirst({
      where: { id, cinemaId },
    });
    if (!movie) throw new NotFoundException('Movie not found');

    return this.prisma.movie.delete({ where: { id } });
  }
}
