import { Injectable } from '@nestjs/common';
import { json } from 'express';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}

@Injectable()
export class HotelService {
  getHotel(): string {
    return JSON.stringify("id:1, method: get")
  }
}