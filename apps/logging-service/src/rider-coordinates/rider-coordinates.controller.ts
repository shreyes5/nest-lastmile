import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateCoordinatesRequest } from './types/create-coordinates.types';
import { create } from 'domain';

@Controller('rider-coordinates')
export class RiderCoordinatesController {
    @Get()
    getRiderCoordinates() {
        return 'Hello from Rider Coordinates!';
    }

    @Post()
    saveRiderCoordinates(
        @Body() createCoordinatesRequest: CreateCoordinatesRequest,
    ) {
        return createCoordinatesRequest
    }
}
