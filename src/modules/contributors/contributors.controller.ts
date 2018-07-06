import { Get, Controller, Param, Header } from '@nestjs/common';
import { IGetContributorsParams } from './interfaces/GetContributors';
import { GetContributorsDto } from '../common/dto/github/get-contributors.dto';
import { GithubService } from '../common/services';

@Controller('contributors')
export class ContributorsController {
  constructor(private readonly service: GithubService) {}

  @Get(':owner/:repo')
  @Header('Content-Type', 'application/json')
  getContributors(@Param() params: IGetContributorsParams): Promise<GetContributorsDto> {
    return this.service.getContributors(params);
  }
}
