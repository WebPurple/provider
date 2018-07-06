interface PhotoSizes {
  type: string;
  url: string;
  width: number;
  height: number;
}

export interface IPhoto {
  id: number;
  sizes: Array<PhotoSizes>;
  text: string;
  date: number;
}

export class GetPhotoDto {
  public count: number;
  public items: Array<IPhoto>;
  constructor(response) {
    this.count = response.count || null;
    this.items = response.items || [];
  }

  static of(response) {
    return new GetPhotoDto(response);
  }
}
