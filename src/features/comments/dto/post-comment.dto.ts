import { IsNotEmpty, IsString } from 'class-validator';

export class PostCommentDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  parentId: string | null;
}
