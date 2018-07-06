import { Module } from '@nestjs/common';
import { VkService, GithubService } from './services';

@Module({
  providers: [VkService, GithubService],
  exports: [VkService, GithubService],
})
export class CommonModules {}
