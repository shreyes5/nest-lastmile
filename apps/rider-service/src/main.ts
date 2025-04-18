import { NestFactory } from '@nestjs/core';
import { RiderServiceModule } from './rider-service.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  // const app = await NestFactory.create(RiderServiceModule);

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    RiderServiceModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1', // godfkndamnit took so much time to figure this out
      port: 3001,
    },
  });

  await app.listen();
}
bootstrap();