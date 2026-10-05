import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service.js';
import { Student } from './student.schema.js';

@Controller('student')
export class StudentController {
  constructor(private readonly StudentService: StudentService) {}

  @Get()
  async getAllStudnts() {
    return this.StudentService.getAllStudnts();
  }
  @Get(':id')
  async getStudnetById(@Param('id') id: string) {
    return this.StudentService.getStudentById(id);
  }

  @Post()
  async createStudent(@Body() data: Partial<Student>) {
    return this.StudentService.createNewStudent(data);
  }
  @Put(':id')
  async updateStudent(@Param('id') id: string, @Body() Body: Partial<Student>) {
    return this.StudentService.updatestudent(id, Body);
  }
  @Patch(':id')
  async patchStudent(@Param('id') id: string, @Body() Body: Partial<Student>) {
    return this.StudentService.patchUpdate(id, Body);
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    return this.StudentService.deleteStudent(id);
  }
}
