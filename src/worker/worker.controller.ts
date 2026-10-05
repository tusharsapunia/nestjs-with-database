import { Body, Controller, Get, Post } from '@nestjs/common';
import { WorkerService } from './worker.service.js';
import { Worker } from './schemas/worker.schema.js';

@Controller('worker')
export class WorkerController {
  constructor(private readonly WorkerService: WorkerService) {}

  @Post()
  async createuser(@Body() data: Partial<Worker>) {
    return this.WorkerService.createWorker(data);
  }

  @Get()
  async getAll() {
    return this.WorkerService.getAllWorker();
  }
}
