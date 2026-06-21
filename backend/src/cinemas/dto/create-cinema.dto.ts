import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCinemaDto {
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
