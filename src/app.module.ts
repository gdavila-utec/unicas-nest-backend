import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from './config/config.module';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JuntasModule } from './juntas/juntas.module';
import { HealthModule } from './health/health.module';
import { MembersModule } from './members/members.module';
import { PrestamosModule } from './prestamos/prestamos.module';
import { MultasModule } from './multas/multas.module';
import { AccionesModule } from './acciones/acciones.module';
import { AgendaModule } from './agenda/agenda.module';
import { CapitalModule } from './capital/capital.module';
import { LoggerMiddleware } from './middleware/logger.middleware';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    UsersModule,
    AuthModule,
    JuntasModule,
    HealthModule,
    MembersModule,
    PrestamosModule,
    MultasModule,
    AccionesModule,
    AgendaModule,
    CapitalModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: '*', method: RequestMethod.ALL });
  }
}
