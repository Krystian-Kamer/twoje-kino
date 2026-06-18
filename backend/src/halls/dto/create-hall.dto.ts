import {
  IsString,
  IsArray,
  ValidateNested,
  IsInt,
  IsOptional,
  IsEnum,
} from 'class-validator';
import { Type } from 'class-transformer';
import { SeatStatus } from '../../../prisma/generated/prisma/enums';

export class CreateSeatDto {
  @IsInt()
  row: number;

  @IsInt()
  col: number;

  @IsOptional()
  @IsEnum(SeatStatus)
  status?: SeatStatus;
}

export class CreateHallDto {
  @IsString()
  name: string;

  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => CreateSeatDto)
  seats: CreateSeatDto[];
}
