import { IsString } from 'class-validator';

export class PostUserDto {
  @IsString()
  name: string;
}
