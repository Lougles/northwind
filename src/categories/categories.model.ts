import { ApiProperty } from '@nestjs/swagger';

export class CreateCategoriesModel {
  @ApiProperty()
  category_name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  picture: string;
}
