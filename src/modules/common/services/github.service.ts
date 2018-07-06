import { Injectable } from '@nestjs/common';
import { config } from '../../../config';
import { GetContributorsDto } from '../dto/github/get-contributors.dto';
import axios from 'axios';

@Injectable()
export class GithubService {
  private API_URL = config.github.apiUrl;

  public getContributors(params: { owner: string; repo: string }): Promise<GetContributorsDto> {
    return axios
      .get(`${this.API_URL}/repos/${params.owner}/${params.repo}/contributors`)
      .then(response => response.data)
      .then(GetContributorsDto.of)
      .catch(e => {
        console.error(e);
        return null;
      });
  }
}
