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
import { HallsService } from './halls.service';
import { CreateHallDto } from './dto/create-hall.dto';
import { UpdateHallDto } from './dto/update-hall.dto';
import { CinemaContextGuard } from '../common/guards';
import { CinemaId } from '../common/decorators';
import { ApiParam } from '@nestjs/swagger';

@Controller('halls')
@UseGuards(CinemaContextGuard)
@ApiParam({ name: 'cinemaId', type: Number, example: 1 })
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Get()
  findAll(@CinemaId() cinemaId: number) {
    return this.hallsService.getAllHalls(cinemaId);
  }

  @Get(':hallId')
  getHall(@CinemaId() cinemaId: number, @Param('hallId') hallId: string) {
    return this.hallsService.getHall(cinemaId, +hallId);
  }

  @Post()
  createHall(@CinemaId() cinemaId: number, @Body() dto: CreateHallDto) {
    return this.hallsService.createHall(cinemaId, dto);
  }

  @Put(':hallId')
  updateHall(
    @CinemaId() cinemaId: number,
    @Param('hallId') hallId: string,
    @Body() dto: UpdateHallDto,
  ) {
    return this.hallsService.updateHall(cinemaId, +hallId, dto);
  }

  @Delete(':hallId')
  removeHall(@CinemaId() cinemaId: number, @Param('hallId') hallId: string) {
    return this.hallsService.removeHall(cinemaId, +hallId);
  }
}
