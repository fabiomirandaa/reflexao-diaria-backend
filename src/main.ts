import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { GlobalExceptionFilter } from './common/filters/global-exception.filter';
import { JwtAuthGuard } from './common/guards/jwt-auth.guard';

async function bootstrap() {
  try {
    console.log('--- Inicializando Aplicação ---');
    console.log('NODE_ENV:', process.env.NODE_ENV);
    console.log('PORT:', process.env.PORT);
    console.log('DATABASE_HOST:', process.env.DATABASE_HOST);
    console.log('DATABASE_PORT:', process.env.DATABASE_PORT);
    console.log('DATABASE_USER:', process.env.DATABASE_USER);
    console.log('DATABASE_NAME:', process.env.DATABASE_NAME);
    // Não logar a senha!

    const app = await NestFactory.create(AppModule);

    // Global prefix
    app.setGlobalPrefix('api/v1');

    // CORS
    app.enableCors({
      origin: [
        process.env.FRONTEND_URL ?? 'http://localhost:4200',
        'http://localhost:4200',
        'https://reflexao-diaria-app.web.app',
      ],
      methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    });

    // Global validation pipe
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    // Global exception filter
    app.useGlobalFilters(new GlobalExceptionFilter());

    // Global JWT guard
    const reflector = app.get(Reflector);
    app.useGlobalGuards(new JwtAuthGuard(reflector));

    // Swagger
    const config = new DocumentBuilder()
      .setTitle('Sabedoria Diária API')
      .setDescription(
        'API completa para o app Sabedoria Diária (Reflexão Diária)',
      )
      .setVersion('1.0')
      .addBearerAuth()
      .build();

    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('api/docs', app, document);

    const port = process.env.PORT ?? 3000;
    // Listen on 0.0.0.0 to ensure Docker compatibility
    await app.listen(port, '0.0.0.0');
    console.log(`🚀 Servidor rodando em: http://0.0.0.0:${port}`);
    console.log(`📚 Swagger disponível em: http://0.0.0.0:${port}/api/docs`);
  } catch (error) {
    console.error('❌ Erro fatal ao iniciar a aplicação:', error);
    process.exit(1);
  }
}

bootstrap();
