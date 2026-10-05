import { Body, Controller, Post ,Get } from '@nestjs/common';
import { EmployeeService } from './employee.service.js';
import { Employee } from './schemas/employee.schema.js';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly EmployeeService: EmployeeService) {}

  @Post()
  async createNew(@Body() data: Partial<Employee>) {
    return this.EmployeeService.createEmployee(data);
  }
  @Get()
  async getALl() {
    return this.EmployeeService.getAllEmployee();
  }
}
