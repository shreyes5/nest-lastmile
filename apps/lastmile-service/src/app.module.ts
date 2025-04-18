import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RiderCoordinatesModule } from './rider-coordinates/rider-coordinates.module';

@Module({
  imports: [RiderCoordinatesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
