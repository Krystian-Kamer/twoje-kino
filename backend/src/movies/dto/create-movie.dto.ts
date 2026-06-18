import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsInt, IsUrl, Min } from 'class-validator';

export class CreateMovieDto {
  @ApiProperty({ example: 'Inception' })
  @IsString()
  title: string;

  @ApiProperty({ example: 'Film o snach' })
  @IsString()
  description: string;

  @ApiProperty({ example: 120 })
  @IsInt()
  @Min(1)
  duration: number;

  @ApiProperty({ example: 'https://example.com/video.mp4' })
  @IsUrl()
  videoUrl: string;

  @ApiProperty({ example: 'https://example.com/thumbnail.jpg' })
  @IsUrl()
  thumbnailUrl: string;
}
