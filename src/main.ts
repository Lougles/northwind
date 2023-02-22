import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Northwind Project')
    .setDescription('The API description')
    .setVersion('1.0')
    .addTag('northwind')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  app.use(bodyParser.json({ limit: '2mb' }));
  app.enableCors();
  await app.listen(3000);
}

bootstrap();
