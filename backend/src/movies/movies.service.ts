import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { NotFoundException } from '@nestjs/common';

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

  async createMovie(
    cinemaId: number,
    title: string,
    description: string,
    duration: number,
    videoUrl: string,
    thumbnailUrl: string,
  ) {
    return this.prisma.movie.create({
      data: { cinemaId, title, description, duration, videoUrl, thumbnailUrl },
    });
  }

  async updateMovie(
    cinemaId: number,
    id: number,
    title: string,
    description: string,
    duration: number,
    videoUrl: string,
    thumbnailUrl: string,
  ) {
    const movie = await this.prisma.movie.findFirst({
      where: { id, cinemaId },
    });
    if (!movie) throw new NotFoundException('Movie not found');

    return this.prisma.movie.update({
      where: { id },
      data: { title, description, duration, videoUrl, thumbnailUrl },
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
