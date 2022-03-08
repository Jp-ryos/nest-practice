import { Common } from 'src/common/entities/common.entity';
import { Column, Entity, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity('t_users')
export class User {

  @PrimaryGeneratedColumn('uuid')
  user_id: string;

  @Column({
    unique: true,
    type: 'varchar',
    length: 20,
  })
  user_code?: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 50,
  })
  user_name?: string;

  @Column({
    type: 'varchar',
    length: 512,
  })
  password?: string;

  @Column({
    nullable: true,
    type: 'varchar',
    length: 100,
  })
  email_address?: string;

  @Column({
    type: 'varchar',
    length: 2
  })
  user_type?: string;

  @Column({
    type: 'char',
    length: 1,
  })
  email_address_activation_flag?: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  friend_code?: string;

  @Column({
    type: 'char',
    length: 1,
  })
  ignore_access_flag?: string;

  @Column(() => Common)
  common: Common;

}