import { Get, Controller, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @HttpCode(200)
  root(): string {
    return 'WebPurple provider service is working...';
  }
}
