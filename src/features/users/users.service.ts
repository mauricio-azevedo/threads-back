import { Injectable } from '@nestjs/common';
import { PostUserDto } from './dto/post-user.dto';
import { PutUserDto } from './dto/put-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  post(postUserDto: PostUserDto) {
    const userModel = new this.userModel(postUserDto);
    return userModel.save();
  }

  listAll() {
    return this.userModel.find().exec();
  }

  getById(id: number) {
    return `This action returns a #${id} user`;
  }

  put(id: number, putUserDto: PutUserDto) {
    return `This action updates a #${id} user`;
  }

  delete(id: number) {
    return `This action removes a #${id} user`;
  }
}
