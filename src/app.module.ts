import { Module } from '@nestjs/common';
import { AppController, HotelController } from './app.controller';
import { AppService, HotelService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, HotelController],
  providers: [AppService, HotelService],
})
export class AppModule {}
