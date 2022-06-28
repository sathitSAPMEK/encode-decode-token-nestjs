import { Injectable } from '@nestjs/common';

@Injectable()
export class EncryptionService {
  async genertateToken(): Promise<string> {
    const prefixString = Math.floor(Math.random() * 1000000 + 1).toString();
    const postfixString = Math.floor(Math.random() * 1000000 + 1).toString();
    const datenow = Date.now().toString();

    await console.log({
      prefixString: prefixString,
      postfixString: postfixString,
      datenow: datenow,
    });

    const codeEncrpt = prefixString + datenow + postfixString;
    const token = Buffer.from(codeEncrpt).toString('base64');
    return token;
  }

  async decodeToken(token: string): Promise<string> {
    return Buffer.from(token, 'base64').toString('ascii');
  }
}
