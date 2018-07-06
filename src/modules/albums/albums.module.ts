import { Module } from '@nestjs/common';
import { AlbumsController } from './albums.controller';
import { CommonModules } from '../common/common.module';

@Module({
  imports: [CommonModules],
  controllers: [AlbumsController],
})
export class AlbumsModule {}
