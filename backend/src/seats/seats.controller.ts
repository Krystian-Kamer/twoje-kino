import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { SeatsService } from './seats.service';

@Controller('cinemas/:cinemaId/halls/:hallId/seats')
export class SeatsController {
  constructor(private readonly seatsService: SeatsService) {}

  @Get()
  getAllSeats(@Param('hallId') hallId: string) {
    return this.seatsService.getAllSeats(+hallId);
  }

  @Get(':id')
  getSeat(@Param('hallId') hallId: string, @Param('id') id: string) {
    return this.seatsService.getSeat(+hallId, +id);
  }

  @Post()
  createSeat(
    @Param('hallId') hallId: string,
    @Body('row') row: number,
    @Body('col') col: number,
  ) {
    return this.seatsService.createSeat(+hallId, row, col);
  }

  @Put(':id')
  updateSeat(
    @Param('hallId') hallId: string,
    @Param('id') id: string,
    @Body('row') row: number,
    @Body('col') col: number,
    @Body('status') status: string,
  ) {
    return this.seatsService.updateSeat(+hallId, +id, row, col, status);
  }

  @Delete(':id')
  removeSeat(@Param('hallId') hallId: string, @Param('id') id: string) {
    return this.seatsService.removeSeat(+hallId, +id);
  }
}
