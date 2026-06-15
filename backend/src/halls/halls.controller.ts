import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { HallsService } from './halls.service';

@Controller('cinemas/:cinemaId/halls')
export class HallsController {
  constructor(private readonly hallsService: HallsService) {}

  @Get()
  getAllHalls(@Param('cinemaId') cinemaId: string) {
    return this.hallsService.getAllHalls(+cinemaId);
  }

  @Get(':id')
  getHall(@Param('cinemaId') cinemaId: string, @Param('id') id: string) {
    return this.hallsService.getHall(+cinemaId, +id);
  }

  @Post()
  createHall(
    @Param('cinemaId') cinemaId: string,
    @Body('name') name: string,
    @Body('seats') seats: { row: number; col: number; status?: string }[],
  ) {
    return this.hallsService.createHall(+cinemaId, name, seats);
  }

  @Put(':id')
  updateHall(
    @Param('cinemaId') cinemaId: string,
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('seats') seats: { row: number; col: number; status?: string }[],
  ) {
    return this.hallsService.updateHall(+cinemaId, +id, name, seats);
  }

  @Delete(':id')
  removeHall(@Param('cinemaId') cinemaId: string, @Param('id') id: string) {
    return this.hallsService.removeHall(+cinemaId, +id);
  }
}
