import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCoordinatesRequest {

    @IsNumber()
    @IsNotEmpty()
    lat: number;

    @IsNumber()
    @IsNotEmpty()
    lng: number;

    @IsString()
    @IsNotEmpty()
    rider_id: string;
}

