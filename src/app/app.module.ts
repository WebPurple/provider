import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AlbumsModule, ContributorsModule } from '../modules';

@Module({
  imports: [AlbumsModule, ContributorsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
