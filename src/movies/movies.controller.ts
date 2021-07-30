import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/search') // search 가 :id밑에 있으면 id로 인식되기때문에 :id 된 부분들 위로 올려야된다.
  search(@Query('year') searchingYear) {
    return `We are sesarching for a movie made after:${searchingYear}`;
  }

  @Get('/:id') // id 와 @parma(''id)는 같아야한다.
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  remove(@Param('id') movieId: number) {
    this.moviesService.deleteOne(movieId);
  }

  //   @Put() //put은 모든것을 업데이트한다
  @Patch('/:id') //일부만 업데이트한다.
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}
