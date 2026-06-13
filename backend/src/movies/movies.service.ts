import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  async getAllMovies(cinemaId: number) {
    return this.prisma.movie.findMany({ where: { cinemaId } });
  }

  async getMovie(cinemaId: number, id: number) {
    return this.prisma.movie.findFirst({ where: { id, cinemaId } });
  }

  async createMovie(
    cinemaId: number,
    title: string,
    description: string,
    duration: number,
  ) {
    return this.prisma.movie.create({
      data: { cinemaId, title, description, duration },
    });
  }

  async updateMovie(
    cinemaId: number,
    id: number,
    title: string,
    description: string,
    duration: number,
  ) {
    return this.prisma.movie.update({
      where: { id },
      data: { title, description, duration },
    });
  }

  async removeMovie(cinemaId: number, id: number) {
    return this.prisma.movie.delete({ where: { id } });
  }
}
