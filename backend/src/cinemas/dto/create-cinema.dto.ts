import { ApiProperty } from '@nestjs/swagger';

export class CreateCinemaDto {
  @ApiProperty({ example: 'Cinema City' })
  name: string;
}
