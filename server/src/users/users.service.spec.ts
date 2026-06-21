import { NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(() => {
    service = new UsersService();
  });

  describe('findAll', () => {
    it('returns all 5 users when no query is provided', () => {
      expect(service.findAll()).toHaveLength(5);
    });

    it('filters by name case-insensitively', () => {
      const results = service.findAll('alice');
      expect(results).toHaveLength(1);
      expect(results[0].name).toBe('Alice Johnson');
    });

    it('filters by email', () => {
      const results = service.findAll('bob.martinez');
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('2');
    });

    it('filters by phone number', () => {
      const results = service.findAll('555-0303');
      expect(results).toHaveLength(1);
      expect(results[0].id).toBe('3');
    });

    it('returns empty array when no users match', () => {
      expect(service.findAll('zzznomatch')).toHaveLength(0);
    });
  });

  describe('findOne', () => {
    it('returns the correct user by id', () => {
      const user = service.findOne('1');
      expect(user.name).toBe('Alice Johnson');
    });

    it('throws NotFoundException for an unknown id', () => {
      expect(() => service.findOne('999')).toThrow(NotFoundException);
    });
  });

  describe('updateUser', () => {
    it('updates only the fields provided', () => {
      const user = service.updateUser('1', { name: 'Alice Smith' });
      expect(user.name).toBe('Alice Smith');
      expect(user.email).toBe('alice.johnson@example.com');
      expect(user.phoneNumber).toBe('555-0101');
    });

    it('throws NotFoundException for an unknown id', () => {
      expect(() => service.updateUser('999', { name: 'Ghost' })).toThrow(NotFoundException);
    });
  });

  describe('addSubscription', () => {
    it('adds a subscription to the user and returns the updated user', () => {
      const user = service.addSubscription('1', { licensePlate: 'NEW-999', type: 'Deluxe' });
      expect(user.subscriptions).toHaveLength(3);
      const added = user.subscriptions[2];
      expect(added.licensePlate).toBe('NEW-999');
      expect(added.type).toBe('Deluxe');
      expect(added.status).toBe('Active');
      expect(added.id).toBeDefined();
    });

    it('throws NotFoundException for an unknown user id', () => {
      expect(() => service.addSubscription('999', { licensePlate: 'X', type: 'Pro' })).toThrow(NotFoundException);
    });
  });

  describe('updateSubscription', () => {
    it('cancels a subscription', () => {
      const user = service.updateSubscription('1', 's1', { status: 'Cancelled' });
      const sub = user.subscriptions.find((s) => s.id === 's1');
      expect(sub?.status).toBe('Cancelled');
    });

    it('transfers a subscription to a new license plate', () => {
      const user = service.updateSubscription('1', 's1', { licensePlate: 'TRF-001' });
      const sub = user.subscriptions.find((s) => s.id === 's1');
      expect(sub?.licensePlate).toBe('TRF-001');
    });

    it('changes subscription type without affecting other fields', () => {
      const user = service.updateSubscription('1', 's1', { type: 'Standard' });
      const sub = user.subscriptions.find((s) => s.id === 's1');
      expect(sub?.type).toBe('Standard');
      expect(sub?.licensePlate).toBe('ABC-1234');
      expect(sub?.status).toBe('Active');
    });

    it('throws NotFoundException for an unknown subscription id', () => {
      expect(() => service.updateSubscription('1', '999', { status: 'Cancelled' })).toThrow(NotFoundException);
    });

    it('throws NotFoundException for an unknown user id', () => {
      expect(() => service.updateSubscription('999', 's1', { status: 'Cancelled' })).toThrow(NotFoundException);
    });
  });
});
