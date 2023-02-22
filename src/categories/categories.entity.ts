import { Column, Entity, PrimaryColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity({ name: 'categories' })
export class CategoriesEntity {
  @ApiProperty()
  @PrimaryColumn({ name: 'category_id', type: 'smallint' })
  category_id: number;

  @ApiProperty()
  @Column({ name: 'category_name', type: 'varchar', default: null })
  category_name: string;

  @ApiProperty()
  @Column({ name: 'description', type: 'text' })
  description: string;

  @ApiProperty()
  @Column({ name: 'picture', type: 'bytea' })
  picture: string;
}
