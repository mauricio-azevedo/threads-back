import { PartialType } from '@nestjs/mapped-types';
import { PostCommentDto } from './post-comment.dto';

export class PutCommentDto extends PartialType(PostCommentDto) {}
