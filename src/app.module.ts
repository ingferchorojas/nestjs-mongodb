import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config'; // Importar el módulo de configuración

@Module({
  imports: [
    ConfigModule.forRoot(), // Cargar automáticamente el archivo .env
    MongooseModule.forRoot(process.env.MONGODB_URI ?? ''), // Usar la variable de entorno
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
