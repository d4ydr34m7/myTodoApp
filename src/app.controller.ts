import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  private readonly ans = 'NOW!';
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('/authenticate')
  async authenticate(@Body('password') password: string): Promise<{ success: boolean }> {
    const validPassword = password === this.ans; 
    return { success: validPassword };
  }
}
