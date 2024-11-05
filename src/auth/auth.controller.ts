import { Controller, Post, Body, Get, UseGuards, HttpCode, HttpException, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(200) // Establece el código de estado HTTP
  async register(@Body() registerDto: RegisterDto) {
    try {
      const result = await this.authService.register(registerDto);
      return {
        data: result?.data ?? {},
        message: "Registro exitoso",
        success: true,
      };
    } catch (error) {
      const messageError: any = error
      throw new HttpException({
        success: false,
        message: messageError.message || 'Error al registrar usuario',
        data: null,
      }, 500);
    }
  }

  @Post('login')
  @HttpCode(200) // Establece el código de estado HTTP
  async login(@Body() loginDto: LoginDto) {
    try {
      const result = await this.authService.login(loginDto);
      return {
        data: result?.data?.token ?? '',
        message: "Inicio de sesión exitoso",
        success: true,
      };
    } catch (error) {
      const messageError: any = error
      throw new HttpException({
        success: false,
        message: messageError.message || 'Error al iniciar sesión',
        data: null,
      }, 401);
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  @HttpCode(200) // Establece el código de estado HTTP
  async getUsers() {
    try {
      const users = await this.authService.getUsers();
      return {
        data: users?.data ?? [],
        message: "Usuarios obtenidos exitosamente",
        success: true,
      };
    } catch (error) {
      const messageError: any = error
      throw new HttpException({
        success: false,
        message: messageError.message || 'Error al obtener usuarios',
        data: null,
      }, 500);
    }
  }
}
