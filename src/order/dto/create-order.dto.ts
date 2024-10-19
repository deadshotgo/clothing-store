import {IsNotEmpty, IsNumber, IsOptional, IsString} from "class-validator";

export class CreateOrderDto {

    @IsNotEmpty()
    @IsNumber()
    productId: number;

    @IsOptional()
    @IsNumber()
    useEvent: number;

}