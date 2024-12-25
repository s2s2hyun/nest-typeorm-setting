// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // 환경 변수 로드

  const app = await NestFactory.create(AppModule);

  // Swagger 설정
  const config = new DocumentBuilder()
    .setTitle('My Auth App API')
    .setDescription('API 문서화 예제')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // CORS 설정: 모든 도메인 허용
  app.enableCors({
    origin: '*', // 모든 도메인 허용
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: false, // origin '*'과 호환되도록 credentials는 false로 설정
  });

  await app.listen(3000);
}
bootstrap();