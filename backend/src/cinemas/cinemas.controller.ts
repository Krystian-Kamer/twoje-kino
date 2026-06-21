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

  @Get(':tenant')
  getCinema(@Param('tenant') tenant: string) {
    return this.cinemasService.getCinema(tenant);
  }

  @Post()
  createCinema(@Body() dto: CreateCinemaDto) {
    return this.cinemasService.createCinema(dto);
  }

  @Put(':tenant')
  updateCinema(@Param('tenant') tenant: string, @Body() dto: UpdateCinemaDto) {
    return this.cinemasService.updateCinema(tenant, dto);
  }

  @Delete(':tenant')
  removeCinema(@Param('tenant') tenant: string) {
    return this.cinemasService.removeCinema(tenant);
  }
}
