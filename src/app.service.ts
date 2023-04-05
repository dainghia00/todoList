import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAge(): string {
    return '123';
  }
  getHello(): string {
    return 'Hello World 111!';
  }
}
