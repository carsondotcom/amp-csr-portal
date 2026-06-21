import { Subscription } from './subscription.interface';
import { Payment } from './payment.interface';

export interface User {
  id: string;
  name: string;
  phoneNumber: string;
  email: string;
  accountStatus: 'Overdue' | 'Active' | 'Inactive';
  subscriptions: Subscription[];
  payments: Payment[];
}
