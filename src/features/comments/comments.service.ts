import { Injectable } from '@nestjs/common';
import { PostCommentDto } from './dto/post-comment.dto';
import { PutCommentDto } from './dto/put-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './schemas/comment.schema';
import { Model } from 'mongoose';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) {}

  post(postCommentDto: PostCommentDto) {
    return this.commentModel
      .create({
        text: postCommentDto.text,
        user: postCommentDto.userId,
        parent: postCommentDto.parentId,
      })
      .then((doc) => {
        return doc.populate(['user', 'parent']);
      });
  }

  listTopLevel() {
    return this.commentModel.find({ parent: null }).populate('user').exec();
  }

  listByParentId(parentId: string) {
    return this.commentModel.find({ parent: parentId }).populate('user').exec();
  }

  getById(id: number) {
    return `This action returns a #${id} comment`;
  }

  put(id: number, putCommentDto: PutCommentDto) {
    return `This action updates a #${id} comment`;
  }

  delete(id: number) {
    return `This action removes a #${id} comment`;
  }
}
