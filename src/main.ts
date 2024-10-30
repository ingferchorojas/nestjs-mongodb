import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config } from 'dotenv';
import { ValidationPipe } from '@nestjs/common';


// Cargar variables de entorno
config();

// Verificar si MONGODB_URI está definido
if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI must be defined in the .env file');
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(process.env.PORT || 3000);
}

bootstrap();
