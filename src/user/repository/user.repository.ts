import { Inject } from '@nestjs/common';
import { TimeProvider, _privateId_timeProvider } from 'src/common/services/TimeProvider';
import { FALSE } from 'src/common/utils/Flag';
import { EntityRepository, FindCondition, FindConditions, FindManyOptions, Repository } from 'typeorm';
import { CreateUserDto } from '../dto/create-user.dto';
import { User } from '../entities/user.entity';

@EntityRepository(User)
export class UserRepository extends Repository<User> {

  constructor(@Inject(_privateId_timeProvider) private readonly timeProvider: TimeProvider) { super(); }


  async createUser(createUserDto: CreateUserDto): Promise<User> {

    let user: User = createUserDto.user;
    await this.save(user);

    return user;
  }

  async getUser(userCode: string, userType: UserType): Promise<User[]> {
    let conditions: FindConditions<User> = {

    };

    if (userCode) {
      conditions.user_code = userCode;
    }

    if (userType) {
      conditions.user_type = userType;
    }

    return await this.find({
      where: conditions
    });
  }

  async seatchUser(userId: string): Promise<User> {
    return await this.findOne(userId);
  }

  async updateUser(user: User): Promise<User> {

    return await this.save(user);
  }

  async deleteUser(user: User): Promise<User> {
    return await this.remove(user);
  }
}