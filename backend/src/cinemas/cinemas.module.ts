import { Module } from '@nestjs/common';
import { CinemasController } from './cinemas.controller';
import { CinemasService } from './cinemas.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [CinemasController],
  providers: [CinemasService, PrismaService],
})
export class CinemasModule {}
