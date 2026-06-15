import { Module } from '@nestjs/common';
import { HallsController } from './halls.controller';
import { HallsService } from './halls.service';
import { PrismaService } from '../prisma.service';

@Module({
  controllers: [HallsController],
  providers: [HallsService, PrismaService],
})
export class HallsModule {}
