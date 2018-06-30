import axios from "axios";
import { config } from "../config";

export const request = (path: string, params: object): Promise<JSON> =>
  axios
    .get(`${path}`, {
      params: {
        ...params,
        access_token: config.serviceToken,
        v: config.apiVersion
      }
    })
    .then(response => response.data.response)
    .catch(console.error);
