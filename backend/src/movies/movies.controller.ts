import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CinemaContextGuard } from '../common/guards';
import { CinemaId } from '../common/decorators';
import { ApiParam } from '@nestjs/swagger';

@Controller('movies')
@UseGuards(CinemaContextGuard)
@ApiParam({ name: 'tenant', type: String, example: 'charlie' })
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(@CinemaId() cinemaId: number) {
    return this.moviesService.getAllMovies(cinemaId);
  }

  @Get('now-playing')
  getNowPlaying(@CinemaId() cinemaId: number) {
    return this.moviesService.getNowPlayingMovies(cinemaId);
  }

  @Get('coming-soon')
  getComingSoon(@CinemaId() cinemaId: number) {
    return this.moviesService.getComingSoonMovies(cinemaId);
  }

  @Get(':movieId')
  getMovie(@CinemaId() cinemaId: number, @Param('movieId') movieId: string) {
    return this.moviesService.getMovie(cinemaId, +movieId);
  }

  @Post()
  createMovie(@CinemaId() cinemaId: number, @Body() dto: CreateMovieDto) {
    return this.moviesService.createMovie(cinemaId, dto);
  }

  @Put(':movieId')
  updateMovie(
    @CinemaId() cinemaId: number,
    @Param('movieId') movieId: string,
    @Body() dto: UpdateMovieDto,
  ) {
    return this.moviesService.updateMovie(cinemaId, +movieId, dto);
  }

  @Delete(':movieId')
  removeMovie(@CinemaId() cinemaId: number, @Param('movieId') movieId: string) {
    return this.moviesService.removeMovie(cinemaId, +movieId);
  }
}
