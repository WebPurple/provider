import { Get, Controller, Header, HttpCode } from '@nestjs/common';

@Controller()
export class AppController {
  constructor() {}

  @Get()
  @HttpCode(301)
  @Header('Location', 'https://www.webpurple.net/')
  root(): string {
    return 'Hello world!';
  }
}
