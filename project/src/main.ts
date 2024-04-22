import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieparser from "cookie-parser";
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieparser());
  const config = new DocumentBuilder()
    .setTitle('School Management System')
    .setDescription("A NestJS-based school management system provides comprehensive functionality for handling student enrollment, teacher management and administrative tasks. Leveraging NestJS's robust capabilities, the system ensures secure data storage, user authentication, and efficient communication within the educational community, enhancing organizational efficiency and streamlining administrative processes.")
    .setVersion('0.01')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
