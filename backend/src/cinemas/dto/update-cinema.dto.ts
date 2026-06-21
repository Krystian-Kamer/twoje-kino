import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateCinemaDto {
  @ApiProperty({ example: 'cinema-city' })
  @IsString()
  @IsNotEmpty()
  tenant: string;

  @ApiProperty({ example: 'Cinema City' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'The best cinema in the city' })
  @IsString()
  @IsNotEmpty()
  description: string;
}
