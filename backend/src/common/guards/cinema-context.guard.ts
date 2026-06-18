import {
  CanActivate,
  ExecutionContext,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CinemaContextGuard implements CanActivate {
  constructor(private readonly prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const cinemaId = +request.params.cinemaId;

    const cinema = await this.prisma.cinema.findUnique({
      where: { id: cinemaId },
    });

    if (!cinema) {
      throw new NotFoundException(`Cinema with id ${cinemaId} not found`);
    }

    request.cinemaId = cinema.id;
    request.cinema = cinema;

    return true;
  }
}
