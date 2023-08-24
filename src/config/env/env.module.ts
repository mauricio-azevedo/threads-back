import { Global, Module } from '@nestjs/common';
import { EnvService } from './env.service';
import { ConfigModule } from '@nestjs/config';
import appConfig from './app-config';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig],
      cache: true,
    }),
  ],
  providers: [EnvService],
  exports: [EnvService],
})
export class EnvModule {}
