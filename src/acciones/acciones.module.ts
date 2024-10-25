import { Module } from '@nestjs/common';
import { AccionesController } from './acciones.controller';
import { AccionesService } from './acciones.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AccionesController],
  providers: [AccionesService],
  exports: [AccionesService], // Export AccionesService for use in other modules
})
export class AccionesModule {}
