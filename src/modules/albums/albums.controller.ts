import { Get, Controller, Param, Header } from '@nestjs/common';
import { IGetPhotosParams } from './interfaces/GetPhoto';
import { GetPhotoDto } from '../common/dto/vk/get-photo.dto';
import { VkService } from '../common/services/vk.service';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly service: VkService) {}

  @Get(':owner_id/:album_id')
  @Header('Content-Type', 'application/json')
  @Header('Access-Control-Allow-Origin', 'http://webpurple.com')
  getPhotos(@Param() params: IGetPhotosParams): Promise<GetPhotoDto> {
    return this.service.getPhotos(params);
  }
}
