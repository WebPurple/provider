import { Module } from '@nestjs/common';
import { ContributorsController } from './contributors.controller';
import { CommonModules } from '../common/common.module';

@Module({
  imports: [CommonModules],
  controllers: [ContributorsController],
})
export class ContributorsModule {}
