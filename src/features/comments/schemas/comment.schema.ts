import mongoose, { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { User } from '../../users/schemas/user.schema';

export type CommentDocument = HydratedDocument<Comment>;
@Schema({ timestamps: true })
export class Comment {
  @Prop()
  text: string;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'User' })
  user: User;

  @Prop({ type: mongoose.Types.ObjectId, ref: 'Comment' })
  parent: Comment | null;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
