// lat,lng,rider_id;

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type RiderCoordinateDcoument = HydratedDocument<RiderCoordinate>;

@Schema()
export class RiderCoordinate {
    @Prop({ required: true })
    lat: number;

    @Prop({ required: true })
    lng: number;

    @Prop({ required: true })
    rider_id: string;
}

export const RiderCoordinateSchema = SchemaFactory.createForClass(RiderCoordinate);