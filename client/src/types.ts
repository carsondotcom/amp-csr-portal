export interface Subscription {
  id: string;
  licensePlate: string;
  type: 'Pro' | 'Standard' | 'Deluxe';
  status: 'Active' | 'Cancelled';
}

export interface Payment {
  id: string;
  amount: number;
  date: string;
}

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  accountStatus: 'Overdue' | 'Active' | 'Inactive';
  subscriptions: Subscription[];
  payments: Payment[];
}
