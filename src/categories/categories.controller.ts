import { CategoriesService } from './categories.service';
import { Controller, Get } from '@nestjs/common';
import { ResponseModel, successResponse } from '../utils/response.models';
import { CategoriesEntity } from './categories.entity';
@Controller('categories')
export class CategoriesController {
  constructor(private readonly service: CategoriesService) {}

  @Get('getList')
  async getList(): Promise<ResponseModel<CategoriesEntity[]>> {
    return successResponse(await this.service.getList());
  }
}
