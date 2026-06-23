import { IsDateString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateScreeningDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  movieId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  hallId: number;

  @ApiProperty({ example: '2026-06-24T18:00:00.000Z' })
  @IsDateString()
  startsAt: string;
}
