import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { RouterModule } from '@nestjs/core';
import { PrismaModule } from './prisma/prisma.module';
import { CinemasModule } from './cinemas/cinemas.module';
import { MoviesModule } from './movies/movies.module';
import { HallsModule } from './halls/halls.module';
import { ScreeningsModule } from './screenings/screenings.module';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    CinemasModule,
    MoviesModule,
    HallsModule,
    ScreeningsModule,
    ReservationsModule,
    RouterModule.register([
      {
        path: 'cinemas/:tenant',
        children: [
          MoviesModule,
          HallsModule,
          ScreeningsModule,
          ReservationsModule,
        ],
      },
    ]),
  ],
})
export class AppModule {}
