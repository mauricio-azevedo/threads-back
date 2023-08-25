import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './features/users/users.module';
import { CommentsModule } from './features/comments/comments.module';
import { MongooseModule } from '@nestjs/mongoose';
import { EnvModule } from './config/env/env.module';

@Module({
  imports: [
    UsersModule,
    CommentsModule,
    MongooseModule.forRoot(process.env.URI),
    EnvModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
