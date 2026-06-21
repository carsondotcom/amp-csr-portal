import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

const mockUser = { id: '1', name: 'Alice Johnson', subscriptions: [] };

const mockService: Partial<UsersService> = {
  findAll: jest.fn().mockReturnValue([mockUser]),
  findOne: jest.fn().mockReturnValue(mockUser),
  updateUser: jest.fn().mockReturnValue(mockUser),
  addSubscription: jest.fn().mockReturnValue(mockUser),
  updateSubscription: jest.fn().mockReturnValue(mockUser),
};

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [{ provide: UsersService, useValue: mockService }],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    jest.clearAllMocks();
  });

  it('findAll passes the query string to the service', () => {
    controller.findAll('alice');
    expect(mockService.findAll).toHaveBeenCalledWith('alice');
  });

  it('findAll passes undefined when no query is given', () => {
    controller.findAll(undefined);
    expect(mockService.findAll).toHaveBeenCalledWith(undefined);
  });

  it('findOne passes the id to the service', () => {
    controller.findOne('1');
    expect(mockService.findOne).toHaveBeenCalledWith('1');
  });

  it('updateUser passes the id and dto to the service', () => {
    const dto = { name: 'Alice Smith' };
    controller.updateUser('1', dto);
    expect(mockService.updateUser).toHaveBeenCalledWith('1', dto);
  });

  it('addSubscription passes the id and dto to the service', () => {
    const dto = { licensePlate: 'NEW-999', type: 'Pro' as const };
    controller.addSubscription('1', dto);
    expect(mockService.addSubscription).toHaveBeenCalledWith('1', dto);
  });

  it('updateSubscription passes the user id, sub id, and dto to the service', () => {
    const dto = { status: 'Cancelled' as const };
    controller.updateSubscription('1', 's1', dto);
    expect(mockService.updateSubscription).toHaveBeenCalledWith('1', 's1', dto);
  });
});
