import { ApiProperty } from '@nestjs/swagger';

export class UpdateCinemaDto {
  @ApiProperty({ example: 'Cinema City' })
  name: string;
}
