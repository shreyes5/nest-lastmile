import { Module } from '@nestjs/common';
import { LoggingServiceController } from './logging-service.controller';
import { LoggingServiceService } from './logging-service.service';
import { MongooseModule } from '@nestjs/mongoose';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/logging_service'),
    RiderCoordinatesModule,
  ],
  controllers: [LoggingServiceController],
  providers: [LoggingServiceService],
})
export class LoggingServiceModule {}
