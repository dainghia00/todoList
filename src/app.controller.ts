import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getAge(): string {
    return this.appService.getAge();
  }
  @Get('Hello')
  getHello(): string {
    return this.appService.getHello();
  }
}
