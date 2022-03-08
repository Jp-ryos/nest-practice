import { Column } from 'typeorm';

export class Common {

  @Column({
    type: 'varchar',
    length: 20,
  })
  _create_user_name: string;

  @Column({
    type: 'timestamp with time zone',
  })
  _create_date_time: string;

  @Column({
    type: 'varchar',
    length: 20,
  })
  _update_user_name: string;

  @Column({
    type: 'timestamp with time zone',
  })
  _update_date_time: string;

  @Column({
    type: 'char',
    length: 1,
  })
  _delete_flag: string;
}