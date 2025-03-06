import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmConfigModule } from '@/modules/typeorm/typeorm.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // 모든 모듈에서 환경 변수 접근 가능
      envFilePath:
        process.env.NODE_ENV === 'production'
          ? '.env.production'
          : '.env.develop',
    }),
    TypeOrmConfigModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
