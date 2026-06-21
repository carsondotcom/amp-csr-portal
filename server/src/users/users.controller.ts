import { Body, Controller, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  findAll(@Query('q') q?: string) {
    return this.usersService.findAll(q);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() dto: UpdateUserDto) {
    return this.usersService.updateUser(id, dto);
  }

  @Post(':id/subscriptions')
  addSubscription(@Param('id') id: string, @Body() dto: CreateSubscriptionDto) {
    return this.usersService.addSubscription(id, dto);
  }

  @Patch(':id/subscriptions/:subId')
  updateSubscription(
    @Param('id') id: string,
    @Param('subId') subId: string,
    @Body() dto: UpdateSubscriptionDto,
  ) {
    return this.usersService.updateSubscription(id, subId, dto);
  }
}
