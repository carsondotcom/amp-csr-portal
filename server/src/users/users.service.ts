import { Injectable, NotFoundException } from '@nestjs/common';
import { createSeedData } from '../data/seed-data';
import { User } from './interfaces/user.interface';
import { UpdateUserDto } from './dto/update-user.dto';
import { CreateSubscriptionDto } from './dto/create-subscription.dto';
import { UpdateSubscriptionDto } from './dto/update-subscription.dto';

@Injectable()
export class UsersService {
  private users: User[] = createSeedData();

  findAll(q?: string): User[] {
    if (!q) return this.users;
    const lower = q.toLowerCase();
    return this.users.filter(
      (user) =>
        user.name?.toLowerCase().includes(lower) ||
        user.email?.toLowerCase().includes(lower) ||
        user.phoneNumber?.includes(q),
    );
  }

  findOne(id: string): User {
    const user = this.users.find((user) => user.id === id);
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  updateUser(id: string, dto: UpdateUserDto): User {
    const user = this.findOne(id);
    Object.assign(user, Object.fromEntries(Object.entries(dto).filter(([_key, value]) => value !== undefined)));
    return user;
  }

  addSubscription(id: string, dto: CreateSubscriptionDto): User {
    const user = this.findOne(id);
    user.subscriptions.push({
      id: crypto.randomUUID(),
      licensePlate: dto.licensePlate,
      type: dto.type,
      status: 'Active',
    });
    return user;
  }

  updateSubscription(userId: string, subId: string, dto: UpdateSubscriptionDto): User {
    const user = this.findOne(userId);
    const sub = user.subscriptions.find((subscription) => subscription.id === subId);
    if (!sub) throw new NotFoundException(`Subscription ${subId} not found`);
    Object.assign(sub, Object.fromEntries(Object.entries(dto).filter(([_key, value]) => value !== undefined)));
    return user;
  }
}
