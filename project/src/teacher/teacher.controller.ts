import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeacherService } from './teacher.service';
import { UpdateTeacherDto } from './dto/update-teacher.dto';
import {ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { ViewTeacherDTO } from './dto/viewTeacher.dtto';
@ApiTags("Teacher")
@Controller('teacher')
export class TeacherController {
  constructor(private readonly teacherService: TeacherService) {}
  @ApiOperation({summary:"View All Teacher Information"})
  @ApiOkResponse({description:"View All Teacher Information",type:ViewTeacherDTO,isArray:true})
  @Get()
  findAll() {
    return this.teacherService.findAll();
  }
  @ApiOperation({summary:"View Teacher information By ID"})
  @Get(':id')
  @ApiOkResponse({description:"View searched Teacher Information",type:ViewTeacherDTO})
  findOne(@Param('id') id: string) {
    return this.teacherService.findOne(id);
  }
  @ApiOperation({summary:"Update Teacher Information By ID"})
  @ApiOkResponse({description:"Information updated Successfully"})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTeacherDto: UpdateTeacherDto) {
    return this.teacherService.update(id, updateTeacherDto);
  }

  @ApiOperation({summary:"Delete Teacher Information By ID"})
  @ApiOkResponse({description:"Teacher Removed Successfully from the system"})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.teacherService.remove(id);
  }
}
