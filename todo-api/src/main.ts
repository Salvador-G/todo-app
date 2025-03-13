import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Nest Todo API")
    .setDescription("Todo Maker Api")
    .setVersion("1.0")
    .build();
  app.setGlobalPrefix("api");
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("/", app, document);
  
  app.enableCors({
    origin: '*',  // Permitir todos los orígenes
    methods: 'GET,POST',  // Métodos permitidos
    allowedHeaders: 'Content-Type, Authorization',  // Permitir encabezados de contenido y autorización
  });

  await app.listen(3000);
}

bootstrap().then();
