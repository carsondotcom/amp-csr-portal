import { User } from '../users/interfaces/user.interface';

export function createSeedData(): User[] {
  return [
    {
      id: '1',
      name: 'Alice Johnson',
      phoneNumber: '555-0101',
      email: 'alice.johnson@example.com',
      accountStatus: 'Active',
      subscriptions: [
        { id: 's1', licensePlate: 'ABC-1234', type: 'Pro', status: 'Active' },
        { id: 's2', licensePlate: 'XYZ-5678', type: 'Standard', status: 'Active' },
      ],
    },
    {
      id: '2',
      name: 'Bob Martinez',
      phoneNumber: '555-0202',
      email: 'bob.martinez@example.com',
      accountStatus: 'Overdue',
      subscriptions: [
        { id: 's3', licensePlate: 'DEF-2345', type: 'Deluxe', status: 'Active' },
      ],
    },
    {
      id: '3',
      name: 'Carol White',
      phoneNumber: '555-0303',
      email: 'carol.white@example.com',
      accountStatus: 'Active',
      subscriptions: [
        { id: 's4', licensePlate: 'GHI-3456', type: 'Standard', status: 'Active' },
        { id: 's5', licensePlate: 'JKL-4567', type: 'Pro', status: 'Cancelled' },
        { id: 's6', licensePlate: 'MNO-5678', type: 'Deluxe', status: 'Active' },
      ],
    },
    {
      id: '4',
      name: 'David Chen',
      phoneNumber: '555-0404',
      email: 'david.chen@example.com',
      accountStatus: 'Inactive',
      subscriptions: [
        { id: 's7', licensePlate: 'PQR-6789', type: 'Standard', status: 'Cancelled' },
      ],
    },
    {
      id: '5',
      name: 'Eva Nguyen',
      phoneNumber: '555-0505',
      email: 'eva.nguyen@example.com',
      accountStatus: 'Active',
      subscriptions: [
        { id: 's8', licensePlate: 'STU-7890', type: 'Pro', status: 'Active' },
        { id: 's9', licensePlate: 'VWX-8901', type: 'Deluxe', status: 'Active' },
      ],
    },
  ];
}
