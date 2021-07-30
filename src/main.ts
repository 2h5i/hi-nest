import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // 우리 validator 에 도달하지 않도록 하는 것
      forbidNonWhitelisted: true, // 존재하지 않아야 할 요소라는 것을 알려준다.
      transform: true, // 여기 있는 유저들이 보낸 것을 우리가 원하는 실제 타입으로 변환해준다. -> ex(:id 얻어오는 것을 string 이 아닌 Nubmer로 자동 변환 될 수 있도록 해주는것)
    }),
  ); // dto를 사용한 validate 체크를 할 수 있음
  await app.listen(3000);
}
bootstrap();
