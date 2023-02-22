import { EntityManager } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CategoriesEntity } from './categories.entity';

@Injectable()
export class CategoriesService {
  constructor(private readonly entityManager: EntityManager) {}
  async getList(): Promise<CategoriesEntity[]> {
    return await this.entityManager.find(CategoriesEntity);
  }
}
