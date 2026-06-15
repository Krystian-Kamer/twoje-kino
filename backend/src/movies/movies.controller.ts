import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('cinemas/:cinemaId/movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAllMovies(@Param('cinemaId') cinemaId: string) {
    return this.moviesService.getAllMovies(+cinemaId);
  }

  @Get(':id')
  getMovie(@Param('cinemaId') cinemaId: string, @Param('id') id: string) {
    return this.moviesService.getMovie(+cinemaId, +id);
  }

  @Post()
  createMovie(
    @Param('cinemaId') cinemaId: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('duration') duration: number,
    @Body('videoUrl') videoUrl: string,
    @Body('thumbnailUrl') thumbnailUrl: string,
  ) {
    return this.moviesService.createMovie(
      +cinemaId,
      title,
      description,
      duration,
      videoUrl,
      thumbnailUrl,
    );
  }

  @Put(':id')
  updateMovie(
    @Param('cinemaId') cinemaId: string,
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('duration') duration: number,
    @Body('videoUrl') videoUrl: string,
    @Body('thumbnailUrl') thumbnailUrl: string,
  ) {
    return this.moviesService.updateMovie(
      +cinemaId,
      +id,
      title,
      description,
      duration,
      videoUrl,
      thumbnailUrl,
    );
  }

  @Delete(':id')
  removeMovie(@Param('cinemaId') cinemaId: string, @Param('id') id: string) {
    return this.moviesService.removeMovie(+cinemaId, +id);
  }
}
