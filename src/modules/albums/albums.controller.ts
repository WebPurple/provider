import { Get, Controller, Param, Header } from "@nestjs/common";
import { AlbumsService, GetPhotosType } from "./albums.service";

@Controller("albums")
export class AlbumsController {
  constructor(private readonly service: AlbumsService) {}

  @Get(":owner_id/:album_id")
  @Header("Content-Type", "application/json")
  @Header("Access-Control-Allow-Origin", "*")
  getPhotos(@Param() params: GetPhotosType): Promise<JSON> {
    return this.service.getPhotos(params);
  }
}
