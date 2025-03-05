import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './typeorm.config';

@Global()
@Module({
  imports: [TypeOrmModule.forRootAsync(typeOrmConfig)],
  exports: [TypeOrmModule],
})
export class TypeOrmConfigModule {}
