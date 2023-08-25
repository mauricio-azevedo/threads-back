import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { PostUserDto } from './dto/post-user.dto';
import { PutUserDto } from './dto/put-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  post(@Body() createUserDto: PostUserDto) {
    return this.usersService.post(createUserDto);
  }

  @Get()
  listAll() {
    return this.usersService.listAll();
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.usersService.getById(+id);
  }

  @Patch(':id')
  put(@Param('id') id: string, @Body() updateUserDto: PutUserDto) {
    return this.usersService.put(+id, updateUserDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.usersService.delete(+id);
  }
}
