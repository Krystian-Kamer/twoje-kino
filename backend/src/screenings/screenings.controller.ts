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
import { CinemaContextGuard } from '../common/guards';
import { CinemaId } from '../common/decorators';
import { ApiParam } from '@nestjs/swagger';
import { ScreeningsService } from './screenings.service';
import { CreateScreeningDto } from './dto/create-screening.dto';
import { UpdateScreeningDto } from './dto/update-screening.dto';

@Controller('screenings')
@UseGuards(CinemaContextGuard)
@ApiParam({ name: 'tenant', type: String, example: 'charlie' })
export class ScreeningsController {
  constructor(private readonly screeningsService: ScreeningsService) {}

  @Get()
  getAllScreenings(@CinemaId() cinemaId: number) {
    return this.screeningsService.getAllScreenings(cinemaId);
  }

  @Get(':screeningId')
  getScreening(
    @CinemaId() cinemaId: number,
    @Param('screeningId') screeningId: string,
  ) {
    return this.screeningsService.getScreening(cinemaId, +screeningId);
  }

  @Post()
  createScreening(
    @CinemaId() cinemaId: number,
    @Body() dto: CreateScreeningDto,
  ) {
    return this.screeningsService.createScreening(cinemaId, dto);
  }

  @Put(':screeningId')
  updateScreening(
    @CinemaId() cinemaId: number,
    @Param('screeningId') screeningId: string,
    @Body() dto: UpdateScreeningDto,
  ) {
    return this.screeningsService.updateScreening(cinemaId, +screeningId, dto);
  }

  @Delete(':screeningId')
  removeScreening(
    @CinemaId() cinemaId: number,
    @Param('screeningId') screeningId: string,
  ) {
    return this.screeningsService.removeScreening(cinemaId, +screeningId);
  }
}
