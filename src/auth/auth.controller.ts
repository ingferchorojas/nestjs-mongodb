import { Controller, Post, Body, Get, UseGuards, HttpCode } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(200) // Establece el código de estado HTTP
  async register(@Body() registerDto: RegisterDto) {
    const result = await this.authService.register(registerDto);
    return {
      data: result?.data ?? {},
      message: "Registro exitoso",
      success: true,
    };
  }

  @Post('login')
  @HttpCode(200) // Establece el código de estado HTTP
  async login(@Body() loginDto: LoginDto) {
    const result = await this.authService.login(loginDto);
    return {
      data: result?.data?.token ?? '',
      message: "Inicio de sesión exitoso",
      success: true,
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get('users')
  @HttpCode(200) // Establece el código de estado HTTP
  async getUsers() {
    const users = await this.authService.getUsers();
    return {
      data: users?.data ?? [],
      message: "Usuarios obtenidos exitosamente",
      success: true,
    };
  }
}
