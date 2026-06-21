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

    const tenant = request.params.tenant;

    const cinema = await this.prisma.cinema.findUnique({
      where: { tenant },
    });

    if (!cinema) {
      throw new NotFoundException(`Cinema with tenant ${tenant} not found`);
    }

    request.cinema = cinema;

    return true;
  }
}
