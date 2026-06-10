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
  createCinema(@Body('name') name: string) {
    return this.cinemasService.createCinema(name);
  }

  @Put(':id')
  updateCinema(@Param('id') id: string, @Body('name') name: string) {
    return this.cinemasService.updateCinema(+id, name);
  }

  @Delete(':id')
  removeCinema(@Param('id') id: string) {
    return this.cinemasService.removeCinema(+id);
  }
}
