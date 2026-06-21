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
      payments: [
        { id: 'p1', amount: 29.99, date: '2026-05-01' },
        { id: 'p2', amount: 14.99, date: '2026-04-01' },
        { id: 'p3', amount: 29.99, date: '2026-03-01' },
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
      payments: [
        { id: 'p4', amount: 49.99, date: '2026-03-15' },
        { id: 'p5', amount: 49.99, date: '2026-02-15' },
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
      payments: [
        { id: 'p6', amount: 64.98, date: '2026-05-10' },
        { id: 'p7', amount: 94.97, date: '2026-04-10' },
        { id: 'p8', amount: 94.97, date: '2026-03-10' },
        { id: 'p9', amount: 94.97, date: '2026-02-10' },
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
      payments: [
        { id: 'p10', amount: 14.99, date: '2025-11-01' },
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
      payments: [
        { id: 'p11', amount: 79.98, date: '2026-05-20' },
        { id: 'p12', amount: 79.98, date: '2026-04-20' },
        { id: 'p13', amount: 29.99, date: '2026-03-20' },
      ],
    },
  ];
}
