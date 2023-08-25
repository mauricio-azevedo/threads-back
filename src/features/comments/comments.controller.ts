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
import { Query } from '@nestjs/common';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post()
  post(@Body() createCommentDto: PostCommentDto) {
    return this.commentsService.post(createCommentDto);
  }

  @Get('/top-level')
  listTopLevel() {
    return this.commentsService.listTopLevel();
  }

  @Get('/nested')
  listByParentId(@Query() params: { parentId: string }) {
    return this.commentsService.listByParentId(params.parentId);
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.commentsService.getById(+id);
  }

  @Patch(':id')
  put(@Param('id') id: string, @Body() updateCommentDto: PutCommentDto) {
    return this.commentsService.put(+id, updateCommentDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.commentsService.delete(+id);
  }
}
