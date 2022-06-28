import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EncryptionModule } from './encryption/encryption.module';
import { EncryptionService } from './encryption/encryption.service';

@Module({
  imports: [EncryptionModule],
  controllers: [AppController],
  providers: [AppService, EncryptionService],
})
export class AppModule {}
