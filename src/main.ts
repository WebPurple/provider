import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { config } from './config';
import { accessChecker } from './middlewares';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(accessChecker);
  await app.listen(config.port);
}
bootstrap();
