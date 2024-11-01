import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()], // Enables environmental variables to be added to the nest js app
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
