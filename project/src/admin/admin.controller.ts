import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdminService } from './admin.service';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { viewAdminDTO } from './dto/view-admin.dto';
@ApiTags("Admin")
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}
  @ApiOkResponse({description:"View All Admin Information",type:viewAdminDTO,isArray:true})
  @ApiOperation({summary:"View All Admin"})
  @Get('viewAllAdmin')
  findAll() {
    return this.adminService.findAll();
  }

  @ApiOkResponse({description:"View All Admin Information",type:viewAdminDTO})
  @ApiOperation({summary:"Search Admin Account"})
  @Post('search/:id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(id);
  }
  @ApiOkResponse({description:"Information Updated Successfully"})
  @ApiOperation({summary:"Update Admin Information By ID"})
  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(id, updateAdminDto);
  }
  @ApiOkResponse({description:"Admin Removed Successfully"})
  @ApiOperation({summary:"Delete Admin By ID"})
  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
