import { Injectable } from '@nestjs/common';
import { PostCommentDto } from './dto/post-comment.dto';
import { PutCommentDto } from './dto/put-comment.dto';

@Injectable()
export class CommentsService {
  create(createCommentDto: PostCommentDto) {
    return 'This action adds a new comment';
  }

  findAll() {
    return `This action returns all comments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: PutCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
