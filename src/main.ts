import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    // Strips unknown or not needed info client injects
    whitelist: true
  }));
  await app.listen(3333);
}
bootstrap();
