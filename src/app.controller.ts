import { Controller, Get } from '@nestjs/common';
import { AppService, HotelService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}


@Controller('/hotel')
export class HotelController {
  constructor(private readonly hotelService: HotelService) {}

  @Get('/get-hotel')
  getHotel(): string {
    return this.hotelService.getHotel();
  }
}