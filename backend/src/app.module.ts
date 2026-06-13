import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma.service';
import { CinemasModule } from './cinemas/cinemas.module';
import { ConfigModule } from '@nestjs/config';
import { MoviesModule } from './movies/movies.module';
import { HallsModule } from './halls/halls.module';
import { SeatsModule } from './seats/seats.module';
import { ScreeningsModule } from './screenings/screenings.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), CinemasModule, MoviesModule, HallsModule, SeatsModule, ScreeningsModule, ReservationsModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
  exports: [PrismaService],
})
export class AppModule {}
