import { Injectable } from "@nestjs/common";
import { request, paths, Methods } from "../../api";

export type GetPhotosType = {
  owner_id: string;
  album_id: string;
};

@Injectable()
export class AlbumsService {
  async getPhotos(params: GetPhotosType): Promise<JSON> {
    return request(paths[Methods.albums], params);
  }
}
