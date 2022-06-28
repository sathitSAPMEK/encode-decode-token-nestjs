import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { EncryptionService } from './encryption/encryption.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly generateTokenService: EncryptionService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/generate-token')
  generateToken(): any {
    return this.generateTokenService.genertateToken();
  }

  @Get('/decode-token/:token')
  decodeToken(@Param('token') token): Promise<string> {
    return this.generateTokenService.decodeToken(token);
  }
}
