export interface Subscription {
  id: string;
  licensePlate: string;
  type: 'Pro' | 'Standard' | 'Deluxe';
  status: 'Active' | 'Cancelled';
}

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  accountStatus: 'Overdue' | 'Active' | 'Inactive';
  subscriptions: Subscription[];
}
