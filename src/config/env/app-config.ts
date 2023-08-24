import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  URI: process.env.URI,
}));
