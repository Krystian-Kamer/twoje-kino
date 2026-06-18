import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CinemasService } from './cinemas.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { UpdateCinemaDto } from './dto/update-cinema.dto';

@Controller('cinemas')
export class CinemasController {
  constructor(private readonly cinemasService: CinemasService) {}

  @Get()
  getAllCinemas() {
    return this.cinemasService.getAllCinemas();
  }

  @Get(':id')
  getCinema(@Param('id') id: string) {
    return this.cinemasService.getCinema(+id);
  }

  @Post()
  createCinema(@Body() dto: CreateCinemaDto) {
    return this.cinemasService.createCinema(dto);
  }

  @Put(':id')
  updateCinema(@Param('id') id: string, @Body() dto: UpdateCinemaDto) {
    return this.cinemasService.updateCinema(+id, dto);
  }

  @Delete(':id')
  removeCinema(@Param('id') id: string) {
    return this.cinemasService.removeCinema(+id);
  }
}
