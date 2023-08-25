import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CommentsService } from './comments.service';
import { PostCommentDto } from './dto/post-comment.dto';
import { PutCommentDto } from './dto/put-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  create(@Body() createCommentDto: PostCommentDto) {
    return this.commentsService.post(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentsService.listAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentsService.getById(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: PutCommentDto) {
    return this.commentsService.put(+id, updateCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commentsService.delete(+id);
  }
}
