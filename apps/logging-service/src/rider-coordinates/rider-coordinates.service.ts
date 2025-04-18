import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { RiderCoordinate } from './schemas/rider-coordinates.schema';
import { Model } from 'mongoose';
import { CreateCoordinatesRequest } from './types/create-coordinates.types';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RiderCoordinatesService {
    constructor(
        @InjectModel(RiderCoordinate.name)
        private readonly riderCoordinateModel: Model<RiderCoordinate>,
        @Inject('RIDER_SERVICE') private readonly client: ClientProxy, // Use the appropriate type for your client
    ) { }

    async getRiderCoordinates(riderId: string) {
        try {
            const coordinates = await this.riderCoordinateModel.find({ rider_id: riderId });
            console.log('coordinates', coordinates);
            // need to communicate with rider service using the rider id
            // async communication via TCP, rabbitmq, etc.
            const pattern = { cmd: 'get-rider' }
            const payload = { id: riderId }
            const rider = await firstValueFrom(this.client.send(pattern, payload))
            console.log('rider', rider);
            return {
                coordinates,
                rider
            }
        } catch (error) {
            console.log('error', error);
            throw new Error('Error fetching rider coordinates');
        }
    }

    async saveRiderCoordinates(createCoordinatesRequest: CreateCoordinatesRequest) {
        return await this.riderCoordinateModel.create(createCoordinatesRequest);
    }
}
