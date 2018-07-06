import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AlbumsModule } from '../modules/albums/albums.module';

@Module({
  imports: [AlbumsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
