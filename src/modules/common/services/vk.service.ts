import { Injectable } from '@nestjs/common';
import { config } from '../../../config';
import { GetPhotoDto } from '../dto/vk/get-photo.dto';
import axios from 'axios';

@Injectable()
export class VkService {
  private SERVICE_TOKEN = config.vk.serviceToken;
  private API_URL = config.vk.apiUrl;
  private API_VERSION = config.vk.apiVersion;

  public getPhotos(params: { owner_id: string; album_id: string }): Promise<GetPhotoDto> {
    return axios
      .get(`${this.API_URL}/photos.get`, {
        params: {
          ...params,
          access_token: this.SERVICE_TOKEN,
          v: this.API_VERSION,
        },
      })
      .then(response => response.data.response)
      .then(GetPhotoDto.of)
      .catch(e => {
        console.error(e);
        return null;
      });
  }
}
