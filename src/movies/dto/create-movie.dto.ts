import { IsNumber, IsOptional, IsString } from 'class-validator'; // validate 해주는 패키지

export class CreateMovieDto {
  @IsString()
  readonly title: string;

  @IsNumber()
  readonly year: number;

  @IsString({ each: true })
  @IsOptional()
  readonly genres: string[];
}
