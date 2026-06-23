import {
  IsString,
  IsArray,
  ValidateNested,
  IsInt,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { SeatStatus } from '../../../prisma/generated/prisma/enums';

export class CreateSeatDto {
  @ApiProperty({ example: 1 })
  @IsInt()
  row: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  col: number;

  @ApiProperty({
    example: SeatStatus.ACTIVE,
    enum: SeatStatus,
    required: false,
  })
  @IsOptional()
  @IsEnum(SeatStatus)
  status?: SeatStatus;
}

export class CreateHallDto {
  @ApiProperty({ example: 'Hall 1' })
  @IsString()
  name: string;

  @ApiProperty({ type: [CreateSeatDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSeatDto)
  seats: CreateSeatDto[];
}
