import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { UpdateStudentDto } from './dto/update-student.dto';
import {   ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { viewStudentDTO } from './dto/view-student.dto';


@ApiTags("Student")
@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}
  @ApiOkResponse({
    description: 'View All Student',
    type:viewStudentDTO ,
    isArray: true,
  })
  @ApiBadRequestResponse({description:"Student not found"})
  @ApiOperation({summary:"View All Student"})
  @Get()
  findAll() {
    return this.studentService.findAll();
  }
  @ApiOkResponse({
    description: 'View Searched Student information',
    type:viewStudentDTO ,
  })
  @ApiOperation({summary:"Search Student Information by ID"})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(id);
  }
  @ApiOperation({summary:"Update Student Information by ID"})
  @ApiOkResponse({description:"Information Updated Successfully"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(id, updateStudentDto);
  }
  @ApiOperation({summary:"Delete Student by ID"})
  @ApiOkResponse({description:"Student Removed Successfully from the system"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(id);
  }
}
