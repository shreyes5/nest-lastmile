import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateCoordinatesRequest } from './types/create-coordinates.types';
import { create } from 'domain';
import { RiderCoordinatesService } from './rider-coordinates.service';

@Controller('rider-coordinates')
export class RiderCoordinatesController {

    constructor(
        private readonly riderCoordinatesService: RiderCoordinatesService,
    ) { }

    @Get(':id')
    async getRiderCoordinates(@Param() params: any) {
        return this.riderCoordinatesService.getRiderCoordinates(params.id);
    }

    @Post() 
    async saveRiderCoordinates(
        @Body() createCoordinatesRequest: CreateCoordinatesRequest,
    ) {
        return this.riderCoordinatesService.saveRiderCoordinates(createCoordinatesRequest);
    }
}
