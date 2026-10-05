import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module.js';
import { WorkerModule } from './worker/worker.module.js';
import { EmployeeModule } from './employee/employee.module.js';
import { ProductModule } from './product/product.module.js';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL!),
    StudentModule,
    WorkerModule,
    EmployeeModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
