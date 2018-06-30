import { config } from "../config";

export enum Methods {
  albums = "albums"
}

type PathsType = { [method: string]: string };

export const paths: PathsType = {
  [Methods.albums]: `${config.apiUrl}/photos.get`
};
