import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller.js';
import { MenuService } from './menu.service.js';

@Module({
  controllers: [MenuController,MenuController],
  providers: [MenuService,MenuService],
})
export class MenuModule {}
