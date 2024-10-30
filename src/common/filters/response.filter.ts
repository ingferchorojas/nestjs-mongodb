import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';

@Catch()
export class ResponseFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const status = exception instanceof HttpException ? exception.getStatus() : 500;

    const message = exception instanceof HttpException ? exception.message : 'Internal server error';

    response.status(status).json({
      data: [],
      message,
      success: status === 200,
    });
  }
}
