import { Controller, Get, Param } from '@nestjs/common';
import { RiderServiceService } from './rider-service.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('rider')
export class RiderServiceController {
  constructor(private readonly riderServiceService: RiderServiceService) { }

  // @Get(':id')
  @MessagePattern({ cmd: 'get-rider' })
  async getRiderById(data: any) {
    console.log('data', data);
    return Promise.resolve({
      // Simulating a database call
      _id: data.id,
      firstName: 'Doraemon',
      lastName: 'Hattori',
      email: 'doaemon@hattori.com',
    });
  }
}