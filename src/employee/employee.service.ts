import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Employee } from './schemas/employee.schema.js';
import { Model } from 'mongoose';
import { Profile } from './schemas/profile.schema.js';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name) private EmployeeModel: Model<Employee>,
    @InjectModel(Profile.name) private ProfileModel: Model<Profile>,
  ) {}

  async createEmployee(data: Partial<Employee>): Promise<Employee> {
    const profile = await new this.ProfileModel({
      age: data.profile?.age,
      email: data.profile?.email,
    }).save();
    const employee = await new this.EmployeeModel({
      name: data.name,
      profile: profile._id,
    });
    return employee.save();
  }

  async getAllEmployee(): Promise<Employee[]> {
    return this.EmployeeModel.find().populate('profile').exec();
  }
}
