import { Module } from '@nestjs/common';
import { VkService } from './services/vk.service';

@Module({
  providers: [VkService],
  exports: [VkService],
})
export class CommonModules {}
