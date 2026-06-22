import { User } from '../users/interfaces/user.interface';

export function createSeedData(): User[] {
  return [
    {
      id: '1',
      name: 'Alice Johnson',
      phoneNumber: '555-0101',
      email: 'alice.johnson@yahoo.com',
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
      name: 'Mario Martinez',
      phoneNumber: '555-0202',
      email: 'mario.martinez@outlook.com',
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
      name: 'Walter White',
      phoneNumber: '555-0303',
      email: 'walter.white@yahoo.com',
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
      name: 'Phillip Banks',
      phoneNumber: '555-0404',
      email: 'phillip.banks@gmail.com',
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
      email: 'eva.nguyen@hotmail.com',
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
    {
      id: '6',
      name: 'Squidward Tentacles',
      phoneNumber: '555-0606',
      email: 'squidward.tentacles@gmail.com',
      accountStatus: 'Active',
      subscriptions: [
        { id: 's10', licensePlate: 'LMN-1122', type: 'Standard', status: 'Active' },
      ],
      payments: [
        { id: 'p14', amount: 14.99, date: '2026-05-05' },
        { id: 'p15', amount: 14.99, date: '2026-04-05' },
        { id: 'p16', amount: 14.99, date: '2026-03-05' },
      ],
    },
    {
      id: '7',
      name: 'Grace Kim',
      phoneNumber: '555-0707',
      email: 'grace.kim@yahoo.com',
      accountStatus: 'Overdue',
      subscriptions: [
        { id: 's11', licensePlate: 'OPQ-3344', type: 'Pro', status: 'Active' },
        { id: 's12', licensePlate: 'RST-5566', type: 'Standard', status: 'Cancelled' },
      ],
      payments: [
        { id: 'p17', amount: 44.98, date: '2026-02-18' },
        { id: 'p18', amount: 44.98, date: '2026-01-18' },
      ],
    },
    {
      id: '8',
      name: 'Henry Patel',
      phoneNumber: '555-0808',
      email: 'henry.patel@hotmail.com',
      accountStatus: 'Inactive',
      subscriptions: [],
      payments: [
        { id: 'p19', amount: 49.99, date: '2025-08-12' },
        { id: 'p20', amount: 49.99, date: '2025-07-12' },
      ],
    },
    {
      id: '9',
      name: 'Evan Kelly',
      phoneNumber: '555-0909',
      email: 'evan.kelly@outlook.com',
      accountStatus: 'Active',
      subscriptions: [
        { id: 's13', licensePlate: 'UVW-7788', type: 'Deluxe', status: 'Active' },
        { id: 's14', licensePlate: 'XYZ-9900', type: 'Pro', status: 'Active' },
        { id: 's15', licensePlate: 'AAB-1234', type: 'Standard', status: 'Active' },
      ],
      payments: [
        { id: 'p21', amount: 94.97, date: '2026-05-28' },
        { id: 'p22', amount: 94.97, date: '2026-04-28' },
        { id: 'p23', amount: 64.98, date: '2026-03-28' },
        { id: 'p24', amount: 49.99, date: '2026-02-28' },
      ],
    },
    {
      id: '10',
      name: 'Zoe Jones',
      phoneNumber: '555-1010',
      email: 'zoe.j123456@gmail.com',
      accountStatus: 'Active',
      subscriptions: [
        { id: 's16', licensePlate: 'CCE-5678', type: 'Pro', status: 'Active' },
      ],
      payments: [
        { id: 'p25', amount: 29.99, date: '2026-06-01' },
        { id: 'p26', amount: 29.99, date: '2026-05-01' },
      ],
    },
  ];
}
