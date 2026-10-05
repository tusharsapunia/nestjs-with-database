import { Injectable } from '@nestjs/common';
import { Worker } from './schemas/worker.schema.js';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class WorkerService {
  constructor(@InjectModel(Worker.name) private UserModel: Model<Worker>) {}

  async createWorker(data: Partial<Worker>): Promise<Worker> {
    const workerData = new this.UserModel(data);
    return workerData.save();
  }
  async getAllWorker() {
    return this.UserModel.find().exec();
  }
}
