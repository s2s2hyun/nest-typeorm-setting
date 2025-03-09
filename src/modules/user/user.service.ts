import { Injectable } from '@nestjs/common';

import { UpdateAuthDto } from './dto/update-user.dto';
import { CreateAuthDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  create(CreateAuthDto: CreateAuthDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateAuthDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
