import { Module } from '@nestjs/common';
import { WorkerService } from './worker.service.js';
import { WorkerController } from './worker.controller.js';
import { MongooseModule } from '@nestjs/mongoose';
import { Worker, WorkerSchema } from './schemas/worker.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Worker.name, schema: WorkerSchema }]),
  ],
  providers: [WorkerService],
  controllers: [WorkerController],
})
export class WorkerModule {}
