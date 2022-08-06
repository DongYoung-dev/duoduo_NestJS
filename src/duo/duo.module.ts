import { Module } from '@nestjs/common';
import { DuoService } from './duo.service';
import { DuoController } from './duo.controller';

@Module({
  providers: [DuoService],
  controllers: [DuoController],
})
export class DuoModule {}
