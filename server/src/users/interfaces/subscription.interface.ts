export interface Subscription {
  id: string;
  licensePlate: string;
  type: 'Pro' | 'Standard' | 'Deluxe';
  status: 'Active' | 'Cancelled';
}
